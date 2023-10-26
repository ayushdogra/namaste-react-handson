import React from 'react';
import ReactDOM from 'react-dom/client';

const heading = React.createElement(
  "h1",
  { id: "heading" },
  "Hello, this is printed using react"
);

const root = ReactDOM.createRoot(document.getElementById("root"));



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