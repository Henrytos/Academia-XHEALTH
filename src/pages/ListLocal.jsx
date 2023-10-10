import { Col, Container, Row } from "react-bootstrap";
import locais from "../../locais.json"
import style from "./styles.module.css";
import CardLocal from "../components/CardLocal";
import { useState } from "react";

export default function ListLocal (){
    const [input,setInput]=useState("")
    const listLocais= [...locais]
    return <main className={style.professores}>
    <span className={style.title}>LOCAIS</span>

   
        <h2>E aí, onde você quer treinar?{input}</h2>
        <label htmlFor="local">Nome:</label>
        <input id="local" name="local" type="text" value={input} 
        onChange={ev=>{
            setInput(ev.target.value)
            }}/>
        <Row>
            {input.length===0 ? listLocais.map((local, i)=>(
                     <Col>
                    <CardLocal local={local} key={i}/>
                    </Col>
                )
                ):listLocais.map((local, i)=>
               {    if(local.name.toLowerCase().includes(input.toLowerCase())) 
                   return( <Col>
                   <CardLocal local={local} key={i}/>
                   </Col>)
               }
               )
               
            }
        </Row>
    
    </main>
    
}