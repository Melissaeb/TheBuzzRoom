import styles from "./ArticleCard.module.css";

export default function ArticleCard(props) {
  return (
    <div className={styles.articleCard}>
      <img src={props.src} alt="Article image" className={styles.image} />
      <div className={styles.nameDescription}>
        <h3 className={styles.name}>{props.name}</h3>
        <p className={styles.description}>{props.description}</p>
      </div>
    </div>
  );
}
