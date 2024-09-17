import { hash, compare } from 'bcryptjs'
import { z } from 'zod'
import prisma from '@/lib/prisma'

const userSchema = z.object({
    username: z.string().min(2).max(50),
    email: z.string().email(),
    password: z.string().min(6),
})

export async function createUser(userData: z.infer<typeof userSchema>) {
    const { username, email, password } = userSchema.parse(userData)

    const existingUser = await prisma.user.findUnique({ where: { email } })
    if (existingUser) {
        throw new Error('User already exists')
    }

    const hashedPassword = await hash(password, 10)

    const user = await prisma.user.create({
        data: {
            username,
            email,
            password: hashedPassword,
        },
    })

    return { id: user.id, username: user.username, email: user.email }
}

export async function validateUser(username: string, password: string) {
    const user = await prisma.user.findUnique({ where: { username } })
    if (!user) {
        return null
    }

    const isValid = await compare(password, user.password)
    if (!isValid) {
        return null
    }

    return { id: user.id, username: user.username, email: user.email }
}
