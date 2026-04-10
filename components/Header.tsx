import Link from "next/link";
import HamburgerMenu from "./HamburgerMenu";
import { Ballet } from "next/font/google";

const ballet = Ballet({
  subsets: ["latin"],
  weight: "400",
});


export default function Header() {

  return (
    <header>
      <nav className="fixed top-0 left-0 z-40 w-full flex flex-col justify-between">
        <div className="shadow-xl h-16 flex justify-center items-center p-4 bg-sky-50 relative">
          <div className="absolute left-4">
            <HamburgerMenu />
          </div>
          
          <Link href="/main/home" className="flex gap-5">
            <p className={`${ballet.className} font-sans text-2xl`} >
              Lumie
            </p>
          </Link>

          
        </div>

      </nav>
    </header>
  );
}