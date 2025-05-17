import Image from "next/image";
import styles from "./page.module.css";
import Hero from "./components/hero/Hero";
import Section1 from "./components/section1/Section1";
import Section2 from "./components/section2/Section2";

export default function Home() {
  return (
    <div>
      <Hero />
      <Section1 />
      <Section2 />
      
    </div>
  );
}
