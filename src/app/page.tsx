import "@/app/styles/Home.css"
import Image from "next/image";

export default function Home() {
  return (
    <div className="grid-intro-contents">
      <div className="intro-contents">
        <h1>Hi I am <span className="pkshade-color">Vignesh</span></h1>
        <p>Tech Enthusiast & Full Stack Web Developer | Exploring New Frontiers | May be future Security Analyst</p>
      </div>
      <div className="portfolio-img">
        {/* image placeholder */}
        <Image 
          src="/images/portfolio.jpg"
          alt="portfolio image"   
          className="img-cont"
          width={560}     
          height={100}
        />
      </div>
    </div>
    
  );
}
