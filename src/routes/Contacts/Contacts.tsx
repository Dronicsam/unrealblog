"use client";

import Link from "next/link";
import { Dispatch, SetStateAction, useState } from "react";
import { GitHub, Telegram, VK } from "shared/iconpack";
import styles from "./style.module.scss";

interface ColorProps {
  stan: string;
  curr: string;
  mouseOn: boolean;
  setColor: Dispatch<SetStateAction<string>>;
}

export const Contacts = () => {
  const colors = {
    GitHub: "#7D8590",
    Telegram: "#1b92d1",
    VK: "#355e91",
    Standart: "#472736",
  };
  const [gitcolor, setGitcolor] = useState<string>(colors.Standart);
  const [tgcolor, setTgColor] = useState<string>(colors.Standart);
  const [vkcolor, setVKColor] = useState<string>(colors.Standart);
  const svgHeight = "40";

  const handleColor = ({ mouseOn, setColor, stan, curr }: ColorProps) => {
    if (mouseOn) {
      setColor(curr);
    } else {
      setColor(stan);
    }
  };
  return (
    <div className={styles.container}>
      <h1>Контакты</h1>
      <div className={styles.containerElement}>
        <Link
          onMouseEnter={() => {
            handleColor({
              stan: colors.Standart,
              curr: colors.GitHub,
              mouseOn: true,
              setColor: setGitcolor,
            });
          }}
          onMouseLeave={() =>
            handleColor({
              stan: colors.Standart,
              curr: colors.GitHub,
              mouseOn: false,
              setColor: setGitcolor,
            })
          }
          className={styles.containerElementText}
          href="https://github.com/Dronicsam"
        >
          GitHub
        </Link>
        <div className={styles.spacer} />
        <GitHub color={gitcolor} height={svgHeight} />
      </div>
      <div className={styles.containerElement}>
        <Link
          className={styles.containerElementText}
          href="https://t.me/wingto028"
          onMouseEnter={() =>
            handleColor({
              stan: colors.Standart,
              curr: colors.Telegram,
              mouseOn: true,
              setColor: setTgColor,
            })
          }
          onMouseLeave={() =>
            handleColor({
              stan: colors.Standart,
              curr: colors.Telegram,
              mouseOn: false,
              setColor: setTgColor,
            })
          }
        >
          Telegram
        </Link>
        <div className={styles.spacer} />
        <Telegram color={tgcolor} height={svgHeight} />
      </div>
      <div className={styles.containerElement}>
        <Link
          className={styles.containerElementText}
          href="https://vk.com/dronic028"
          onMouseEnter={() =>
            handleColor({
              stan: colors.Standart,
              curr: colors.VK,
              mouseOn: true,
              setColor: setVKColor,
            })
          }
          onMouseLeave={() =>
            handleColor({
              stan: colors.Standart,
              curr: colors.VK,
              mouseOn: false,
              setColor: setVKColor,
            })
          }
        >
          VK
        </Link>
        <div className={styles.spacer} />
        <VK height={svgHeight} color={vkcolor} />
      </div>
    </div>
  );
};
