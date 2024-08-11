import { useGSAP } from "@gsap/react";
import gsap from "gsap";

const GsapStagger = () => {
  useGSAP(()=>{
    gsap.to('.stagger-box',{
      y:200,
      rotation:360,
      stagger:0.5,
      yoyo:true,
      duration:1,
      ease:'',
      repeat:-1,
      borderRadius:'100%'
    })
  },[])

  return (
    <main>
      <h1>GsapStagger</h1>
      <div className="mt-20">
        <div className="flex gap-5">
          <div className="w-20 h-20 bg-indigo-200 rounded-lg stagger-box" />
          <div className="w-20 h-20 bg-indigo-300 rounded-lg stagger-box" />
          <div className="w-20 h-20 bg-indigo-400 rounded-lg stagger-box" />
          <div className="w-20 h-20 bg-indigo-500 rounded-lg stagger-box" />
          <div className="w-20 h-20 bg-indigo-600 rounded-lg stagger-box" />
          <div className="w-20 h-20 bg-indigo-700 rounded-lg stagger-box" />
          <div className="w-20 h-20 bg-indigo-800 rounded-lg stagger-box" />
        </div>
      </div>
    </main>
  );
};

export default GsapStagger;
