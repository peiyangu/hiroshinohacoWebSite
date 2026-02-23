import { About } from "@/components/About/About";
import { Access } from "@/components/Access/Access";
import { Footer } from "@/components/Footer/Footer";
import { Header } from "@/components/Header/Header";
import { Hero } from "@/components/Hero/Hero";
import { LineUp } from "@/components/LineUp/LineUp";
import { ModelCourse } from "@/components/ModelCourse/ModelCourse";
import { Schedule } from "@/components/Schedule/Schedule";
import { Menu } from "@/components/Menu/Menu";
import { OnlineShop } from "@/components/OnlineShop/OnlineShop";
import { News } from "@/components/News/News";

export default function HomePage() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <News />
        <About />
        <LineUp />
        <Menu />
        <Schedule />
        <ModelCourse />
        <OnlineShop />
        <Access />
      </main>
    </>
  );
}
