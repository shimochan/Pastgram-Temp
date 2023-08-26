import styles from "./header.module.css"

export function Header() {
  return (
   
    <header className={styles.container}>
     <div className={styles.text}>＃高校の修学旅行</div>
     <div className={styles.day}>あと3日</div>
    </header>
  );
}
