import styles from './Feedback.module.css'


export default function Feedback  ({ good, neutral, bad, total, percent })  {
  return (
      <div className={styles.feedback}>
          <h2 className={styles.title}>Statistics</h2>
      <div className={styles.statistics}>
          <p className={styles.text}>Good: {good}</p>
          <p className={styles.text}>Neutral: {neutral}</p>
          <p className={styles.text}>Bad: {bad}</p>
          <p className={styles.text}>Total: {total}</p>
          <p className={styles.text}>Positive feedback: {percent}%</p>
      </div>
    </div>
  );
};


