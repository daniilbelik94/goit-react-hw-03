import styles from './description.module.css';

export default function Description() {
  return (
    <div className={styles.description}>
          <h1 className={styles.title}>Sip Happens Café</h1>
          
      <p className={styles.text}>
        Please leave your feedback <span>about</span> our service <span>by</span> selecting one <span>of the</span> options <span>below</span>.
      </p>
    </div>
  );
}
