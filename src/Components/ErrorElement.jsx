import { FaLongArrowAltLeft } from "react-icons/fa";
import { useNavigate } from "react-router-dom";


const ErrorElement = () => {
    const navigate = useNavigate();

    const handlebackhome = ()=>{
        navigate(-1)
    }
    return (
        <div>
            <h1 onClick={handlebackhome} className="text-[#374151] mt-20 ml-[10%] text-center cursor-pointer rancho text-[1.87rem] drop-shadow-lg flex items-center gap-3"> <FaLongArrowAltLeft/> Back to home</h1>

            <img className="w-[65%] mx-auto" src="https://i.ibb.co/phMkyZ1/404.gif" alt="" />
            
        </div>
    );
};

export default ErrorElement;