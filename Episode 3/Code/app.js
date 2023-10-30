import React from "react";
import ReactDOM from "react-dom/client";

//React Element using jsx

const Heading = () => {
  <h1 className="heading">Hello using jsx</h1>;
};

//creating a react component


const HeadingComponent = () => {
  return (
    <div>
        <Heading/>
      <h1>Made using React component</h1>;
    </div>
  );
};

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<HeadingComponent />);
