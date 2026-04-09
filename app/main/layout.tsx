import type { Metadata } from "next";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  title: "Lumie",
  description: "LUMIEは、フェミニン・ストリート・フォーマルをミックスし、日常を少し特別に感じられる服を提案するファッションブランド。普通の日を特別な気分で過ごすためのスタイルを届けます。",
};

export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <>
      <Header />
      {/* <Sidebar authClaims={authClaims} /> */}
      {children}
      <Footer />
    </>

  );
}
