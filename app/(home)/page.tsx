import Link from "next/link";
import styles from "./Home.module.css";

export default function Home() {
  return (
    <div className={styles.container}>
      <div className={styles.updateNews}>
        <p>Updated news</p>
        <div className={styles.newContent}>
          <p>[스크랩] ㅇ</p>
          <p>[스크랩] ㅇ</p>
          <p>[스크랩] ㅇ</p>
        </div>
      </div>
      
      <div className={styles.bgm}>
        <p>BGM</p>
      </div>

      <div className={styles.miniRoom}>
        <p>Mini Room</p>
        <img src="/assets/miniroom.jpg" alt="미니룸 사진" className={styles.miniRoomImg} />
      </div>
    </div>
  );
}
