import styles from "./SecondaryBtn.module.scss";

const SecondaryBtn = ({ text, href }) => {
  /* From Uiverse.io by mrhyddenn */
  return (
    <a href={href} className={styles.button}>
      <span className={styles.button_lg}>
        <span className={styles.button_sl}></span>
        <p className={styles.button_text}>{text}</p>
      </span>
    </a>
  );
};

export default SecondaryBtn;
