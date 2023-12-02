const year: number = 2023;
const month: number = 7;

// Create a Date object for the first day of the next month (
const lastDayOfPreviousMonth: Date = new Date(year, month + 1, 0);

// Get the day of the month
const lastDay: number = lastDayOfPreviousMonth.getDate();

console.log(`The last day of this month is: ${lastDay}`);

