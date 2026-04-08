import Category from "@/components/Category";
import Header from "@/components/header";
import MainContent from "@/components/MainContent";
import Image from "next/image";

export default function Home() {
  return (
    <div>
      <Header />
      <div className="flex flex-col flex-1 items-center justify-center bg-zinc-50 font-sans dark:bg-black mt-16">
        <MainContent />
        <Category />
        {/* <NewIn />
        <BestSeller />
        <Topics />
        <Collection /> */}
      </div>
    </div>

  );
}
