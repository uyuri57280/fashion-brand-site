import { Ballet } from "next/font/google";
import Image from 'next/image';

const ballet = Ballet({
  subsets: ["latin"],
  weight: "400",
});

const page = () => {
  return (
    <div className="relative p-4 h-screen w-full flex flex-col justify-center gap-4">
      <div className='absolute -z-10 top-16 md:-top-30 xl:-top-140'>
        <Image src='/concept-bg.png' alt='リテールコンセプト背景' width={1800} height={1800} />
      </div>
      <div className='flex flex-col gap-4'>
        <h1 className='text-4xl text-center py-4 font-bold'>CONCEPT</h1>
        <p className='text-sm text-center leading-8'>
          LUMIEは、<br />
          フェミニン・かわいい・ストリートを<br />
          ミックスし、一枚着るだけで日常が少し特別に<br />
          感じられる服を提案するブランドです。
        </p>
        <p className='text-sm text-center leading-8'>
          特別な日のための服だけではなく、<br />
          「普通の日を特別な気分で過ごすための服」を<br />
          届けたい。

          気負わずにおしゃれを楽しめること、<br />
          頑張りすぎなくても、自分らしく愛されること。<br />

          LUMIEは毎日の中に小さな光と、ときめきを<br />
          与えるファッションを目指します。
        </p>
      </div>
    </div>

  )
}

export default page