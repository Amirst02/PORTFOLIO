
import { Layers, Server, Wrench } from "lucide-react";
import "./Skills.css"

const frontend=["HTML","CSS","Javascript","React","GSAP"]
const backend=["Node.js","Express.js","REST APIs","MongoDB","PostgreSQLe"]
const Tools=["Git","GitHUb","Linux","powrepoint","Figma"]

function Skills(){

    return(

<div className="c1" id="skills">


    
<div className="c2">
<h3 className="c3">SKILLS</h3>
<h3 className="c4">The stack I build with</h3>

<h3 className="c5">Tools and technologies I use daily to take products from idea to production.</h3>


</div>




<div className="c2-1">

<div className="frontend">
<div className="frontend-1">

<Layers color="blue"/>

<h3 className="namefr">
    Frontend
</h3>

</div>



<div className="frontend-2">
   {frontend.map((skill)=>{
        return <h3 className="skilfr">
  {skill}
</h3>

    })}

 


    
</div>


</div>






<div className="frontend">
<div className="frontend-1">

<Layers color="blue"/>

<h3 className="namefr">
    Backend
</h3>

</div>



<div className="frontend-2">
   {backend.map((skill)=>{
        return <h3 className="skilfr">
  {skill}
</h3>

    })}

 


    
</div>

</div>



<div className="frontend">
<div className="frontend-1">

<Layers color="blue"/>

<h3 className="namefr">
    Tools
</h3>

</div>



<div className="frontend-2">
   {Tools.map((skill)=>{
        return <h3 className="skilfr">
  {skill}
</h3>

    })}

 


    
</div>


</div>

</div>


    </div>



    )



}

export default Skills;
