import React from "react";

export default function BigTitle({ text = '', sizeText = 'text-xl' }) {
  return <h2 className={`font-black uppercase p-4 text-white leading-tight ${sizeText} `}>{text}</h2>;
}
// linear-gradient(90deg, #36e39e 0%, #6e7cfe 50%, #cc6cfd 100%)
