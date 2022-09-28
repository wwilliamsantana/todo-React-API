import "./styles.css"
import { Card } from "../../Components/Card"

export function Home() {
  
  return (
    <div className="container">

      <header>
        <h1>Lista de presença</h1>
      </header>

      <input type="text" placeholder="Digite seu nome..."/>

      <button
        type="button"
      >
        Adicionar
      </button>

        <Card/>
        <Card/>
        <Card/>
        <Card/>

    </div>
  )
}


