import React from 'react'
import Btn from '../ui/Btn'
import Image from 'next/image'
import p1 from '@/asset/project/p1.jpg'
import p2 from '@/asset/project/p2.jpg'
import p3 from '@/asset/project/p3.jpg'
const Project = () => {
  return (
    <section className='project-section'>
    <div className="project-container">
    <div className="left">
         <h2 className="h2"> <span>700+ project</span><br />all over the world.</h2>
            <p>Interio is more than just interior design; it's about shaping environments that nurture your spirit and reflect your unique soul. We believe in the transformative power of a well-designed space, one that seamlessly blends style and functionality to create a haven you'll truly cherish.</p>
            <Btn text="Read More." />
        </div>
        <div className="right">
                <div className="projects">
                    <div className="project">
                        <Image src={p1} alt="Office Design"/>
                        <div className="text">
                            <h3>Commercial</h3>
                            <p>180 project.</p>
                        </div>
                    </div>
                    <div className="project">
                        <Image src={p2} alt="Office Design"/>
                        <div className="text">
                            <h3>Residential</h3>
                            <p>250 project.</p>
                        </div>
                    </div>
                    <div className="project">
                        <Image src={p3} alt="Office Design"/>
                        <div className="text">
                            <h3>Ketchen</h3>
                            <p>140 project.</p>
                        </div>
                    </div>
                </div>
        </div>
    </div>
</section>
  )
}

export default Project