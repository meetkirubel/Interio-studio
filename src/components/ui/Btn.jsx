import { FaArrowRightLong } from "react-icons/fa6";

const Btn = ({text}) => {
  return (
    <button className="btn">
        {text}
        <div className="arrow">
        <FaArrowRightLong className="icon"/>
        </div>


    </button>
  )
}

export default Btn