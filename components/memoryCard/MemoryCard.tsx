import Link from "next/link";
import styles from "./MemoryCard.module.css";

export default function MemoryCard({ id, src, text }) {
  return (
    <div className={styles.container} key={id}>
      <Link href={`/memory/${id}`}>
        <img src={src} alt={`Memory ${id}`} className={styles.img} />
      </Link>
    </div>
  );
}
