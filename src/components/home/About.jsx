import Image from 'next/image'
import p1 from "@/asset/about/p1.jpg"
import p2 from "@/asset/about/p2.jpg"
import p3 from "@/asset/about/Sarah.jpg"
import { FaStar } from 'react-icons/fa6'
import Btn from '../ui/Btn'


const About = () => {
  return (
    <section className='about-section'>
        <div className="about-container">
            <div className="left">
                <div className="img1">
                    <Image
                    src={p1}
                    alt='interio'
                    placeholder="blur"
                    />
                </div>
                <div className="img2">
                <Image
                    src={p2}
                    alt='interio'
                    placeholder="blur"
                    />
                </div>
                <div className="testimonals">
                    <div className="text">
                        <p>"Interio transformed our bland apartment into a stunning and functional sanctuary. Their creativity and attention to detail are unmatched. We couldn't be happier with the outcome!"</p>
                    </div>
                    <div className="person">
                            <div className="person-data">
                                <Image src={p3} alt='Sarah M.' className='img'/>
                            <p className="name">Sarah M.</p>
                            </div>
                            
                            <div className="stars">
                            <FaStar className='icon'/>
                            <FaStar className='icon'/>
                            <FaStar className='icon'/>
                            <FaStar className='icon'/>
                            <FaStar className='icon'/>
                            </div>
                    </div>
                </div>
            </div>
            <div className="right">
             <h2 className="h2">Award Winning <br /> Interior <span>Design Studio </span></h2>
                <p>
                Where form meets function and dreams become reality. We're passionate about crafting high-quality furniture that elevates your living space. From exquisite craftsmanship to sustainable practices, we pour our heart and soul into every piece we create.
                </p>
                <p className="ceo">Jenniy Black, CEO</p>
                <Btn text="Read More." />
            </div>
        </div>
    </section>
  )
}

export default About