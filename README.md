# React + Redux Toolkit + Apache Echarts

Proyecto realizado en react utilizando apache echarts para graficar.

## Registrar API

En caso de querer logear con otro usuario se deben registrar para ellos utilizar cualquier rest client.

**Note: Configuracion rest client**

url : https://ec2-18-225-33-135.us-east-2.compute.amazonaws.com:51000/api/usuario/registro
Content-Type: application/json
type : POST
data : {
    "nombre":"",    // Requerido
    "password":"",  // Requerido
    "email":"",     // Requerido
    "apellidoPaterno":"",
    "apellidoMaterno":""
}

Datos de usuarios ya creados:

user: user3
password: 12345678

user: user4
password: 12345678

**Note: Para ver mas rutas o utilizar la api revisar siguiente link: https://github.com/Fernando196/blog-api**

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

The page will reload when you make changes.\
You may also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can't go back!**

If you aren't satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you're on your own.

You don't have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn't feel obligated to use this feature. However we understand that this tool wouldn't be useful if you couldn't customize it when you are ready for it.