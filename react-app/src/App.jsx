import { useEffect, useState } from "react";
import GithubButton from "./components/home/github-button";
import MainCard from "./components/home/main-card";
import { calculateTimeLeft } from "./utils/calculate-time-left";

export default function App() {
  const [countdown, setCountdown] = useState(calculateTimeLeft());

  useEffect(() => {
    const interval = setInterval(() => {
      setCountdown(calculateTimeLeft());
    }, 1000);
    return () => clearInterval(interval);
  }, []);

  return (
    <main className="min-h-screen px-8 flex flex-col justify-center items-center">
      <MainCard countdown={countdown}/>
      <GithubButton/>
    </main>
  );
}
