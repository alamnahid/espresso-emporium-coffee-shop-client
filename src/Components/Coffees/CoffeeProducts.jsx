/* eslint-disable react/prop-types */
import { useState } from "react";
import { Link } from "react-router-dom";
import CoffeeCard from "./CoffeeCard";


const CoffeeProducts = ({loadedCoffees}) => {
    
    
    const [coffees, setCoffees] = useState(loadedCoffees);

    // useEffect(()=>{
    //     fetch('https://espresso-emporium-coffee-shop-server-3qoyuzduk.vercel.app/coffees')
    //     .then(res=>res.json())
    //     .then(data=>setCoffees(data))

    // }, [])
    return (
        <div className="pt-[7.5rem]" style={{
            background: "url('https://i.ibb.co/fYV4vsB/1.png'), no-repeat",
            backgroundSize: "cover",
            backgroundPosition: "center"
        }}>
            <p className="text-[#1B1A1A] railway text-xl  text-center">--- Sip & Savor ---</p>
            <h1 className="mt-2  text-[#331A15] rancho text-[3.4rem] font-bold text-center shadow-amber-950">Our Popular Products</h1>

            <Link to='/addcoffee'>
            <div className="relative w-[9.4rem] h-12 mx-auto hover:text-white">
                <button className="mt-4 pr-4  bg-[#E3B577] border-2 border-[#331A15] rounded-md w-[9.4rem] text-white h-12 drop-shadow-md capitalize  rancho text-2xl  hover:text-white hover:bg-black hover:border-2 hover:border-white">Add Coffee</button>

                <div className="absolute top-[2.1rem] right-3">
                    <svg xmlns="http://www.w3.org/2000/svg" width="21" height="16" viewBox="0 0 21 16" fill="none">
                        <path d="M13.7143 11.4286V2.28571H2.28571V11.4286C2.28571 12.0348 2.52653 12.6162 2.95518 13.0448C3.38384 13.4735 3.96522 13.7143 4.57143 13.7143H11.4286C12.0348 13.7143 12.6162 13.4735 13.0448 13.0448C13.4735 12.6162 13.7143 12.0348 13.7143 11.4286ZM1.14286 0H18.2857C18.8919 0 19.4733 0.240816 19.902 0.66947C20.3306 1.09812 20.5714 1.67951 20.5714 2.28571V5.71429C20.5714 6.3205 20.3306 6.90188 19.902 7.33053C19.4733 7.75918 18.8919 8 18.2857 8H16V11.4286C16 12.641 15.5184 13.8038 14.6611 14.6611C13.8037 15.5184 12.641 16 11.4286 16H4.57143C3.35901 16 2.19625 15.5184 1.33894 14.6611C0.481631 13.8038 0 12.641 0 11.4286V1.14286C0 0.839753 0.120408 0.549062 0.334735 0.334735C0.549063 0.120408 0.839752 0 1.14286 0ZM16 2.28571V5.71429H18.2857V2.28571H16Z" fill="#331A15" />
                    </svg>
                </div>
            </div>
            </Link>

            <div className="lg:px-[10%] mt-12 grid grid-cols-1 lg:grid-cols-2 items-center gap-6">
                {
                     // eslint-disable-next-line react/prop-types
                     coffees.map(coffee => <CoffeeCard
                        key={coffee._id}
                        coffee={coffee}
                        coffees={coffees}
                        setCoffees={setCoffees}
                      ></CoffeeCard>)
                }
            </div>

        </div>
    );
};

export default CoffeeProducts;