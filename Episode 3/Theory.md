-First of all we will see how can we run any project in react, whether it is a new project of a company that you are employed too. 

-Moreover, we will see how you can give custom commands to run the project in your local machine.

-Go to package.json and find and object named "scripts"

-Something like "test" must have already been written there. Now add another line beside test there

                "start" : "parcel index.html"
                "build" : "parxel build index.html"

-What it does is that it replaces parcel index.html with start keyword. So you don'nt have to write npx parcel index.html now. You just need to write npm run start. Same is with npm run build

-So if you have downloaded a project and don't know how to run it, just go to package.json and find the scripts and workaround accordingly

-Now we are going to work on with jsx to create an element

-Many people will tell you that jsx is html inside javascript, but in reality, jsx is html like structured javascript. Kind of a mixture of both languages

-JSX is different from JS and JS engines and Javascript engines cannot process JS

-Actually, JSX is transpiled(converted) into the react code and that react code which is further converted into HTML, CSS and JS. 

            JSC ==>(Transpiled by Babel) ==> converted into react code (React.createElement etc)==>Converted to production code==> (Code that browser understands)

-It is done by Babel which is a part of parcel dependency. Babel is kind of a tool that is used by parcel to convert JSX into something that browser understands

-Parcel is like a manager of Babel

# Now Let's start with building components

-There are two ways to create a compoment:-
    -Class Based Component   (OLD)
    -Function Based Component (NEW)

# What is a functional component?
-Functional Component is just a JS function that returns JSX

-Component syntax:-

                const HeadingComponent = () => {
                return (
                    <div>
                    <h1>Made using React component</h1>;
                    </div>
                );
                };

# Make sure the first letter of the name of component is capital

# Rendering a component

                root.render(<HeadingComponent />);

# What is component composition?
-Nesting a component inside another component is component composition. You may have created multiple components and you may use one created component inside a new component. This is what component composition is.

Example:- 

                const HeadingComponent = () => {
                return (
                    <div>
                        <Heading/>   //This is another component being nested here
                    <h1>Made using React component</h1>;
                    </div>
                );
                };

# Superpowers of JSX
-You can also run Vanilla JS inside JSX by using these brackets { } inside JSX. This makes the possibilities of what you can do with JSX unlimited.

-You can do things like :-

         const HeadingComponent = () => {
                return (
                    <div>
                    {console.log("HELLO")}
                    {1111+225}
                    {heading} //This is an element being executed in jsx

                        <Heading/>   //This is another component being nested here
                    <h1>Made using React component</h1>;
                    </div>
                );
                };

-Moreover you can also call a component as a function, as all the components are just functions which return jsx. Assuming Title is a component here:-

                 const HeadingComponent = () => {
                return (
                    <div>
                    {Title()}
                        <Heading/>   //This is another component being nested here
                    <h1>Made using React component</h1>;
                    </div>
                );
                };

# JSX also prevents cross site scripting. It basically sanitizes your code if you call and API with it. It makes sure no malicious attacks are being run by browser.