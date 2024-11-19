import MemoryCard from "../../components/memoryCard/MemoryCard";
import styles from "./Memory.module.css";
import memory from "./../../memory";
import { it } from "node:test";

export default function Memory() {
  return (
    <div className={styles.container}>
      {memory.map((item) => (
        <MemoryCard id={item.id} src={item.src} />
      ))}
    </div>
  );
}
