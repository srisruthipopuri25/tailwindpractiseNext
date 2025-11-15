export default function home() {
    return <>


        <div
            class="w-64 aspect-square bg-blue-500 flex items-center justify-center text-white text-lg font-bold"
        >
            1:1 Square
        </div>


        <div
            class="w-64 aspect-video bg-green-500 flex items-center justify-center text-white text-lg font-bold"
        >
            16:9 Video
        </div>


        <div
            class="w-64 aspect-[3/2] bg-purple-500 flex items-center justify-center text-white text-lg font-bold"
        >
            3:2 Custom
        </div>

        <div
            class="aspect-[--my-aspect-ratio] [--my-aspect-ratio:4/3] flex justify-center items-center bg-blue-500 text-white"
        >
            Aspect Ratio Box
        </div>
        <div>
            <iframe
                class="aspect-retro: 18/9"
                src="https://www.youtube.com/embed/dQw4w9WgXcQ"
            ></iframe>
        </div>

        <iframe
            class="w-64 aspect-video md:aspect-square flex items-center justify-center bg-green-500 rounded-lg"
            src="https://www.youtube.com/embed/dQw4w9WgXcQ"
        ></iframe>
        <div
            class="aspect-3/2 object-cover justify-center flex items-center bg-green-500 text-lg" >
        </div>
        <div class=" columns-3 justify-center bg-blue-500">
            <img class="w-64 aspect-3/2 justify-center flex items-center " src="https://picsum.photos/600/338" />
            <img class="aspect-square-[7/9] justify-center flex items-center" src="https://picsum.photos/600/338" />
            <img class="aspect-square justify-center flex items-center " src="https://picsum.photos/600/338" />
            <img class="aspect-square justify-center flex items-center " src="https://picsum.photos/600/338" />
        </div>
        <div class="columns-3xs bg-blue-500 justify-center gap-4">
            <img class="aspect-3/2 justify-center items-center" src="https://fastly.picsum.photos/id/85/600/338.jpg?hmac=RuAKOyJF_u60-4ROdkYnhJCCBmDuBw4i7g2jmUc09xw" />
            <img class="aspect-square justify-center items-center" src="https://fastly.picsum.photos/id/85/600/338.jpg?hmac=RuAKOyJF_u60-4ROdkYnhJCCBmDuBw4i7g2jmUc09xw" />
            <img class="aspect-square justify-center items-center" src="https://fastly.picsum.photos/id/85/600/338.jpg?hmac=RuAKOyJF_u60-4ROdkYnhJCCBmDuBw4i7g2jmUc09xw" />
            <img class="aspect-square justify-center items-center" src="https://fastly.picsum.photos/id/85/600/338.jpg?hmac=RuAKOyJF_u60-4ROdkYnhJCCBmDuBw4i7g2jmUc09xw" />


        </div>
        <div class="columns-[90vw] gap-4 p-4" ></div>
        <img class="aspect-square rounded-lg" src="https://picsum.photos/600/338" />
        <img class="aspect-3/2 rounded-lg" src="https://picsum.photos/600/338" />


    </>

}


