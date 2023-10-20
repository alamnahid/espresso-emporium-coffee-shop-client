import { FaLongArrowAltLeft } from "react-icons/fa";
import { useLoaderData, useNavigate } from "react-router-dom";


const CoffeeDetails = () => {
    const navigate = useNavigate();
    const coffee = useLoaderData();

    const handlebackhome = ()=>{
        navigate(-1)
    }
    return (
        <div>
             <div style={{
            background: "url('https://i.ibb.co/fkLTRPG/11.png'), lightgray 50% / cover no-repeat",
            backgroundSize: "cover",
            backgroundPosition: "center"
        }} className="lg:px-[12.5%] py-12 ">
            <h1 onClick={handlebackhome} className="text-[#374151] cursor-pointer rancho text-[1.87rem] drop-shadow-lg flex items-center gap-3"> <FaLongArrowAltLeft/> Back to home</h1>
            
            <div className="lg:h-[37rem] bg-[#F4F3F0] rounded-md mt-12 flex flex-col lg:flex-row justify-center items-center gap-[7.25rem]">

                <img className="h-[30.5rem] w-[22rem] " src={coffee.photo} alt="" />

            <div>
            <h1 className="text-[#331A15] rancho text-[2.29rem] drop-shadow-lg font-bold">{coffee.name}</h1>

            <div className="space-y-3 mt-8 mr-10">
                    <h1 className="railway text-xl text-[#5C5B5B]"> <span className="text-[#1B1A1A] font-semibold">Name: </span> {coffee.name}</h1>
                    <h1 className="railway text-xl text-[#5C5B5B]"> <span className="text-[#1B1A1A] font-semibold">Chef: </span>{coffee.chef}</h1>
                    <h1 className="railway text-xl text-[#5C5B5B]"> <span className="text-[#1B1A1A] font-semibold">Supplier: </span>{coffee.supplier}</h1>
                    <h1 className="railway text-xl text-[#5C5B5B]"> <span className="text-[#1B1A1A] font-semibold">Taste: </span>{coffee.taste}</h1>
                    <h1 className="railway text-xl text-[#5C5B5B]"> <span className="text-[#1B1A1A] font-semibold">Details: </span>{coffee.details}</h1>
                    
                    <h1 className="railway text-xl text-[#5C5B5B]"> <span className="text-[#1B1A1A] font-semibold">Price:</span> {coffee.price} TK</h1>

                </div>

            </div>
            

            

            </div>
        </div>
        </div>
    );
};

export default CoffeeDetails;