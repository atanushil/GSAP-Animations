import React, { useState } from "react";
import GsapTo from "./GsapTo";
import GsapFrom from "./GsapFrom";
import GsapFromTo from "./GsapFromTo";
import GsapStagger from "./GsapStagger";
import GsapTimeline from "./GsapTimeline";
import GsapScrollTrigger from "./GsapScrollTrigger";
import GsapText from "./GsapText";

export default function Animation() {
  const [selectedAnimation, setSelectedAnimation] = useState("GsapTo");

  const animations = [
    { name: "GsapTo", component: <GsapTo /> },
    { name: "GsapFrom", component: <GsapFrom /> },
    { name: "GsapFromTo", component: <GsapFromTo /> },
    { name: "GsapStagger", component: <GsapStagger /> },
    { name: "GsapTimeline", component: <GsapTimeline /> },
    { name: "GsapScrollTrigger", component: <GsapScrollTrigger /> },
    { name: "GsapText", component: <GsapText /> },
  ];

  const renderComponent = () => {
    const animation = animations.find((anim) => anim.name === selectedAnimation);
    return animation ? animation.component : null;
  };

  return (
    <div>
      <h1 className="text-xl uppercase text-green-400 my-4">Animations using GSAP</h1>
      <div>
        <ul className="flex items-center border justify-between">
          {animations.map((animation, index) => (
            <li
              key={index}
              onClick={() => setSelectedAnimation(animation.name)}
              className={`w-full items-center justify-center flex p-2 text-xl text-white cursor-pointer hover:bg-slate-400 ${
                selectedAnimation === animation.name ? "bg-slate-600" : ""
              }`}
            >
              {animation.name}
            </li>
          ))}
        </ul>
      </div>
      <div className="mt-4 border bg-white">
        {renderComponent()}
      </div>
    </div>
  );
}
