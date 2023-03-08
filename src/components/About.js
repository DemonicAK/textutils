import React from "react";

export default function About(props) {
  let Light = {
    color: "black",
    backgroundColor: "white",
  };
  let Dark = {
    color: "white",
    backgroundColor: "blue",
  };
  let accordian_Dark = {
    color: "white",
    backgroundColor: "red",
  };

  // const [styler, setstyler] = useState(Light);
  // const [text, settext] = useState('dark')
  // const toggler = () => {
  //   if (styler.color === "black") {
  //     setstyler(Dark);
  //     settext("light")
  //   }
  //   else {
  //     setstyler(Light);
  //     settext("dark")
  //   }
  //   // console.log("fffh");
  // };

  return (
    <div className="container my-2" style={props.mode === 'light' ? Light : Dark}>
      <h1> About us </h1>
      <div className="accordion" id="accordionExample">
        <div className="accordion-item">
          <h2 className="accordion-header" id="headingOne">
            <button
              className="accordion-button"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#collapseOne"
              aria-expanded="true"
              aria-controls="collapseOne"
              style={props.mode === 'light' ? Light : accordian_Dark}
            >
              <strong>Accordion Item #1</strong>
              
            </button>
          </h2>
          <div
            id="collapseOne"
            className="accordion-collapse collapse show"
            aria-labelledby="headingOne"
            data-bs-parent="#accordionExample"
            style={props.mode === 'light' ? Light : accordian_Dark}
          >
            <div className="accordion-body">
      Lorem ipsum dolor sit, amet consectetur adipisicing elit. Nihil deserunt ea nemo vero eveniet nam aut ipsa quibusdam!
            </div>
          </div>
        </div>
        <div className="accordion-item">
          <h2 className="accordion-header" id="headingTwo">
            <button
              className="accordion-button collapsed"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#collapseTwo"
              aria-expanded="false"
              aria-controls="collapseTwo"
              style={props.mode === 'light' ? Light : accordian_Dark}
            >
              
              <strong>Accordion Item #2</strong>
            </button>
          </h2>
          <div
            id="collapseTwo"
            className="accordion-collapse collapse"
            aria-labelledby="headingTwo"
            data-bs-parent="#accordionExample"
            style={props.mode === 'light' ? Light : accordian_Dark}
          >
            <div className="accordion-body">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Neque voluptatibus at accusamus aut facere ipsum.
            </div>
          </div>
        </div>
        <div className="accordion-item">
          <h2 className="accordion-header" id="headingThree">
            <button
              className="accordion-button collapsed"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#collapseThree"
              aria-expanded="false"
              aria-controls="collapseThree"
              style={props.mode === 'light' ? Light : accordian_Dark}
            >
                   <strong> Accordion Item #3</strong>
            </button>
          </h2>
          <div
            id="collapseThree"
            className="accordion-collapse collapse"
            aria-labelledby="headingThree"
            data-bs-parent="#accordionExample"
            style={props.mode === 'light' ? Light : accordian_Dark}
          >
            <div className="accordion-body">
             Lorem, ipsum dolor sit amet consectetur adipisicing elit. Voluptatum iste quidem qui inventore.
            </div>
          </div>
        </div>
      </div>
      {/* <button className="btn btn-primary my-3" onClick={toggler}>
        enable {text} mode
      </button> */}
    </div>
  );
}
