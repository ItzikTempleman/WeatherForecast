export function formatTime(dateStr: string) {
    const forecastDate = new Date(dateStr);
    const today = new Date();
    const tomorrow = new Date();
    tomorrow.setDate(today.getDate() + 1);
    const isToday = forecastDate.toDateString() === today.toDateString();
    const isTomorrow = forecastDate.toDateString() === tomorrow.toDateString();

    if (isToday) return "Today";
    if (isTomorrow) return "Tomorrow";
    const adapterName = forecastDate.toLocaleDateString("en-US", {weekday: "long"});
    const formattedDate = forecastDate.toLocaleDateString("en-GB");

    return `${adapterName} ${formattedDate}`
}

