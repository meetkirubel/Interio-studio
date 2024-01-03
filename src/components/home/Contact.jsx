import Image from 'next/image'
import p1 from '@/asset/contact/p1.jpg'

const Contact = () => {
  return (
    <section className='contact-section'>
        <div className="contact-container">
            <div className="img">
            <Image src={p1} alt="Office Design"/>          
            </div>
            <div className="form">
                <p>PO BOX 4120. Portland, US.</p>
                <h2 className="h2">Let's start something <br /> big togather.</h2>
                <div className="input">
                <input type="email" name="email" className='input' required
                 placeholder='Enter Email Address'/>
                <button className="btn">Get Started</button>
                </div>
            </div>
        </div>
    </section>    
  )
}

export default Contact