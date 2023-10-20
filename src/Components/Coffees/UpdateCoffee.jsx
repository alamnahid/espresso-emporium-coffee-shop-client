import { FaLongArrowAltLeft } from "react-icons/fa";
import { useLoaderData, useNavigate } from "react-router-dom";
import Swal from "sweetalert2";


const UpdateCoffee = () => {
    const loadedcoffee = useLoaderData()
    const navigate = useNavigate();

    const handlebackhome = ()=>{
        navigate(-1)
    }

    const handleUpdateCoffee = (e)=>{
        e.preventDefault();
        const form = e.target;
        const name = e.target.name.value;
        const chef = e.target.chef.value;
        const supplier = e.target.supplier.value;
        const taste = e.target.taste.value;
        const price = e.target.price.value;
        const details = e.target.details.value;
        const photo = e.target.photo.value;

        const updatedcoffeeInfo = {name, chef, supplier, taste, price, details, photo}
        console.log(updatedcoffeeInfo)

        fetch(`https://espresso-emporium-coffee-shop-server-crt5lkotn.vercel.app/coffees/${loadedcoffee._id}`, {
            method: 'PUT',
            headers: {
                'content-type' : 'application/json'
            },
            body: JSON.stringify(updatedcoffeeInfo)
        })
        .then(res=>res.json())
        .then(data=>{
            console.log(data)
            if(data.modifiedCount>0){
                Swal.fire(
                    'Good job!',
                    'Coffee data updated successfully!',
                    'success'
                  )
            }
        })
    }

    return (
        <div>
            <div style={{
            background: "url('https://i.ibb.co/fkLTRPG/11.png'), lightgray 50% / cover no-repeat",
            backgroundSize: "cover",
            backgroundPosition: "center"
        }} className="lg:px-[12.5%] py-12 ">
            <h1 onClick={handlebackhome} className="text-[#374151] rancho text-[1.87rem] cursor-pointer drop-shadow-lg flex items-center gap-3"> <FaLongArrowAltLeft/> Back to home</h1>
            
            <div className="lg:h-[54rem] bg-[#F4F3F0] rounded-md mt-12">

            <h1 className="text-[#374151] rancho text-[2.87rem] drop-shadow-lg text-center font-bold pt-16">Update Existing Coffee Details</h1>
            <p style={{color: "rgba(27, 26, 26, 0.70)"}} className="mt-8 lg:w-[58rem] mx-auto text-lg railway text-center">It is a long established fact that a reader will be distraceted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using Content here.</p>

            <form onSubmit={handleUpdateCoffee} className="px-[10%] mt-8">
               <div className="flex flex-col lg:flex-row  justify-between gap-8">

               <div className="flex-1">
                <h1 style={{color: "rgba(27, 26, 26, 0.80)"}} className="railway text-xl font-semibold">Name</h1>
                <input placeholder="Enter coffee name" className="h-[3rem] placeholder:text-[#37415178] placeholder:railway pl-3 w-full mt-4 rounded-md bg-white border-none outline-[#D2B48C]" type="text" defaultValue={loadedcoffee?.name} name="name" id="" />
                </div>

                <div className="flex-1">
                <h1 style={{color: "rgba(27, 26, 26, 0.80)"}} className="railway text-xl font-semibold">Chef</h1>
                <input defaultValue={loadedcoffee?.chef} placeholder="Enter coffee chef" className="h-[3rem] placeholder:text-[#37415178] placeholder:railway pl-3 w-full mt-4 rounded-md bg-white border-none outline-[#D2B48C]" type="text" name="chef" id="" />
                </div>


               </div>

               <div className="flex flex-col lg:flex-row justify-between gap-8 mt-6">

               <div className="flex-1">
                <h1 style={{color: "rgba(27, 26, 26, 0.80)"}} className="railway text-xl font-semibold">Supplier</h1>
                <input defaultValue={loadedcoffee?.supplier} placeholder="Enter coffee supplier" className="h-[3rem] placeholder:text-[#37415178] placeholder:railway pl-3 w-full mt-4 rounded-md bg-white border-none outline-[#D2B48C]" type="text" name="supplier" id="" />
                </div>

                <div className="flex-1">
                <h1 style={{color: "rgba(27, 26, 26, 0.80)"}} className="railway text-xl font-semibold">Taste</h1>
                <input defaultValue={loadedcoffee?.taste} placeholder="Enter coffee taste" className="h-[3rem] placeholder:text-[#37415178] placeholder:railway pl-3 w-full mt-4 rounded-md bg-white border-none outline-[#D2B48C]" type="text" name="taste" id="" />
                </div>


               </div>

               <div className="flex flex-col lg:flex-row  justify-between gap-8 mt-6">

               <div className="flex-1">
                <h1 style={{color: "rgba(27, 26, 26, 0.80)"}} className="railway text-xl font-semibold">Price</h1>
                <input defaultValue={loadedcoffee?.price} placeholder="Enter coffee price" className="h-[3rem] placeholder:text-[#37415178] placeholder:railway pl-3 w-full mt-4 rounded-md bg-white border-none outline-[#D2B48C]" type="text" name="price" id="" />
                </div>

                <div className="flex-1">
                <h1 style={{color: "rgba(27, 26, 26, 0.80)"}} className="railway text-xl font-semibold">Details</h1>
                <input defaultValue={loadedcoffee?.details} placeholder="Enter coffee details" className="h-[3rem] placeholder:text-[#37415178] placeholder:railway pl-3 w-full mt-4 rounded-md bg-white border-none outline-[#D2B48C]" type="text" name="details" id="" />
                </div>


               </div>

               <div className=" mt-6">

               <div className="w-full">
                <h1 style={{color: "rgba(27, 26, 26, 0.80)"}} className="railway text-xl font-semibold">Photo</h1>
                <input defaultValue={loadedcoffee?.photo} placeholder="Enter coffee photo URL" className="h-[3rem] placeholder:text-[#37415178] placeholder:railway pl-3 w-full mt-4 rounded-md bg-white border-none outline-[#D2B48C]" type="text" name="photo" id="" />
                </div>

            
               </div>

               <input className="mt-6 btn w-full h-14 text-[#331A15] rancho text-2xl rounded-md border-2 border-[#331A15] capitalize bg-[#D2B48C] " type="submit" value="Update Coffee Details" />

               
            </form>

            </div>
        </div>
            
        </div>
    );
};

export default UpdateCoffee;