import React from 'react'
import Image from 'next/image'
import p1 from '@/asset/howitwork/p1.jpg'
const HowItWork = () => {
  return (
    <section className='how-it-work-section'>
    <div className="how-it-work-container">
    <div className="left">
         <h2 className="h2">Take a look How<span> interior <br /> Design Studio Work.</span></h2>
            <p>Interio is more than just interior design; it's about shaping environments that nurture your spirit and reflect your unique soul. We believe in the transformative power of a well-designed space, one that seamlessly blends style and functionality to create a haven you'll truly cherish.</p>
            <br />
            <p>Interio is more than just interior design; it's about shaping environments that nurture your spirit and reflect your unique soul.</p>
        </div>
        <div className="right">
                <div className="projects">
                        <Image src={p1} alt="Office Design" placeholder="blur"/>          
                    </div>
                </div>
        </div>
</section>
  )
}

export default HowItWork