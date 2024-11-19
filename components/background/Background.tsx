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
              <img
                src="/assets/ling.jpg"
                alt="링 바인더 아이콘"
                className={styles.lingImg}
              />
            </div>
            <div className={styles.ling}>
              <img
                src="/assets/ling.jpg"
                alt="링 바인더 아이콘"
                className={styles.lingImg}
              />
            </div>
          </div>
          <div className={styles.lingBottomBox}>
            <div className={styles.ling}>
              <img
                src="/assets/ling.jpg"
                alt="링 바인더 아이콘"
                className={styles.lingImg}
              />
            </div>
            <div className={styles.ling}>
              <img
                src="/assets/ling.jpg"
                alt="링 바인더 아이콘"
                className={styles.lingImg}
              />
            </div>
          </div>

          <div className={styles.leftBox}>
            <div className={styles.profileBox}>
              <img
                src="/assets/profile.jpg"
                alt="프로필 사진"
                className={styles.profile}
              />
              <p className={styles.profileText}>TODAY IS.. 🌞즐거움</p>
              <p className={styles.profileMessage}>
                "...왜 울었는데..." <br /> ".......양파 썰다가" <br />
                "왜 울었냐고" <br /> "양파 때문이라고 대답했어" <br /> "....내가
                양파냐......." <br />
              </p>
                <p className={styles.profileMessageTitle}>- 개기면 죽는다 중 -</p>
            </div>
          </div>
          <div className={styles.rightBox}>
            <div className={styles.mainBox}>{children}</div>
            <div className={styles.sideBox}>
              <Link href={"/"}>
                <div className={styles.sideMenu}>홈</div>
              </Link>
              <Link href={"/video"}>
                <div className={styles.sideMenu}>비디오</div>
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
