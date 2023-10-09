import style from "./styles.module.css";
import personals from "../js/ProfessorText";

export default function Professores() {
  return (
    <>
      <main className={style.professores}>
        <span className={style.title}>PROFESSORES</span>
        <div className={style.personals}>
          {personals.map((personal, i) => (
            <div key={i} style={{
              width:"100%",
              maxWidth:"20rem",
            }}
            data-aos="fade-up"
            data-aos-duration={`${1000 + (i*200)}`}
            >
              <p className={style.titlePersonal}>
              <span style={{
                color:"#d5a353"
              }}>{personal.typeTreino}</span>:
              <span>{personal.name}</span>
              </p>
              <div style={{
                display:"flex",
                flexDirection:"column",
                gap:"1rem"
              }}>
                <img src={personal.src} alt={personal.name} style={{width:"100%"}} />
                <p className={style.textPersonal}>
                  {personal.text.slice(0,150)}......
                </p>
              </div>
            </div>
          )
          )}
        </div>
      </main>
    </>
  );
}
