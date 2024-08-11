import { useGSAP } from "@gsap/react";
import gsap from "gsap";

const GsapTimeline = () => {
    const timeline=gsap.timeline({repeat:-1,repeatDelay:0,yoyo:true})
    useGSAP(()=>{
     timeline.to("#yellow-box",{
      x:350,
      duration:1,
      rotation:360,
      borderRadius:'100%'
     })
     timeline.to("#yellow-box",{
      y:350,
      duration:1,
      rotation:360,
      borderRadius:'50%'
     })
     timeline.to('#yellow-box',{
      x:650,
      duration:1,
      borderRadius:'0%',
     })
     timeline.to("#yellow-box",{
      y:-50,
      duration:1,
      rotation:180,
      borderRadius:'50%',
     })
    },[])

  return (
    <main>
      <h1>GsapTimeline</h1>

      <div className="mt-20 space-y-10">
        <button className="border bg-slate-500 p-2 cursor-pointer" onClick={() => {
          if(timeline.paused()){
            timeline.play()
          }else{
            timeline.pause()
          }
        }}>Play/Pause</button>

        <div id="yellow-box" className="w-20 h-20 bg-yellow-500 rounded-lg" />
      </div>
    </main>
  );
};

export default GsapTimeline;
