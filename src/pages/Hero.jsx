import "./Hero.css";
import { ArrowUpRight } from 'lucide-react';

import hero from "../images/hero.jpg";


export default function Hero() {
  return (
 <>
 <div className="hero" id="home">




<div className="part1">
<div className="a1">
  <div className="point">


  </div>
   <h3>Available for freelance work</h3> 
</div>

<h3 className="a2">Building Digital
Experiences With <span>Code.</span></h3>


<h3 className="a3">Computer Science Student & Full-Stack
   Developer passionate about building modern web
    applications and digital experiences</h3>


<div className="a4">

<button className="a5">
   <h3>View My Projects</h3>
  <ArrowUpRight />
 
  
  </button>

<button  className="a6">
  
<h3>  let's Connect</h3>
  
  </button>


</div>
    




  <div className="status">
    <div>
<h3 className="a7">3+</h3>
<h3 className="a8">Years of Experience</h3>

</div>

    <div>
     < h3 className="a7">10+</h3>
     <h3 className="a8">Projects Completed</h3>
    </div>


    <div>
<h3 className="a7">CS</h3>
<h3 className="a8">Computer Science Student</h3>

    </div>

    
    </div>  




</div>




<div className="part2">

<img className="img1" src={hero} alt="hero" />




</div>



 </div>
 </>
  );
}
