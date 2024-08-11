import { useGSAP } from "@gsap/react";
import gsap from "gsap";
const GsapFromTo = () => {
  useGSAP(() => {
    gsap.fromTo(
      "#red-box",
      {
        x: 0,
        borderRadius: "0%",
        rotation: 0,
      },
      {
        x: "80vw",
        repeat: -1,
        borderRadius: "100%",
        yoyo: true,
        rotation: 360,
        duration: 2,
        ease:"bounce",
      }
    );
  }, []);

  return (
    <main >
      <p className="text-4xl text-red-400">GsapFromTo</p>
      <div className="py-8 ">
        <div id="red-box" className="w-20 h-20 bg-red-500 rounded-lg" />
      </div>
    </main>
  );
};

export default GsapFromTo;
