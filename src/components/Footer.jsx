import styles from "./Footer.module.css";

export default function footer() {
  return (
    <footer className={styles.footer}>
      <p>
        The Buzz Room is brought to you by Marketing Association New Zealand.
        For more information, visit{" "}
        <span className={styles.link}>www.marketingassnz.co.nz</span>
      </p>
    </footer>
  );
}
