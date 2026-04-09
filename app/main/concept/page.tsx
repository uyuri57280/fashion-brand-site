import React from 'react'
import { Ballet } from "next/font/google";
import Image from 'next/image';

const ballet = Ballet({
  subsets: ["latin"],
  weight: "400",
});

const page = () => {
  return (
    <div className="relative p-4 h-screen w-full flex flex-col justify-center gap-4">
      <div className='absolute -z-10 top-30 md:-top-30 xl:-top-140'>
        <Image src='/リテールコンセプト背景.png' alt='リテールコンセプト背景' width={1800} height={1800}/>
      </div>
      <div className='flex flex-col gap-4'>
        <h1 className='text-4xl text-center py-4 font-bold'>CONCEPT</h1>
        <p className='text-center leading-8'>
          LUMIEは、<br />
          フェミニン・かわいい・ストリート・フォーマルを<br />
          ミックスし、一枚着るだけで日常が少し特別に感じられる服を提案するブランドです。
        </p>
        <p className='text-center leading-8'>
          特別な日のための服ではなく、<br />
          「普通の日を特別な気分で過ごすための服」を届け<br />
          たい。

          背伸びしすぎなくてもおしゃれに見えること。
          頑張りすぎなくても、自分らしく愛されること。

          LUMIEは、毎日の中に小さな光とときめきを与える<br />
          ファッションを目指します。
        </p>
      </div>



      {/* <h1 className={`${ballet.className} font-sans text-5xl text-center font-bold mt-16 text-pink-200`}>daydream</h1>
        <h1 className={`${ballet.className} font-sans text-5xl text-center font-bold mt-16 text-pink-300`}>daydream</h1>
        <h1 className={`${ballet.className} font-sans text-5xl text-center font-bold mt-16 text-pink-400`}>daydream</h1>
        <h1 className={`${ballet.className} font-sans text-5xl text-center font-bold mt-16 text-gray-200`}>daydream</h1>
        <h1 className={`${ballet.className} font-sans text-5xl text-center font-bold mt-16 text-gray-300`}>daydream</h1>
        <h1 className={`${ballet.className} font-sans text-5xl text-center font-bold mt-16 text-gray-400`}>daydream</h1> */}
    </div>

  )
}

export default page