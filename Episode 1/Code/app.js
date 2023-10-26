//Below code creates a heading variable. It uses React.create to create an object with the props which are passed as parameters
// This takes three argument, first one, what tag is to be created, second one is used to give attribute to the tag
//and third one, what should be inside the tag
//This react object converts into HTML when it is rendered
const heading = React.createElement(
  "h1",
  { id: "heading" },
  "Hello, this is printed using react"
);

//The below code creates a root in react and stores it in the variable named root( you can name it something else too).
//We have used document.getElementbyId to find an element with id root and make it the root or entry point of react code
const root = ReactDOM.createRoot(document.getElementById("root"));

//Now we are just rendering our heading inside the root(which is the div with id root in the html code)

// Now we will try to create nested divs with the help of React JS

//This will get confusing and it is not how modern code base is written in react

const nestedElements = React.createElement("div", { id: "parent" }, [
    [
        React.createElement("div", { id: "child1" }, [
            React.createElement("h1", {}, "This is h1 tag of first div"),
            React.createElement("h2", {}, "This is h2 tag of first div"),
        ]),
    ],
    [
        React.createElement("div", { id: "child2" }, [
            React.createElement("h1", {}, "This is h1 tag of second div"),
            React.createElement("h2", {}, "This is h2 tag of second div"),
        ]),
    ],
]);

root.render(nestedElements);