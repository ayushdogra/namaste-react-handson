#Now we will se about npm and how to use it and why is it used

-First of all make sure you have Node js installed in the system. After that make sure that you have opened your project.

-Go to the terminal and type n

        npm init


-Now you have initialized the project with npm. You will see a package.json file now

-package.json keeps the track of all the versions and files in your project

-Now we will use a bundler. There are multiple bundlers like webpack, parcel etc. We will be using parcel in this project/series.

-To install parcel use the following command

        npm instal -D parcel

-The -D above signifies that we are using the Development version of the parcel here. There are two versions, normal and Development

-After doing this we can see multiple files installed in our local like package-lock.json, node modules etc

-Package-lock is similar to package.json. But it saves the exact version of every dependency in the project. 

-Package.json has versions of every dependency, whenever a new version of any dependency is created, it will be updated in package.json

-But package-lock.json will keep track of everything, no matter how many versions you have updated of dependencies, it will remember every version from when you started the project. So this will help you when things break in code. 

-package-lock.json also keeps SHA of every version so that whenever you deploy anything to the server, it makes sure every version in your local matches to the version in server

-you may also see ^ and ~ in the version of dependencies. 

^ means caret that it will automatically update to minor updates
    example
    2.8.3 ==> 2.8.4
    it will not do this
    2.8.3==> 3.0.1

~ means tilde it will only automatically update to major updates
    example
    2.8.4==> 3.0.0
    it will not do or skip these
    2.8.3==> 2.8.4

-It is prefered to use ^ because major updates often come with major changes which can break your code.

-Now we can see a lot of files in the node modules. We may wonder why they are there. They are actually the dependencies of parcel. Means parcel uses these dependencies in order to function. 

-This phenomena of one dependency dependent on another dependency is called transitive dependency

-If we have package.json and package-lock.json, we can regenerate all the modules again without any trouble. Thats why we do not upload node modules to github or to production. 
You can regenerate node modules by the following command

        npm install

-Now to run the project we need to use the following command

        npx parcel index.html

-Now if you want to make the production build, you need to make command like this

        npx parcel build index.html

-You may encouter an error because in package.json the main or entry point would be app.js and here you are defining it as index.html. You can remove app.js as entry point in package.json file

-difference in npm and npx is that npm is used to download packages and npx is used to execute or run the packages.

-npx parcel index.html means that we are launching our app with entry point into the app as index.html

-Now we will replace the cdn links that we had created by installing react in the node modules in our system. Because using cdn links for implementing react is not a preferred way, since we have to make a call for the links and react version upgrade would be a hassle as we have to update the cdn link everytime. Therefore we will install react in our project'

-We will have to install react and react-dom seperately. The commands are as follows

        npm install react
        npm install react-dom

-Note:- You can also use i instead of install, its one and the same thing. 

-Now you have removed the cdn links and now you need to import react into your app.js file . The commands are

        import React from 'react';
        import ReactDOM from 'react-dom';

-You will get an error naming browser cannot have import, because browser can only read vanilla js. So you have to put an attribute in script tag of the code where you link app.js file in html file

        <script type="module"src="/app.js">

-Features of parcel
        
        -HMR (Hot Module Replacement) - parcel keeps track of file changes via file watcher algorithm and -renders the changes in the files
        -File watcher algorithm - made with C++
        -Minification of images(compressing images)
        -Cleaning our code   (Tree Shaking) 
        -DEV and production Build
        -Super fast building algorithm
        -Image optimization
        -Caching while development
        -Compresses
        -Compatible with older version of browser(Differntial bundling)
        -HTTPS in dev
        -Port Number
        -Consistent hashing algorithm
        -Zero Configuration
        -Automatic code splitting

-What is .gitignore? What should we add and not add into it?
The .gitignore file is a text file that tells Git which files or folders to ignore in a project during commit to the repository. The types of files you should consider adding to a .gitignore file are any files that do not need to get committed. for example, For security, the security key files and API keys should get added to the gitignore. package-lock.json should not add into your .gitignore file.

-Whenever you build the project with production build, it will create a dist folder and production filesor production ready code will be created in dist folder

Q: What is browserslist?
A: Browserslist is a tool that allows specifying which browsers should be supported in your frontend app by specifying "queries" in a config file. It's used by frameworks/libraries such as React, Angular and Vue, but it's not limited to them.
You can modify the package.json file and add an array named browsers list in the package.json object

It makes sure that the versions you mentioned in the browsers list are supported no matter what. It will push code into the production build to make sure that your app works on the mentioned browsers.

                "browserslist":[
                        "last 2 versions"
                                ]       
You can write like "Last 2 chrome versions", "last three safari versions etc", "cover 99.5% in  uk"                       

To check the coverage of the browsers config you used across the internet,        you can go to browserslist.dev

