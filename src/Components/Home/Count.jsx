import { useState, useEffect } from 'react';

const ExamCountdown = () => {
  const [timeLeft, setTimeLeft] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0
  });

  useEffect(() => {
    // Set the date we're counting down to
    const examDate = new Date("2024-08-01T00:00:00").getTime();

    const timer = setInterval(() => {
      // Get today's date and time
      const now = new Date().getTime();

      // Find the distance between now and the exam date
      const distance = examDate - now;

      // Time calculations for days, hours, minutes and seconds
      const days = Math.floor(distance / (1000 * 60 * 60 * 24));
      const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
      const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
      const seconds = Math.floor((distance % (1000 * 60)) / 1000);

      setTimeLeft({ days, hours, minutes, seconds });

      // If the countdown is finished, clear the interval
      if (distance < 0) {
        clearInterval(timer);
        setTimeLeft({ days: 0, hours: 0, minutes: 0, seconds: 0 });
      }
    }, 1000);

    // Clear interval on component unmount
    return () => clearInterval(timer);
  }, []);

  return (
    <div className="bg-navy-800 text-white p-6 rounded-lg shadow-lg max-w-md mx-auto">
      <h2 className="text-2xl font-bold mb-4 text-center">Final Exam 2023-2024</h2>
      <div className="grid grid-cols-4 gap-4 text-center">
        <div>
          <div className="text-4xl font-bold text-orange-500">{timeLeft.days}</div>
          <div className="text-sm">Days</div>
        </div>
        <div>
          <div className="text-4xl font-bold text-orange-500">{timeLeft.hours}</div>
          <div className="text-sm">Hours</div>
        </div>
        <div>
          <div className="text-4xl font-bold text-orange-500">{timeLeft.minutes}</div>
          <div className="text-sm">Minutes</div>
        </div>
        <div>
          <div className="text-4xl font-bold text-orange-500">{timeLeft.seconds}</div>
          <div className="text-sm">Seconds</div>
        </div>
      </div>
      <div className="text-center mt-4 text-lg">Insha Allah</div>
    </div>
  );
};

export default ExamCountdown;