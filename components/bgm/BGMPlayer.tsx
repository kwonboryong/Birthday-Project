"use client";
import { useRef, useState } from "react";
import styles from "./BGMPlayer.module.css";
import { FaRegPlayCircle } from "react-icons/fa";
import { FaRegPauseCircle } from "react-icons/fa";

const BGMPlayer = () => {
  const audioRef = useRef<HTMLAudioElement>(null);
  const [isPlaying, setIsPlaying] = useState(false);

  const playAudio = () => {
    if (audioRef.current) {
      audioRef.current.play().catch((e) => {
        console.log("자동 재생이 차단되었습니다: ", e);
      });
      setIsPlaying(true);
    }
  };

  const pauseAudio = () => {
    if (audioRef.current) {
      audioRef.current.pause();
      setIsPlaying(false);
    }
  };

  return (
    <div className={styles.container}>
      <p className={styles.text}>생일 축하 BGM</p>
      <audio ref={audioRef} loop>
        <source src="/assets/audio/bgm.mp3" type="audio/mp3" />
        Your browser does not support the audio element.
      </audio>

      <button onClick={playAudio} disabled={isPlaying} className={styles.button}>
        <FaRegPlayCircle />
      </button>
      <button onClick={pauseAudio} disabled={!isPlaying} className={styles.button}>
        <FaRegPauseCircle />
      </button>
    </div>
  );
};

export default BGMPlayer;
