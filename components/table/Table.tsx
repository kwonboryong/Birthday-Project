import Link from "next/link";
import styles from "./Table.module.css";

export default function Table() {
  return (
    <div className={styles.tableContainer}>
      <table className={styles.table}>
        <tbody >
          <tr>
            <td className={styles.td}>
              <Link href={"https://youtu.be/58IEh6YkuzQ?si=L69fwefW5yurRyB1"}>
                오르트 구름
              </Link>
            </td>
            <td className={styles.td}>
              <Link href={"https://youtu.be/l-H4QHLC-Uc?si=JbUf5uzpyZqwgQg1"}>
                HAPPY
              </Link>
            </td>
          </tr>
          <tr>
            <td className={styles.td}>
              <Link href={"https://youtu.be/2tda_TCjz8w?si=I8ElINeeOn1v8u_9"}>
                Girls Never Die
              </Link>
            </td>
            <td className={styles.td}>
              <Link href={"https://youtu.be/XV0lSvr0huU?si=wkrRDrR2fXtajnqd"}>
                너와의 모든 시간
              </Link>
            </td>
          </tr>
          <tr>
            <td className={styles.td}>
              <Link href={"https://youtu.be/B9vB01PEnzE?si=j7iadB_b40ZH986M"}>
                Counter
              </Link>
            </td>
            <td className={styles.td}>
              <Link href={"https://youtu.be/hrXCP0xeoA8?si=WDuLDgDMe1aREchc"}>
                행운을 빌어줘
              </Link>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  );
}
