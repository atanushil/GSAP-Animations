import { useGSAP } from "@gsap/react";
import gsap from "gsap";
const GsapTo = () => {
  // TODO: Implement the gsap.from() method
  useGSAP(()=>{
    gsap.to('#green-box',{
      x:'40vw',
      repeat:-1,
      yoyo:true,
      rotation:360,
      duration:2,
      ease:'bounce'
    })
  },[])
  return (
    <main>
      <h1>GsapTo</h1>
      <div className="mt-20">
        <div id="green-box" className="w-20 h-20 bg-blue-500 rounded-lg" />
      </div>
    </main>
  );
};

export default GsapTo;
