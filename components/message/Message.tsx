import messages from "../../constant";
import styles from "./Message.module.css";

export default function Message() {
  return (
    <div className={styles.container}>
      {/* <h2>은지의 생일을 축하하는 메세지</h2> */}
      {messages.map((message) => (
        <div key={message.id} className={styles.textContainer}>
          <h3 className={styles.name}>{message.name}</h3>
          <p className={styles.text}>{message.text}</p>
        </div>
      ))}
    </div>
  );
}
