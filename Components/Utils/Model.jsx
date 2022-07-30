import { useState } from "react";
import ReactDOM from "react-dom";
export function Backdrop({ className, close }) {
  return (
    <div
      className={
        "absolute top-0 left-0 w-full h-full bg-black/70 backdrop-blur-sm hover:cursor-pointer " +
        className
      }
      onClick={close}
    ></div>
  );
}

export default function Model({ children, close }) {
  const mdl = (
    <div className="absolute w-screen h-screen z-20">
      <Backdrop close={close} />
      {children}
    </div>
  );
  if (typeof window === "undefined") {
    return null;
  } else {
    return ReactDOM.createPortal(mdl, document?.getElementById("models"));
  }
}
