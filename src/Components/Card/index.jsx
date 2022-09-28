import "./styles.css"

export function Card(props){

  return (
      <div className="card">
        <strong>{props.name}</strong>
        <span>{props.time}</span>
      </div>
  )


}