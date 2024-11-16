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
        <p className={styles.title}>💿Playlist Picks</p>
        <div className={styles.decorative}>
          <div className="table-container">
            <table>
              <tbody>
                <tr>
                  <td>
                    <Link
                      href={"https://youtu.be/58IEh6YkuzQ?si=L69fwefW5yurRyB1"}
                    >
                      오르트 구름
                    </Link>
                  </td>
                  <td>
                    <Link
                      href={"https://youtu.be/l-H4QHLC-Uc?si=JbUf5uzpyZqwgQg1"}
                    >
                      HAPPY
                    </Link>
                  </td>
                </tr>
                <tr>
                  <td>
                    <Link
                      href={"https://youtu.be/2tda_TCjz8w?si=I8ElINeeOn1v8u_9"}
                    >
                      Girls Never Die
                    </Link>
                  </td>
                  <td>
                    <Link
                      href={"https://youtu.be/XV0lSvr0huU?si=wkrRDrR2fXtajnqd"}
                    >
                      너와의 모든 시간
                    </Link>
                  </td>
                </tr>
                <tr>
                  <td>
                    <Link
                      href={"https://youtu.be/B9vB01PEnzE?si=j7iadB_b40ZH986M"}
                    >
                      Counter
                    </Link>
                  </td>
                  <td>
                    <Link
                      href={"https://youtu.be/hrXCP0xeoA8?si=WDuLDgDMe1aREchc"}
                    >
                      행운을 빌어줘
                    </Link>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
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
