"use client";

import Link from "next/link";
import { useTranslations } from "next-intl";
import ChangeLang from "../changeLang/ChangeLang";
import { useLocale } from "next-intl";
import styles from "./Navbar.module.scss";

export default function Navbar() {
  const t = useTranslations("Navbar");
  const locale = useLocale();



  return (
    <header className={styles.navbar}>
      <nav>
        <div>
          <Link href={`/${locale}`}>{t("logo")}</Link>
        </div>
        <ul>
          <li>
            <Link href={`/${locale}`}>{t("home")}</Link>
          </li>
          <li>
            <Link href={`/${locale}/blog`}>{t("blog")}</Link>
          </li>
          <li>
            <Link href={`/${locale}/login`}>{t("login")}</Link>
          </li>
          <li>
            <Link href={`/${locale}/register`}>{t("register")}</Link>
          </li>
        </ul>
        <ChangeLang />
      </nav>
    </header>
  );
}
