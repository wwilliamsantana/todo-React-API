import "./styles.css"
import { Card } from "../../Components/Card"
import { useEffect, useState } from "react"

export function Home() {

  const [userName, setUseName] = useState("")
  const [userList, setUserList] = useState([])
  const [user, setUser] = useState({name: "", avatar: ""})

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
  }

  useEffect(()=> {
    fetch("https://api.github.com/users/wwilliamsantana")
    .then(res => res.json())
    .then(data => setUser({name: data.name, avatar: data.avatar_url}))
  }, [])
 

  return (
    <div className="container">

      <header>
        <h1>Lista de presença</h1>

        <div>
          <strong>{user.name}</strong>
          <img src={user.avatar} alt="" />
        </div>


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


