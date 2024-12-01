/* eslint-disable consistent-return */
/* eslint-disable no-nested-ternary */
import { type FC, useEffect, useState } from 'react';
import { formatDate } from 'main/utils';

interface TimeAgoProps {
  date: Date;
}

const convertHour = (date: Date): string => {
  const offsetUTC3 = -180;

  const adjustedDate = new Date(date);
  const dateOffset = adjustedDate.getTimezoneOffset();

  if (dateOffset !== offsetUTC3) adjustedDate.setHours(adjustedDate.getHours() - 3);

  const now = new Date();
  const nowOffset = now.getTimezoneOffset();
  const adjustedNow = new Date(now);

  if (nowOffset !== offsetUTC3) adjustedNow.setHours(adjustedNow.getHours() - 3);

  const diffInMilliseconds = now.getTime() - adjustedDate.getTime();
  const diffInHours = Math.floor(diffInMilliseconds / (1000 * 60 * 60));
  const diffInMinutes = Math.floor(diffInMilliseconds / (1000 * 60));
  const diffInDays = Math.floor(diffInMilliseconds / (1000 * 60 * 60 * 24));

  if (diffInDays >= 1) return formatDate(date, 'dd/MM/yyyy HH:mm');
  if (diffInHours >= 1) return `${diffInHours} horas atrás`;
  return `${diffInMinutes === 0 ? 1 : diffInMinutes} minutos atrás`;
};

export const TimeAgo: FC<TimeAgoProps> = ({ date }) => {
  const [timeAgo, setTimeAgo] = useState(convertHour(date));

  useEffect(() => {
    const interval = timeAgo.includes('minutos')
      ? 60000
      : timeAgo.includes('horas')
        ? 3600000
        : null;

    if (interval) {
      const timer = setInterval(() => {
        setTimeAgo(convertHour(date));
      }, interval);

      return () => clearInterval(timer);
    }
  }, [timeAgo, date]);

  return <span>{timeAgo}</span>;
};
