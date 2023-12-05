export const calculateTimeLeft = () => {
    const now = new Date();
    const newYear = new Date(now.getFullYear() + 1, 0, 1, 0, 0, 0, 0);
    const timeUntilNewYear = newYear - now;
    const days = Math.floor(timeUntilNewYear / (1000 * 60 * 60 * 24)).toLocaleString("en-US", {minimumIntegerDigits: 2});
    const hours = Math.floor((timeUntilNewYear % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)).toLocaleString("en-US", {minimumIntegerDigits: 2});
    const minutes = Math.floor((timeUntilNewYear % (1000 * 60 * 60)) / (1000 * 60)).toLocaleString("en-US", {minimumIntegerDigits: 2});
    const seconds = Math.floor((timeUntilNewYear % (1000 * 60)) / 1000).toLocaleString("en-US", {minimumIntegerDigits: 2});
    return { days, hours, minutes, seconds };
};