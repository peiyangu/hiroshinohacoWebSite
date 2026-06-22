import { About } from "@/components/About/About";
import { Access } from "@/components/Access/Access";
import { Footer } from "@/components/Footer/Footer";
import { Header } from "@/components/Header/Header";
import { Hero } from "@/components/Hero/Hero";
import { Schedule } from "@/components/Schedule/Schedule";
import { OnlineShop } from "@/components/OnlineShop/OnlineShop";
import { News } from "@/components/News/News";
import { LineUpPreview } from "@/components/LineUpPreview/LineUpPreview";
import { Menu } from "@/components/Menu/Menu";

export default function HomePage() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <News />
        <About />
        <Menu />
        <LineUpPreview />
        <Schedule />
        <OnlineShop />
        <Access />
      </main>
      <Footer />
    </>
  );
}
