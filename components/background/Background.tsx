import { ReactNode } from "react";
import Link from "next/link";
import styles from "./Background.module.css";

// children을 받는 타입을 정의합니다.
interface BackgroundProps {
  children: ReactNode; // children을 받기 위한 prop 타입
}

export default function Background({ children }: BackgroundProps) {
  return (
    <div className={styles.container}>
      <div className={styles.firstBox}>
        <div className={styles.secondBox}>
          <div className={styles.lingBox}>
            <div className={styles.ling}>
              <img src="/assets/ling.jpg" alt="" className={styles.lingImg} />
            </div>
            <div className={styles.ling}>
              <img src="/assets/ling.jpg" alt="" className={styles.lingImg} />
            </div>
          </div>
          <div className={styles.lingBottomBox}>
            <div className={styles.ling}>
              <img src="/assets/ling.jpg" alt="" className={styles.lingImg} />
            </div>
            <div className={styles.ling}>
              <img src="/assets/ling.jpg" alt="" className={styles.lingImg} />
            </div>
          </div>

          <div className={styles.leftBox}>
            <p>프로필</p>
          </div>
          <div className={styles.rightBox}>
            <div className={styles.mainBox}>
              {children}
            </div>
            <div className={styles.sideBox}>
              <Link href={"/"}>
                <div className={styles.sideMenu}>홈</div>
              </Link>
              <Link href={"/messagesFeed"}>
                <div className={styles.sideMenu}>방명록</div>
              </Link>
              <Link href={"/memory"}>
                <div className={styles.sideMenu}>다이어리</div>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
