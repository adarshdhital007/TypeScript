const today: Date = new Date(); // Current date
const y: number = today.getFullYear();
const m: number = today.getMonth();

// Create a Date object for the last day of the current month 
const lastDayOfCurrentMonth: Date = new Date(y, m + 1, 0);

// Calculate the total days remaining in the current month
const totalDaysRemainingInMonth: number = Math.floor((lastDayOfCurrentMonth.getTime() - today.getTime()) / (1000 * 60 * 60 * 24));

// Create a Date object for the last day of the current year
const lastDayOfCurrentYear: Date = new Date(y, 11, 31); 

// Calculate the total days remaining in the current year
const totalDaysRemainingInYear: number = Math.floor((lastDayOfCurrentYear.getTime() - today.getTime()) / (1000 * 60 * 60 * 24));

console.log(`Total days remaining in the current month: ${totalDaysRemainingInMonth}`);
console.log(`Total days remaining in the current year: ${totalDaysRemainingInYear}`);
