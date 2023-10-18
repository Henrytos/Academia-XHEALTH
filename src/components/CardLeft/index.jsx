import style from "../index.module.css";

export default function CardLeft({ card }) {
  return (
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
        </span>
      </div>
    </main>
  );
}
