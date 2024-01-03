import Image from "next/image";
import p1 from "@/asset/workprocess/p1.jpg";
import Btn from "../ui/Btn";

const WorkProcess = () => {
  return (
    <section className="work-process-section">
      <div className="work-process-container">
        <div className="left">
          <Image src={p1} alt="interio" placeholder="blur" className="img1" />
        </div>
        <div className="right">
          <h2 className="h2">
            <span>Our work process </span> make
            <br /> your dream true.
          </h2>
          <ol>
            <li>
              <div className="header">
                <span>1</span> <h3>Perfection in Every Inch</h3>
              </div>
              <p>
   
                We are residential design frim located in portland. Our boutique
                studio offer more than..
              </p>
            </li>
            <li>
              <div className="header">
                <span>2</span> <h3>Simpel Idea & design</h3>
              </div>
              <p>
               
                We are residential design frim located in portland. Our boutique
                studio offer more than..
              </p>
            </li>
            <li>
              <div className="header">
                <span>3</span> <h3>Comfortable Support</h3>
              </div>
              <p>
        
                We are residential design frim located in portland. Our boutique
                studio offer more than..
              </p>
            </li>
          </ol>
        </div>
      </div>
    </section>
  );
};

export default WorkProcess;
