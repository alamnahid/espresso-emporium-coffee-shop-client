import { createBrowserRouter } from "react-router-dom";
import Root from "./Root";
import Home from "../Components/Home";
import AddCoffee from "../Components/Coffees/AddCoffee";
import UpdateCoffee from "../Components/Coffees/UpdateCoffee";
import CoffeeDetails from "../Components/Coffees/CoffeeDetails";
import ErrorElement from "../Components/ErrorElement";
import Register from "../Components/SignupSignin/Register";
import Login from "../Components/SignupSignin/Login";
import PrivateRoute from "./PrivateRoute";


const router = createBrowserRouter([
    {
      path: "/",
      element: <Root></Root>,
      errorElement: <ErrorElement></ErrorElement>,
      children: [
        {
            path: '/',
            element: <Home></Home>,
            loader: ()=>fetch('https://espresso-emporium-coffee-shop-server-crt5lkotn.vercel.app/coffees')
        },
        {
          path: '/addcoffee',
          element: <PrivateRoute><AddCoffee></AddCoffee></PrivateRoute>,
          loader: ()=>fetch('https://espresso-emporium-coffee-shop-server-crt5lkotn.vercel.app/coffees')
        },
        {
          path: '/update/:id',
          element: <PrivateRoute><UpdateCoffee></UpdateCoffee></PrivateRoute>,
          loader: ({params}) => fetch(`https://espresso-emporium-coffee-shop-server-crt5lkotn.vercel.app/coffees/${params.id}`)
        },
        {
          path: '/details/:id',
          element: <PrivateRoute><CoffeeDetails></CoffeeDetails></PrivateRoute>,
          loader: ({params}) => fetch(`https://espresso-emporium-coffee-shop-server-crt5lkotn.vercel.app/coffees/${params.id}`)
        },
        {
          path: '/register',
          element: <Register></Register>
        },
        {
          path: '/login',
          element: <Login></Login>
        }
      ]
    },
  ]);

  export default router;