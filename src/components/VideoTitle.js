const VideoTitle = ({title, overview}) => {
    return <div className="pt-[15%] px-24 absolute text-white bg-gradient-to-r from-black w-screen aspect-video">

        <h1 className="text-6xl font-bold">{title}</h1>
        <p className="py-6 text-lg w-1/4">{overview}</p>
        <div className="">
            <button className="bg-white hover:bg-opacity-80 text-xl text-black p-4 px-16 rounded-lg" >▶️Play</button>
            <button className="bg-gray-500 mx-2 text-xl text-white p-4 px-16 bg-opacity-50 rounded-lg">More Info</button>
        </div>

    </div>

    
};

export default VideoTitle;