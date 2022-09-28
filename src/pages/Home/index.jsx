import "./styles.css"
import { Card } from "../../Components/Card"
import { useState } from "react"

export function Home() {

  const [userName, setUseName] = useState("")
  const [userList, setUserList] = useState([])

  function handleAddUser(){
    const newUser = {
      name: userName,
      time: new Date().toLocaleTimeString("pt-br", {
        hour: "2-digit",
        minute: "2-digit",
        second: "2-digit"
      })
    }

    setUserList(prevState => [...prevState, newUser])
    console.log(userList)

  }

 

  return (
    <div className="container">

      <header>
        <h1>Lista de presença</h1>
      </header>

      <input 
      onChange={e => setUseName(e.target.value)}
      type="text" 
      placeholder="Digite seu nome..."
      />

      <button
        type="button"
        onClick={handleAddUser}
      >
        Adicionar
      </button>

      {
        userList.map(student => (
          <Card key={student.time} name={student.name} time={student.time}/>
        ))
      }
       
        
        

    </div>
  )
}


