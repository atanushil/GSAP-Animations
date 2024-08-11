import { useGSAP } from "@gsap/react";
import gsap from "gsap";
const GsapFromTo = () => {
  // TODO: Implement the gsap.fromTo() method
  useGSAP(() => {
    gsap.fromTo(
      "#red-box",
      {
        x: 0,
        borderRadius: "0%",
        rotation: 0,
      },
      {
        x: "40vw",
        repeat: -1,
        borderRadius: "100%",
        yoyo: true,
        rotation: 360,
        duration: 2,
        ease: "bounce.inOut",
      }
    );
  }, []);

  return (
    <main>
      <h1>GsapFromTo</h1>
      <div className="mt-20">
        <div id="red-box" className="w-20 h-20 bg-red-500 rounded-lg" />
      </div>
    </main>
  );
};

export default GsapFromTo;
