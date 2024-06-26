// utils/timeUtils.js
export const calculateTimeLeft = () => {
  const endTime = new Date("2024-06-31T23:59:59").getTime(); // Set your end time here
  const now = new Date().getTime();
  const timeLeft = endTime - now;

  const days = Math.floor(timeLeft / (1000 * 60 * 60 * 24));
  const hours = Math.floor(
    (timeLeft % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
  );
  const minutes = Math.floor((timeLeft % (1000 * 60 * 60)) / (1000 * 60));
  const seconds = Math.floor((timeLeft % (1000 * 60)) / 1000);

  return { days, hours, minutes, seconds };
};
