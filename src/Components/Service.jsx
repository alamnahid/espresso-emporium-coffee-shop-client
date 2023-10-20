import { useEffect, useState } from "react";


const Service = () => {
    const [service, setService] = useState([]);

    useEffect(()=>{
        fetch('/service.json')
        .then(res=>res.json())
        .then(data=>setService(data))
    }, [])

    
    return (
        <div className="lg:h-[18.75rem] pt-8 lg:pt-0 bg-[#ECEAE3] flex flex-col lg:flex-row justify-center items-center gap-12">
            {
                service.map(ser=><div key={ser.id}>
                    <img src={ser.image} alt="" />
                    <h1 className="rancho text-[#331A15] text-[2.1rem] mt-4">{ser.title}</h1>
                    <p className="text-[#1B1A1A] railway mt-2 text-base w-[18rem]">{ser.description}</p>
                </div>)
            }
            
        </div>
    );
};

export default Service;