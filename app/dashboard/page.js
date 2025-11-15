'use client'
export default function home() {
    function removestorage() {
        localStorage.removeItem("login");
        window.location.href = "/";
        console.log("logged out");
    }
    return <>
        <button onClick={e => removestorage()} >logout</button>
        

        <div
            className="w-64 aspect-square bg-blue-500 flex items-center justify-center text-white text-lg font-bold"
        >
            1:1 Square
        </div>


        <div
            className="w-64 aspect-video bg-green-500 flex items-center justify-center text-white text-lg font-bold"
        >
            16:9 Video
        </div>


        <div
            className="w-64 aspect-[3/2] bg-purple-500 flex items-center justify-center text-white text-lg font-bold"
        >
            3:2 Custom
        </div>

        <div
            className="aspect-[--my-aspect-ratio] [--my-aspect-ratio:4/3] flex justify-center items-center bg-blue-500 text-white"
        >
            Aspect Ratio Box
        </div>
        <div>
            <iframe
                className="aspect-retro: 18/9"
                src="https://www.youtube.com/embed/dQw4w9WgXcQ"
            ></iframe>
        </div>

        <iframe
            className="w-64 aspect-video md:aspect-square flex items-center justify-center bg-green-500 rounded-lg"
            src="https://www.youtube.com/embed/dQw4w9WgXcQ"
        ></iframe>
        <div
            className="aspect-3/2 object-cover justify-center flex items-center bg-green-500 text-lg" >
        </div>
        <div className=" columns-3 justify-center bg-blue-500">
            <img className="w-64 aspect-3/2 justify-center flex items-center " src="https://picsum.photos/600/338" />
            <img className="aspect-square-[7/9] justify-center flex items-center" src="https://picsum.photos/600/338" />
            <img className="aspect-square justify-center flex items-center " src="https://picsum.photos/600/338" />
            <img className="aspect-square justify-center flex items-center " src="https://picsum.photos/600/338" />
        </div>
        <div className="columns-3xs bg-blue-500 justify-center gap-4">
            <img className="aspect-3/2 justify-center items-center" src="https://fastly.picsum.photos/id/85/600/338.jpg?hmac=RuAKOyJF_u60-4ROdkYnhJCCBmDuBw4i7g2jmUc09xw" />
            <img className="aspect-square justify-center items-center" src="https://fastly.picsum.photos/id/85/600/338.jpg?hmac=RuAKOyJF_u60-4ROdkYnhJCCBmDuBw4i7g2jmUc09xw" />
            <img className="aspect-square justify-center items-center" src="https://fastly.picsum.photos/id/85/600/338.jpg?hmac=RuAKOyJF_u60-4ROdkYnhJCCBmDuBw4i7g2jmUc09xw" />
            <img className="aspect-square justify-center items-center" src="https://fastly.picsum.photos/id/85/600/338.jpg?hmac=RuAKOyJF_u60-4ROdkYnhJCCBmDuBw4i7g2jmUc09xw" />


        </div>
        <div className="columns-[90vw] gap-4 p-4" ></div>
        <img className="aspect-square rounded-lg" src="https://picsum.photos/600/338" />
        <img className="aspect-3/2 rounded-lg" src="https://picsum.photos/600/338" />


    </>

}


