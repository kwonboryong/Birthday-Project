import Message from "../../components/message/Message";
import styles from "./MessagesFeed.module.css";

export default function MessagesFeed() {
  return (
    <div className={styles.container}>
      <h2>은지의 생일을 축하하는 메세지💌</h2>
      <Message/>
    </div>
  );
}