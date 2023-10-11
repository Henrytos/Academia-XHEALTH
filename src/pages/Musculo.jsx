import { parsePath, useLocation } from "react-router-dom"
import styles from "./styles.module.css";
import CardLeft from "../components/CardLeft";
import CardRigth from "../components/CardRigth";
import treinos from "../js/treinos";

export default function Musculo() {
  const { pathname } = useLocation()
  const number = pathname[pathname.length - 1] - 1
 
  const card = treinos[number]
  return <main className={styles.mainModalidades}>
    <span className={styles.title}> {card[0].typeTreino}</span>
    <CardLeft card={card[0]} />
    <CardRigth card={card[0]} />
    <CardLeft card={card[0]} />

  </main>
}