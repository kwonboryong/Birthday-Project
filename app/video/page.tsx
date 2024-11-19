import VideoCard from "../../components/videoCard/VideoCard";
import styles from "./Video.module.css";

export default function Video() {
  return (
    <div className={styles.container}>
      <div>
        <h2 className={styles.title}>우리의 즐거웠던 여행🩵</h2>
        <p className={styles.text}>썩은 편집도 눈 감고 봐줘 <br/> 우리가 같이 찍은 영상이 바다 영상 밖에 없어서 최대한 함께 웃고 있는 것들로만 넣었어 <br/> 근데 편집하다보니까 나도 같이 웃게 되더라 되게 신나보여ㅎㅎ <br/>계속 얘기하지만 참 좋은 추억이었어 <br/> 
        ps. 이 영상 인스타에 올려도 돼? ㅎ</p>
      </div>
      <VideoCard />
    </div>
  );
}
