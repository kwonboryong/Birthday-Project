"use client";
import { useRouter } from "next/navigation";
import memory from "../../../memory";
import styles from "./MemoryDetail.module.css";
import { IoReturnUpBackOutline } from "react-icons/io5";

type IParams = Promise<{
  id: string;
}>;

export default async function MemoryDetail(props: { params: IParams }) {
  const router = useRouter();

  const params = await props.params;
  const id = params.id;
  const memoryId = parseInt(id);
  const memoryItem = memory.find((item) => item.id === memoryId);

  if (!memoryItem) {
    return <p>해당 메모리가 없습니다.</p>;
  }

  return (
    <div className={styles.container}>
      <div className={styles.contentBox}>
        <button className={styles.backBtn} onClick={() => router.back()}>
          <IoReturnUpBackOutline />
        </button>
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
