import Link from "next/link";
import styles from "./MemoryCard.module.css";

interface MemoryCardProps {
  id: number;
  src: string;
  text: string;
}

const MemoryCard: React.FC<MemoryCardProps> = ({ id, src, text }) => {
  return (
    <div className={styles.container} key={id}>
      <Link href={`/memory/${id}`}>
        <img src={src} alt={`Memory ${text}`} className={styles.img} />
      </Link>
    </div>
  );
};

export default MemoryCard;
