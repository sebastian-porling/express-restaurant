# express restaurant

This solution is made by Sebastian Porling.

## Compile and execute

You can compile this by using `npm i`. By using `npm run build` you will make executable binaries for all operating systems. But the Windows version seems to be buggy, it runs but the resources like fonts doesn't load so it looks different.

And execute by using `npm start` or running any of the binaries which can be found in the **/build** directory. If using linux to run you simply do the following from the root folder: `./build/express-restaurant-linux`. But if you for some reason want to use only node to run the application you can do `node bin.js`. You can't run the [**index.js**](./index.js) because it doesn't have anything that executes the main function. This was done just to follow the how they do it in the [**pkg**](https://www.npmjs.com/package/pkg) package. They do this just to seperate all the compile and deploy logic away from the main files.

Here is a sample execution generated with [terminalizer](https://terminalizer.com/):

<!--![Sample execution](./sample_execution.gif)-->

## Motivation

### backend

The backend utilizes [**express**](https://www.npmjs.com/package/express) for the web server. It registers the static files for the frontend in the public folder. So when requesting **/** you will recieve the [**index.html](./public/index.html), the same thing goes for [**restaurant.html**](./public/restaurant.html), css files and the javascript files for the frontend. I also register the images for the restaurants at **/restaurant/image** so when requesting **/restaurant/image/cay-tre.png** they will recieve the file. Then the server registers **/data** for returning the data found in [**restaurants.json**](./data/restaurants.js). I also use the [**express-error-handler**](https://www.npmjs.com/package/express-error-handler) for registering 404 to a static page. The server also uses [**morgan**](https://www.npmjs.com/package/morgan) for logging the requests in the console. You can see the implementation in [**server.js**](./modules/server.js).

In [**logger.js**](./modules/logger.js), I format what will be shown and add colors to the text using [**chalk**](https://www.npmjs.com/package/chalk). I also added some emojis based on the status code :smile:.

The [**index.js**](./index.js) has the main function. Which displays a welcome message using the [**welcomeMessage.js**](./modules/welcomeMessage.js) which uses [**figlet**](https://www.npmjs.com/package/figlet) to generate a ASCII text/art.

### frontend

I use [**Material Design Bootstrap**](https://fezvrasta.github.io/bootstrap-material-design/) for the styling, I do some minor adjustments with the css files found in the directory **public/style**.
The [**index.html**](./public/index.html) just displays a welcome message and has a button which redirects to the [**restaurant.html**](./public/restaurant.html). The fetching is done in [**fetch.js**](./public/js/fetch.js) which utilizes the Fetch API. In [**render.js**](./public/js/render.js) I use javascript literals to generage the restaurant HTML components. In [**main.js**](./public/js/main.js) we firstly fetch and then generate the restaurant view.
