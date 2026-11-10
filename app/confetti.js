"use client";

import { useEffect, useState } from "react";
import ReactConfetti from "react-confetti";

export default function Confetti() {
  const [size, setSize] = useState(null);

  useEffect(() => {
    setSize({ width: window.innerWidth, height: window.innerHeight });
  }, []);

  if (!size) return null;

  return <ReactConfetti {...size} recycle={false} />;
}
