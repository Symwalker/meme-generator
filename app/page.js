import Image from "next/image";

export default async function Home() {
  let memes =await fetch('https://api.imgflip.com/get_memes')
  memes = await memes.json()
  memes = memes.data.memes
  console.log(memes);
  return (
   <div className="flex flex-wrap">
      {
        memes?.map((meme)=>(
          <div className="w-[200px] h-[400px] border-2 border-black ">
            <h2 className="text-center">{meme.name}</h2>
            <Image src={meme.url} className="bg-contain " width={200} height={200} />

          </div>
        ))
      }
   </div>
  );
}
