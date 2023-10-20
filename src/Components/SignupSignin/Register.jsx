import { useContext } from "react";
import { FaLongArrowAltLeft } from "react-icons/fa";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { AuthContext } from "../Providers/AuthProviders";
import Swal from "sweetalert2";


const Register = () => {
    const navigate = useNavigate();
    const location = useLocation();
    const {createUser} = useContext(AuthContext)

    const handlebackhome = ()=>{
        navigate('/')
    }

    const handleRegister = (e)=>{
        e.preventDefault()
        const email = e.target.email.value;
        const password = e.target.password.value;
        const employee = e.target.employee.value;
        if(employee==="1234"){

            createUser(email,password)
            .then((result) => {
                console.log(result.user)
                Swal.fire(
                    'Good job!',
                    'Registered successfully',
                    'success'
                  )
                  navigate(location?.state ? location.state : '/')
              })
              .catch((error) => {
                console.error(error)
              });
        }
        else{
            Swal.fire({
                icon: 'error',
                title: 'Oops...',
                text: 'You entered a wrong employee id!',
                
              })
              return;
        }
        

    }
    return (
        <div>
            <div style={{
            background: "url('https://i.ibb.co/fkLTRPG/11.png'), lightgray 50% / cover no-repeat",
            backgroundSize: "cover",
            backgroundPosition: "center"
        }} className="px-[12.5%] py-12 ">
            <h1 onClick={handlebackhome} className="text-[#374151] cursor-pointer rancho text-[1.87rem] drop-shadow-lg flex items-center gap-3"> <FaLongArrowAltLeft/> Back to home</h1>
            
            <div className="h-[54rem] bg-[#F4F3F0] rounded-md mt-12">

            <h1 className="text-[#374151] rancho text-[2.87rem] drop-shadow-lg text-center font-bold pt-16">Register you as a admin</h1>
            

            <form onSubmit={handleRegister} className="px-[10%] mt-8">
               <div className="flex justify-between gap-8">

               <div className="flex-1">
                <h1 style={{color: "rgba(27, 26, 26, 0.80)"}} className="railway text-xl font-semibold">Email</h1>
                <input placeholder="Enter your Email" className="h-[3rem] placeholder:text-[#37415178] placeholder:railway pl-3 w-full mt-4 rounded-md bg-white border-none outline-[#D2B48C]" type="email" name="email" id="" required />
                </div>

               


               </div>

               <div className="flex justify-between gap-8 mt-6">

               <div className="flex-1">
                <h1 style={{color: "rgba(27, 26, 26, 0.80)"}} className="railway text-xl font-semibold">Password</h1>
                <input placeholder="Enter your password" className="h-[3rem] placeholder:text-[#37415178] placeholder:railway pl-3 w-full mt-4 rounded-md bg-white border-none outline-[#D2B48C]" type="password" name="password" id="" />
                </div>

                


               </div>

               <div className="flex justify-between gap-8 mt-6">

               <div className="flex-1">
                <h1 style={{color: "rgba(27, 26, 26, 0.80)"}} className="railway text-xl font-semibold">Employee Id</h1>
                <input placeholder="Enter your Employee Id" className="h-[3rem] placeholder:text-[#37415178] placeholder:railway pl-3 w-full mt-4 rounded-md bg-white border-none outline-[#D2B48C]" type="text" name="employee" id="" />
                </div>

                


               </div>

               <div className=" mt-6">

               <div className="w-full">
                <h1 style={{color: "rgba(27, 26, 26, 0.80)"}} className="railway text-xl font-semibold">Photo</h1>
                <input placeholder="Enter coffee photo URL" className="h-[3rem] placeholder:text-[#37415178] placeholder:railway pl-3 w-full mt-4 rounded-md bg-white border-none outline-[#D2B48C]" type="text" name="photo" id="" />
                </div>

            
               </div>

               <input className="mt-6 btn w-full h-14 text-[#331A15] rancho text-2xl rounded-md border-2 border-[#331A15] bg-[#D2B48C] capitalize" type="submit" value="Sign Up" />


               <p className="text-center rancho mt-8 text-2xl ">Already have an account? <Link to='/login' className="font-semibold text-orange-600">Login</Link></p>
            </form>

            </div>
        </div>
            
        </div>
    );
};

export default Register;