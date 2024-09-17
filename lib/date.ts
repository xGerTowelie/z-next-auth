export function getFirstDayOfLastMonth() {
    const now = new Date();
    const firstDay = new Date(now.getFullYear(), now.getMonth(), 1);
    const lastMonth = new Date(firstDay.setMonth(firstDay.getMonth() - 1));
    return lastMonth;
}

export function formatDateDayMonth(date?: Date) {
    if (!date) return ""
    return date.toLocaleDateString("de-DE", { day: "2-digit", month: "long" })
}
