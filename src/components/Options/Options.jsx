import styles from './Options.module.css';

export default function Options({ onUpdateFeedback, onReset, totalFeedback }) {
  return (
    <div className={styles.options}>
      <button className={styles.button} onClick={() => onUpdateFeedback("good")}>Good</button>
      <button className={styles.button} onClick={() => onUpdateFeedback("neutral")}>Neutral</button>
      <button className={styles.button} onClick={() => onUpdateFeedback("bad")}>Bad</button>
      {totalFeedback > 0 && (
        <button className={styles.button} onClick={onReset}>Reset</button>
      )}
    </div>
  );
}
