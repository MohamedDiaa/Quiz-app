import "./Choices.css"

interface Props {
  count: Number
}

function Question({count}: Props) {
  return (
    <>
        <h3 style={{marginLeft: "20px"}}>Question {`${count}`}</h3>
        <div className="Question" style={{fontWeight:"bold"}}>What is the name of the cake shown in the picture?</div>
    </>
  )
}

export default Question