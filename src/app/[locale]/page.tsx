"use client";

import { useTranslations } from "next-intl";
import styles from "./page.module.css";
import { useDispatch, useSelector } from "react-redux";
import { increment, decrement } from "@/lib/features/counter/counterSlice";
export default function HomePage() {
  const t = useTranslations("HomePage");
  const dispatch = useDispatch();
  const counter = useSelector((state: any) => state.counter.value);

  return (
    <main>
      <h1>{t("title")}</h1>
      <p>{t("description")}</p>
      <p>Counter: {counter}</p>
      <button onClick={() => dispatch(increment())}>Increment</button>
      <button onClick={() => dispatch(decrement())}>Decrement</button>
    </main>
  );
}
