import Link from "next/link";
import styles from "./Home.module.css";

export default function Home() {
  return (
    <div className={styles.container}>
      <div className={styles.updateNews}>
        <p className={styles.title}>Updated news</p>
        <div className={styles.decorative}></div>
        <div className={styles.newContent}>
          <ul>
            <li>
              <Link href={"https://www.instagram.com/mi_co.tae/"}>
                [스크랩] 은지의 생일을 축하하며...
              </Link>
            </li>
            <li>
              <Link href={"https://github.com/kwonboryong"}>호다닥 만들기</Link>
            </li>
            <li>
              <Link href={"https://www.youtube.com/watch?v=yss4rIrHl6o"}>
                [스크랩] 싸이월드 해봤어? 난 안해봤어
              </Link>
            </li>
            <li>
              <Link href={"https://www.instagram.com/day6kilogram/"}>
                [스크랩] 데이식스 콘서트 12월 21일
              </Link>
            </li>
          </ul>
        </div>
      </div>

      <div className={styles.bgm}>
        <p className={styles.title}>💿BGM</p>
        <div className={styles.decorative}></div>
      </div>

      <div className={styles.miniRoom}>
        <p className={styles.title}>Mini Room</p>
        <div className={styles.decorative}></div>
        <img
          src="/assets/miniroom.jpg"
          alt="미니룸 사진"
          className={styles.miniRoomImg}
        />
      </div>
    </div>
  );
}
