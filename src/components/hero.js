import HeroImg from '../assets/hero.png'
import { AiOutlineTwitter,AiOutlineLinkedin,AiOutlineGithub } from "react-icons/ai";

export default function Hero(){

    return <section className='flex flex-col md:flex-row px-5 py-32 bg-secondary justify-center'>
       <div className='md:w-1/2 flex flex-col' >   
            <h1 className=' text-white text-4xl font-hero-font'> HI, <br/> Im KAVIYARASU   
                <p className=' text-2xl'> Im a Java Full-stack developer</p>
            </h1>
            <div className='flex '>
                <a href='#' className='pr-5 hover:text-white'> <AiOutlineLinkedin size={40}/></a>
                <a href='#' className='pr-5 hover:text-white' > <AiOutlineGithub size={40}/></a>
            </div>

       </div>
       <img className='md:w-1/3 ' src ={HeroImg}/>
    </section>
}