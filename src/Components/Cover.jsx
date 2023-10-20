

const Cover = () => {
    return (
        <div style={{
            background: "url('https://i.ibb.co/TvcH4Mx/3.png'), lightgray 50% / cover no-repeat",
            backgroundSize: "cover",
            backgroundPosition: "center"
        }} className="h-[20rem] lg:h-[50rem] flex lg:justify-end items-center">
            <div className="lg:mr-40">
                <h1 className="text-white text-center lg:text-left rancho text-2xl lg:text-[3.4rem]">Would you like a Cup of Delicious Coffee?</h1>
                <p className="mt-6 text-white text-center lg:text-left text-base railway mx-auto lg:mx-0 w-[95%] lg:w-[50rem]">It is coffee time - Sip & Savor - Relaxation in every sip! Get the nostalgia back!! Your companion of every moment!!! Enjoy the beautiful moments and make them memorable.</p>

                <button className="mt-8 hidden lg:block bg-[#E3B577] w-[8.1rem] h-12 capitalize  rancho text-2xl text-[#242222] hover:text-white hover:bg-black hover:border-2 hover:border-white">Learn More</button>

            </div>

        </div>
    );
};

export default Cover;