import React,{useState} from 'react'


export default function TextForm(props) {
    const handleUpClick = () => {
        // console.log("Upercase was clicked" + text);
        let newText  = text.toUpperCase();
        setText(newText)
    }
    const handleLoClick = () => {
        // console.log("Upercase was clicked" + text);
        let newText  = text.toLowerCase();
        setText(newText)
    }
    const handleClearClick = () => {
        // console.log("Upercase was clicked" + text);
        let newText  = " ";
        setText(newText)
    }
    const handleCopyClick = () => {
        const text = document.getElementById('myBox')
        text.select()
    }
    const handleExtraSpaceClick = () => {
        let newText = text.split(/[ ]+/);
        setText(newText.join(" "))
    }
    const handleOnChange = (event) => {
        // console.log("On Chage");
        setText(event.target.value)
    }


    const [text, setText] = useState(" ");
   // text = "new text" Wrong way to change the state
   // setText("new state"); Correct way to change the state
  return (
    <>
        <div className='container'>
            <h1>{props.heading }</h1>
            <div className="mb-3 m-3">
                <textarea className="form-control" id="myBox" value={text} rows="8" onChange={handleOnChange}></textarea>
            </div>
            <button className="btn btn-primary ms-3  " onClick={handleUpClick}>Convert to Upper Case </button>
             <button className="btn btn-primary ms-1 " onClick={handleLoClick}>Convert to Lower Case </button>
             <button className="btn btn-primary ms-1 " onClick={handleClearClick}>Clear Text</button>
             <button className="btn btn-primary ms-1 " onClick={handleCopyClick}>Copy Text</button>
             <button className="btn btn-primary ms-1 " onClick={handleExtraSpaceClick}>Remove Extra Spacet</button>
        </ div>
        <div className="container mt-2">
            <h1>Your text summery </h1>
            <p> {text.split(" ").length} words and {text.length} character</p>
            <p>{0.008 * text.split(" ").length} Minutes read</p>
            <h2>Preview</h2>
            <p>{text}</p>
        </div>
    </>
  )
}
