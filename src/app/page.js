
import dynamic from 'next/dynamic';
import styles from "./page.module.scss";
import Link from 'next/link';
import Hometag from "./components/home/Hometag";
import Contact from './components/contact/Contact';
import About from './components/about/About';
import Portfolio from './components/portfolio/Portfolio';
export default async function Home() {
  return (
    <main className={ '' }>
      <Hometag/>
       <About/>
       <Contact/>
       <Portfolio/> 
    </main>
  );
}

