import { parsePath, useLocation } from "react-router-dom"
import styles from "./styles.module.css";
import CardLeft from "../components/CardLeft";
import CardRigth from "../components/CardRigth";

export default function Musculo (){
  const {pathname} = useLocation()
  const number =  pathname[pathname.length-1]-1
  const treinos=[
    {
      typeTreino:"PEITO",
      title: "TREINO FUNCIONAL",
      src:"https://blog.gsuplementos.com.br/wp-content/uploads/2021/04/iStock-1246046696.jpg",
      subTitle: "O QUE É TREINO FUNCIONAL",
      text: "Esse tipo de treinamento pode ser definido como um grupo de exercícios mais dinâmicos que trabalham diferentes músculos ao mesmo tempo, sem a necessidade de aparelhos de musculação ou atividades de alto impacto, como as do crossfit.    Esse modelo de treino usa o peso do próprio corpo para a realização dos exercícios e, além do corpo físico, os exercícios funcionais também trabalham a mente e a concentração.",
  }
  ]
    const card =treinos[number]
    return<main className={styles.mainModalidades}>
    <span className={styles.title}> {card.typeTreino}</span>  
     <CardLeft card={card}/>
     <CardRigth card={card}/>
     <CardLeft card={card}/>
   
    </main>
}