import styles from "./VideoCard.module.css";

export default function VideoCard() {
  return (
    <div className={styles.container}>
      <video className={styles.video} controls>
        <source src="assets/video/travel.mp4" type="video/mp4" />
      </video>
    </div>
  );
}
