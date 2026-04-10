import Image from 'next/image'
import { Merriweather } from "next/font/google";
import { Ballet } from "next/font/google";

const ballet = Ballet({
  subsets: ["latin"],
  weight: "400",
});
const merriweather = Merriweather({
  subsets: ["latin"],
  weight: "400",
});

const MainContent = () => {
  return (
    <div className='relative flex justify-center items-center'>
      <div className='absolute'>
        <h2 className={`${merriweather.className} font-sans text-pink-200 text-2xl text-center absolute -top-6 left-6`}>LUMIE2026</h2>
        <h1 className={`${merriweather.className} font-sans text-gray-800 text-4xl text-center`}>DayDream</h1>
        <h2 className={`${ballet.className} font-sans text-pink-200 text-4xl text-right absolute left-32 top-12`}>Collection</h2>
      </div>
      <Image src="/skirt.jpg" alt="girl-skirt" width={1000} height={1000} />
    </div>

  )
}

export default MainContent