import { useLoaderData } from "react-router-dom";
import CoffeeProducts from "./Coffees/CoffeeProducts";
import Cover from "./Cover";
import Service from "./Service";
import Instagram from "./Instagram";
// import { useState } from "react";


const Home = () => {
    const loadedCoffees = useLoaderData();
    // const [coffees, setCoffees] = useState(loadedCoffees);
    return (
        <div>
            <Cover></Cover>
            <Service></Service>
            <CoffeeProducts loadedCoffees={loadedCoffees}></CoffeeProducts>
            <Instagram></Instagram>
            
        </div>
    );
};

export default Home;