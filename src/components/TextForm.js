import React,{useState} from "react";

export default function TextForm(props) {
    const [text,settext] =useState("your text here");
    const handleUpClick = () => {
        // console.log("uppercase was clicked" );
        // settext("value has changed you and this world");xx

        let result=text.toUpperCase();
        settext(result);
    }
    const handleonChange = (event) => {
        // console.log("it is changed" );
        settext(event.target.value);
        // console.log(text);
    }
  return (
    <div>
      <h1>{props.heading}</h1>
      <div className="mb-3">
        <textarea className="form-control" value={text}  onChange={handleonChange}    id="textbox" rows="8"></textarea>
      </div>
      <button className="btn btn-primary" onClick={handleUpClick}>convert to uppercase</button>
    </div>
  );
}
