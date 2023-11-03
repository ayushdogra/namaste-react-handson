# Config driven UI
Read the code. It is self explanatory

Just remember, whenever you create a component, make sure it has a key always present.

# Why use keys?
Imagine you have a list of items like the restaurant list in current example, and you want to display them in a web app. React uses keys to keep track of these items.

Keys are like name tags for each item. They help React remember which item is which. When you change the list (add, remove, or reorder items), React uses these name tags to figure out what's new and what's different.

Without name tags (keys), React might get confused, and you could see strange things happening in your app. 

Without keys react will re-render all the components instead of the one updated component. This will greatly affect the speed and performance of the app.

So, keys are essential for React to keep your list organized and working correctly.

# What if there are no keys in the list?
If there are no keys in the json object you can set key as:-
key={index}

But this is also not a preferred method according to official react documentation. 


Read this for better understanding

Setting up unique key from id in object (Best) >> Using index as key (Works but not good) >> Not using key at all (Worst practice, code will run but warning will be there)