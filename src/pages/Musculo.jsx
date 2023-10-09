import { useLocation } from "react-router-dom"
import style from "../components/index.module.css";
import styles from "./styles.module.css";

export default function Musculo (){
    const card ={
        title: "TREINO FUNCIONAL",
        src:"https://blog.gsuplementos.com.br/wp-content/uploads/2021/04/iStock-1246046696.jpg",
        subTitle: "O QUE É TREINO FUNCIONAL",
        text: "Esse tipo de treinamento pode ser definido como um grupo de exercícios mais dinâmicos que trabalham diferentes músculos ao mesmo tempo, sem a necessidade de aparelhos de musculação ou atividades de alto impacto, como as do crossfit.    Esse modelo de treino usa o peso do próprio corpo para a realização dos exercícios e, além do corpo físico, os exercícios funcionais também trabalham a mente e a concentração.",
    }
    return<main className={styles.mainModalidades}>
    <span className={styles.title}> MODALIDADES</span>  
     <main className={style.container}>
        <div className={style.card}>
          <img
            alt={card.title}
            data-aos="fade-right"
            data-aos-duration="1000"
            src={card.src}
          />
          <span
            className={style.content}
            data-aos="fade-left"
            data-aos-duration="1000"
          >
            <span className={style.CardTitle}>{card.title}</span>
            <span className={style.CardSubtitle}>{card.subTitle}</span>
            <span className={style.CardText}>{card.text}</span>
            <span className={style.CardSubtitle}>BENIFICIOS:</span>
           
          </span>
        </div>
    </main>
    <main className={style.container}>
        <div className={style.card}>
         
          <span
            className={style.content}
            data-aos="fade-right"
            data-aos-duration="1000"
          >
            <span className={style.CardTitle}>{card.title}</span>
            <span className={style.CardSubtitle}>{card.subTitle}</span>
            <span className={style.CardText}>{card.text}</span>
            <span className={style.CardSubtitle}>BENIFICIOS:</span>
           
          </span>
          <img
            alt={card.title}
            data-aos="fade-left"
            data-aos-duration="1000"
            src={card.src}
          />
        </div>
    </main>
    <main className={style.container}>
        <div className={style.card}>
          <img
            alt={card.title}
            data-aos="fade-right"
            data-aos-duration="1000"
            src={card.src}
          />
          <span
            className={style.content}
            data-aos="fade-left"
            data-aos-duration="1000"
          >
            <span className={style.CardTitle}>{card.title}</span>
            <span className={style.CardSubtitle}>{card.subTitle}</span>
            <span className={style.CardText}>{card.text}</span>
            <span className={style.CardSubtitle}>BENIFICIOS:</span>
           
          </span>
        </div>
    </main>
    </main>
}