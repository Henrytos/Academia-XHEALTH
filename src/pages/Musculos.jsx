import style from "./styles.module.css";


export default function Musculos() {
  return (

    <main className={style.professores}>
      <span className={style.title}>MÚSCULOS</span>
      <section className={style.imgBody}>
        <span>
          <img src="public/body/front.jpg" useMap="#bodyFront" alt="corpo humano de frente" />
          <map name="bodyFront">
            {/* peito */}
            {/* ombro */}
            {/* braço */}
            {/* antebraço */}
            {/* abdomen */}
            {/* coxa */}
            {/* panturrilha */}
          </map>

        </span>
        <span>
          <img src="public/body/back.jpg" alt="corpo humano de costa" />
        </span>
      </section>
    </main>

  );
}
