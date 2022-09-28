import "./styles.css"

export interface CardProps{
  name: string
  time: string
}


export function Card(props: CardProps){

  return (
      <div className="card">
        <strong>{props.name}</strong>
        <span>{props.time}</span>
      </div>
  )


}