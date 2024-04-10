import Link from "next/link";
import { Icecream } from "shared/iconpack";
import styles from "./style.module.scss";

export const Header = () => (
  <div className={styles.container}>
    <div style={{ display: "none" }} />
    <Link href="/">
      <Icecream className={styles.containerIcon} />
    </Link>
    <div className={styles.containerLinks}>
      <Link href="/contacts" className={styles.containerLinksText}>
        Контакты
      </Link>
      <Link href="/" className={styles.containerLinksText}>
        Портфолио
      </Link>
    </div>
  </div>
);
