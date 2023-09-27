import style from "../index.module.css";
export default function CardProfessor({
  src,
  durationAos,
  typeTreino,
  text,
  name,
}) {
  const spliteText = (text) => text.slice(0, 300) + "....";

  return (
    <>
      <span className={style.personal}>
        <span className={style.personalTitle}>
          {typeTreino}: <span>{name}</span>
        </span>
        <div>
          <img src={src} />
          <span className={style.personalText}>{spliteText(text)}</span>
        </div>
      </span>
    </>
  );
}
