import Category from "@/components/Category";
import Footer from "@/components/Footer";
import Header from "@/components/Header";
import MainContent from "@/components/MainContent";

export default function Home() {
  return (
    <div>
      <Header />
      <div className="flex flex-col flex-1 items-center justify-center bg-zinc-50 font-sans dark:bg-black mt-16 mb-32">
        <MainContent />
        <Category />
        {/* <NewIn />
        <BestSeller />
        <Topics />
        <Collection /> */}
      </div>
      <Footer/>
    </div>

  );
}
