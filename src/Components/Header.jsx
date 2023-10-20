import { useContext } from "react";
import { AuthContext } from "./Providers/AuthProviders";
import { Link } from "react-router-dom";


const Header = () => {
    const {user, logOut} = useContext(AuthContext)
    const handleSignOut = ()=>{
        logOut()
        .then()
        .catch()
    }
    return (
        <div style={{
            background: "url('https://i.ibb.co/Gp1fwR1/15.jpg'), lightgray 50% / cover no-repeat"
        }} className=" lg:h-[7.5rem] flex justify-between px-[12.5%] items-center">
            <div className="flex gap-3 items-center">
            <img className="w-[4.6rem] h-[5.6rem]" src="https://i.ibb.co/bNyMpZQ/logo1.png" alt="" />
            <h1 className="rancho text-white md:text-3xl lg:text-[3.75rem] ">Espresso Emporium</h1>
            </div>
            
            <div className="">
            {
                        user ? <Link onClick={handleSignOut} to="/login"><button className=" bg-[#E3B577] w-[8.1rem] h-12 capitalize  rancho text-2xl text-[#242222] hover:text-white hover:bg-black hover:border-2 hover:border-white">Sign Out</button></Link>
                            :
                            <Link to="/login" ><button className=" bg-[#E3B577] w-[8.1rem] h-12 capitalize  rancho text-2xl text-[#242222] hover:text-white hover:bg-black hover:border-2 hover:border-white">Sign In</button></Link>
                    }
            </div>
        </div>
    );
};

export default Header;