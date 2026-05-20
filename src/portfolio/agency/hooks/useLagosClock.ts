import { useEffect, useState } from 'react';

function format(date: Date): string {
  const abuja = new Intl.DateTimeFormat('en-GB', {
    timeZone: 'Africa/Lagos',
    hour: '2-digit',
    minute: '2-digit',
    second: '2-digit',
    hour12: false,
  }).format(date);
  return abuja;
}

export function useLagosClock(): string {
  const [time, setTime] = useState(() => format(new Date()));

  useEffect(() => {
    const id = setInterval(() => setTime(format(new Date())), 1000);
    return () => clearInterval(id);
  }, []);

  return time;
}
