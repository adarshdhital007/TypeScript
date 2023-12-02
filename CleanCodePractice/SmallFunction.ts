// Keep function small and focused
const validateEmail = (email: string): boolean => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
};

const isValidEmail: boolean = validateEmail("dhitaladarsh6@gmail.com");
console.log(isValidEmail);
