import Image from "next/image";
import styles from "./page.module.css";
import Hero from "./hero/Hero";
import Section1 from "./section1/page";
import Section2 from "./section2/page";

export default function Home() {
  return (
    <div>
      <Hero />
      <Section1 />
      <Section2 />
      
    </div>
  );
}
