"use client";

import { Button } from "@mantine/core";
import { useRouter } from "next/navigation";
import styles from "./style.module.scss";

export const NotFound = () => {
  const router = useRouter();
  return (
    <div className={styles.container}>
      <h1>Вот это да! Ошибочка вышла, извините</h1>
      <p className={styles.containerElement}>yu</p>
      <Button onClick={() => router.push("/")} variant="light" color="pink">
        Вернуться на главную
      </Button>
    </div>
  );
};
