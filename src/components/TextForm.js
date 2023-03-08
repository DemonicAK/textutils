import React, { useState } from "react";

export default function TextForm(props) {
  let Light = {
    color: "black",
    backgroundColor: "white",
  };
  let Dark = {
    color: "white",
    backgroundColor: "blue",
  };
  let textarea_dark = {
    color: "white",
    backgroundColor: "#ce8f9b",
  };

  const [text, settext] = useState(" ");
  const handleUpClick = () => {
    // console.log("uppercase was clicked" );
    // settext("value has changed you and this world");

    let result = text.toUpperCase();
    settext(result);
    props.alertmaker("uppercase done", 'success')
  };
  const handleloClick = () => {
    // console.log("uppercase was clicked" );
    // settext("value has changed you and this world");

    let result = text.toLowerCase();
    settext(result);
    props.alertmaker("lowercase done", 'success')
  };
  const handleonChange = (event) => {
    // console.log("it is changed" );
    settext(event.target.value);
    // console.log(text);

  };
  const handleclear = (event) => {
    // console.log("it is changed" );
    settext(" ");
    // console.log(text);
    props.alertmaker("clear", 'success')
  };

  let word =text.split(/\s+/).filter((element)=>{return element.length!==0}).length;

  return (
    <div style={props.mode === 'light' ? Light : Dark}>
      <h1 >{props.heading}</h1>
      <div className="mb-3">
        <textarea
          className="form-control"
          value={text}
          onChange={handleonChange}
          style={props.mode === 'light' ? Light : textarea_dark }
          id="textbox"
          rows="10"></textarea>
      </div>
      <button className="btn btn-primary mx-1 my-1" onClick={handleUpClick}>
        convert to uppercase
      </button>
      <button className="btn btn-primary mx-1 my-1" onClick={handleloClick}>
        convert to lowercase
      </button>
      <button className="btn btn-primary mx-1 my-1" onClick={handleclear}>
        clear text
      </button>

      <div className="container my-3">
        <h1>Your text summary</h1>
        <p>
          {" "}
          {word} word and {text.length} characters{" "}
        </p>
        <h2>Reading</h2>
        <h3>Read time</h3>
        <p> {word * 0.008} minutes </p>
        <h3>Preview</h3>
        <p>{text.length > 0 ? text : "Write in textbox above to get a Preview"}</p>

      </div>
    </div>
  );
}



