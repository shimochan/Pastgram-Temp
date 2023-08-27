import styles from "./header.module.css"
import { logo } from '../lib/font';
import { get_header } from "../lib/page_api";

function calculateDateDifference(startDate, endDate) {
  const timeDifference = Math.abs(endDate - startDate);

  const millisecondsInADay = 24 * 60 * 60 * 1000;
  const daysDifference = Math.floor(timeDifference / millisecondsInADay);
  const hoursDifference = Math.floor((timeDifference % millisecondsInADay) / (60 * 60 * 1000));
  const minutesDifference = Math.floor((timeDifference % (60 * 60 * 1000)) / (60 * 1000));
  const secondsDifference = Math.floor((timeDifference % (60 * 1000)) / 1000);

  return {
    days: daysDifference,
    hours: hoursDifference,
    minutes: minutesDifference,
    seconds: secondsDifference
  };
}

export async function Header() {
  const { limit, tag } = await get_header();
  const date = new Date(limit);
  const now = new Date();
  const { days, hours, minutes } = calculateDateDifference(now, date);
  console.log(limit)
  console.log(days, hours, minutes)

  let message = "あと";
  if (Math.abs(days) > 1) {
    message += `${days}日`;
  } else if (Math.abs(hours) > 1) {
    message += `${hours}時間`;
  } else {
    message += `${minutes}分`;
  }

  return (
    <header className={styles.container}>
      <div className={[logo.className, styles.logo].join(' ')} variant="h5" align="center">
        Pastgram
      </div>
     <div className={styles.text}>＃{tag}</div>
     <div className={styles.day}>{message}</div>
    </header>
  );
}
