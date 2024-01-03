import Link from 'next/link'
import { BsFillLampFill } from 'react-icons/bs';
import { LiaShoppingBagSolid } from "react-icons/lia";


const Header = () => {
  return (
    <header>
        <div className="heder-container">
        <Link className='logo' href='/'><BsFillLampFill className='icon'/><p> Interio<span>.</span></p></Link>
            <nav>
                <ul>
                    <li><Link href="/#" >Home</Link></li>
                    <li><Link href="/#" >About</Link></li>
                    <li><Link href="/#" >Explore Work</Link></li>
                    <li><Link href="/#" >Shope</Link></li>
                    <li><Link href="/#" >Contact</Link></li>
                </ul>
            </nav>
            <div className="nav-icon">
                    <div className="lung">
                        <select>
                            <option value="eng">En</option>
                        </select>
                    </div>
                    <div className="cart">
                    <LiaShoppingBagSolid className='icon'/>
                    </div>
                </div>
        </div>
    </header>
  )
}

export default Header