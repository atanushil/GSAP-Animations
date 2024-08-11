import { useGSAP } from "@gsap/react";
import gsap from "gsap";
const GsapFrom = () => {
  // TODO: Implement the gsap.from() method
  useGSAP(()=>{
    gsap.from('#green-box',{
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
      <h1>GsapFrom</h1>
      <div className="mt-20">
        <div id="green-box" className="w-20 h-20 bg-green-500 rounded-lg" />
      </div>
    </main>
  );
};

export default GsapFrom;
