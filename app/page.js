import Image from "next/image";
import Link from "next/link";

export default async function Home() {
  let memes =await fetch('https://api.imgflip.com/get_memes')
  memes = await memes.json()
  memes = memes.data.memes
  // console.log(memes);
  return (
   <div className="grid grid-cols-4 w-[80%] mx-auto">
      {
        memes?.map((meme)=>(
          <Link href={`/meme/${meme.id}`}>
          <div className= {`col-span-1 w-full  border-2  grayscale hover:grayscale-0 duration-500 cursor-pointer border-black `} >
            <h2 className="text-center">{meme.name}</h2>
            <img src={meme.url} className="bg-contain "  />

          </div>
          </Link>
        ))
      }
   </div>
  );
}
