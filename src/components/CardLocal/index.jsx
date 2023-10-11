import style from "../index.module.css"

export default function CardLocal({ local }) {
    return <div key={local.id} className={style.cardLocal} style={{
        margin:"auto"
    }}
    data-aos="fade-up"
    data-aos-duration="1000"
    >
        <img src={local.imageUrl} alt={local.name} />
        <section>
        <span className={style.titleCard}>{local.name} <span>- SP</span></span>
        <span className={style.address}>{local.address}</span>
        <span className={style.promotion}>1° Mês 9,90 no plano Black</span>
        <div>
            <div>
                <span>SMART</span>
                <span>R${local.planBasic}</span>
            </div>
            <div>
                <span>BLACK</span>
                <span className={style.planBlack}>R${local.planBlack}</span>
                <span>R$9,90*</span>
            </div>
            <div>
                <span>FIT</span>
                <span>R${local.plan}</span>
            </div>
        </div><a href="https://wa.me/5511967603378" target="_blank" style={{
        textDecoration:"none",
    }}
    className={style.btnView}
    >
        
            VEJA MAIS
      
       </a>
        </section>

    </div>
}

