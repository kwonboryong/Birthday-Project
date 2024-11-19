import memory from "../../../memory";
import styles from "./MemoryDetail.module.css";
import { IoReturnUpBackOutline } from "react-icons/io5";

export default function MemoryDetail({ params: { id } }) {
  const memoryId = parseInt(id);

  const memoryItem = memory.find((item) => item.id === memoryId);

  if (!memoryItem) {
    return <p>해당 메모리가 없습니다.</p>;
  }

  return (
    <div className={styles.container}>
      <div className={styles.contentBox}>
        <div className={styles.back}>
          <IoReturnUpBackOutline />
        </div>
        <h1 className={styles.title}>{memoryItem.text}</h1>
        <img
          src={memoryItem.src}
          alt={memoryItem.text}
          className={styles.img}
        />
        <p className={styles.description}>{memoryItem.description}</p>
      </div>
    </div>
  );
}
