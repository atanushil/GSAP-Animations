import { useGSAP } from "@gsap/react";
import gsap from "gsap";
const GsapTo = () => {
  useGSAP(()=>{
    gsap.to('#blue-box',{
      x:'80vw',
      repeat:-1,
      yoyo:true,
      rotation:360,
      duration:2,
      ease:'bounce'
    })
  },[])
  return (
    <main >
      <p className="text-4xl text-blue-400">GsapTo</p>
      <div className="py-8 ">
        <div id="blue-box" className="w-20 h-20 bg-blue-500 rounded-lg" />
      </div>
    </main>
  );
};

export default GsapTo;
