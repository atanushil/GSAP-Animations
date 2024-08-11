import { useGSAP } from "@gsap/react";
import gsap from "gsap";
const GsapFrom = () => {
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
    <main >
      <p className="text-4xl text-green-400">GsapFrom</p>
      <div className="py-8">
        <div id="green-box" className="w-20 h-20 bg-green-500 rounded-lg" />
      </div>
    </main>
  );
};

export default GsapFrom;
