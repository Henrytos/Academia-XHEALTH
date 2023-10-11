import { Col, Container, Row, TabContainer } from "react-bootstrap";
import locais from "../../locais.json"
import style from "./styles.module.css";
import CardLocal from "../components/CardLocal";
import { useState } from "react";

export default function ListLocal() {
    const [input, setInput] = useState("")
    const listLocais = [...locais]
    return <main className={style.professores} style={{
        padding: "0 10%",
        height: "auto",
        minHeight:"70vh"
    }}>

        <span className={style.title} style={
            {width: "100%"}
        }>LOCAIS</span>


        
        <span className={style.input}>
        <label htmlFor="senha" className={style.labels}>E aí, onde você quer treinar?:</label>
        <input value={input} type="text" name="senha" id="senha" className={style.inputs} placeholder="Tucuruvi" onChange={ev => setInput(ev.target.value)
            }/>
        </span>
        <h2 style={{
            color:"#d5a353",
            marginBottom:"2rem"
        }}>{input.length ?input.toUpperCase() : ".... ? "}</h2>


            <section style={{
                width:"100%",
                display:"flex",
                flexWrap:"wrap",
                gap:"2rem"
            }}>
            {input.length === 0 ? listLocais.map((local, i) => <Col>
                    <CardLocal local={local}/>
                </Col>
            ) : listLocais.map((local, i) => {
                if (local.name.toLowerCase().includes(input.toLowerCase()))
                    return (<Col>
                        <CardLocal local={local}  />
                    </Col>)
            }
            )

            }
            </section>
       

    </main>

}