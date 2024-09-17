# Next Auth

## Basic setup

To understand the basic setup, please have a look at the history of this repo. All steps are documented in their own commits. These can be accessed here: [All Commits(main)](https://github.com/xGerTowelie/z-next-auth/commits/main/)

## Providers

A provider is simply a type of authentication. This repo covers mainly setup of email authentication in NextJs. If you want to add further providers, consider the documentation on the [official auth.js](https://auth.js) page. There you can find all types of providers. At the end there are examples for basic setup.

Like this for the simple `Credentials`:

```typescript
// @/auth/index.ts
import { Auth } from "@auth/core"
import Credentials from "@auth/core/providers/credentials"
 
const request = new Request("https://example.com")
const response = await AuthHandler(request, {
  providers: [
    Credentials({
      credentials: {
        username: { label: "Username" },
        password: {  label: "Password", type: "password" }
      },
      async authorize({ request }) {
        const response = await fetch(request)
        if(!response.ok) return null
        return await response.json() ?? null
      }
    })
  ],
  secret: "...",
  trustHost: true,
})
```

Have a look at the `@/auth/index.ts` file to see how this was changed, to work with a database access over prisma. Here we have full controll, on what it means to "authenticate".

## Usage

To use the login and logout functionality, we can import the server component of the `<AuthButton />` from `@/auth/AuthButton.server`. This will triggers all the magic of the authentication process.
