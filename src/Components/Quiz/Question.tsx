import "./Choices.css"

interface Props {
  count: number
  country: string
}

function Question({count, country}: Props) {
  return (
    <>
        <h3 style={{marginLeft: "20px"}}>Question {`${count}`}</h3>
        <div className="Question" style={{fontWeight:"bold"}}>What is the name of the {country}'s cake shown in the picture?</div>
    </>
  )
}

export default Question