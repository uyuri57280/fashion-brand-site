import Image from 'next/image'
import { Ballet } from "next/font/google";

const ballet = Ballet({
    subsets: ["latin"],
    weight: "400",
});

const page = () => {
    return (
        <div className='mt-16 mb-20'>
            <Image
                src="/background.JPG"
                alt="background"
                width={1800}
                height={1800}
                className='fixed -z-10'
            />
            <div className='p-4 flex flex-col gap-4'>
                <h1 className={`${ballet.className} font-sans text-4xl p-4 text-center`}>DayDream</h1>
                <p className='text-center'>
                    何気ない毎日を、夢の中みたいに、<br />
                    やさしく包む。<br />
                    <br />
                    日常の中でふと訪れる、夢を見ているような<br />
                    やわらかい時間。
                    現実と空想の間を漂うような<br />
                    気持ちから着想を得たコレクション。
                    <br />
                    <br />
                    少しオーバーサイズのシルエットにすることで、
                    <br />
                    包み込まれるような安心感とリラックス感を<br />
                    表現した。
                    <br />
                    <br />
                    淡いカラーは<br />
                    朝の光やぼんやりした夢の余韻をイメージ。
                    <br />
                    一枚着るだけで、何気ない一日が少し特別に<br />
                    感じられるパーカーを提案する。
                </p>
            </div>

        </div>
    )
}

export default page