import './App.css';
import { DateTime } from "luxon";
import { useEffect, useState } from "react";
import { BsGithub } from "react-icons/bs";

function App() {
  const [timeUntilNewYear, setTimeUntilNewYear] = useState(DateTime.utc(2023, 12, 31, 0, 0).diff(DateTime.now()));
  const [timeString1, setTimeString1] = useState('');
  const [timeString2, setTimeString2] = useState('');
  // const []
  useEffect(() => {
    const interval = setInterval(() => {
      setTimeUntilNewYear(DateTime.utc(2023, 12, 31, 0, 0).diff(DateTime.now()))
      let temp = DateTime.fromMillis(timeUntilNewYear.milliseconds).minus({hours: '11'})
      setTimeString1(`${temp.toFormat('dd')}:${temp.toFormat('hh')}:${temp.toFormat('mm')}:${temp.toFormat('ss')}`)  
      setTimeString2(`Which is ${temp.toSeconds().toFixed(0)} seconds 🤯`)
    }, 1000)
    return () => {clearInterval(interval)}
  }, [timeUntilNewYear])
  return (
    <main className="main-container px-8 ">
      <div className='card xl:p-32 py-32 px-16 sm:scale-100 scale-[65%]' style={{background:"var(--background-alpha)", borderRadius:"3rem", backdropFilter:"blur(40px)", boxShadow: "20px 20px 80px var(--background)"}}>
        <h1 className="heading xl:text-4xl text-2xl" style={{margin: 0, fontWeight: 300, textAlign:"center"}}>Time left until <span style={{color: "var(--accent)"}}>New Year</span>🥳</h1>
        <div className="countdown-text xl:text-[144px] text-[72px]" style={{margin: 0, fontWeight:900, textShadow: "0px 0px 80px var(--foreground-alpha)"}}>
          {timeString1}
          {/* <div style={{fontSize:'24px', display:'flex', flexDirection: 'row', gap:'4rem', alignItems: 'center', justifyContent: 'center'}}>
            <span>Days</span>
            <span>Hours</span>
            <span>Minutes</span>
            <span>Seconds</span>
          </div> */}
        </div>
        <h1 className="which-is xl:text-[28px] text-xl" style={{margin: 0, fontWeight: 100, textAlign: "center"}}>
          {timeString2}
        </h1>
      </div>
      <a href='https://github.com/HarjjotSinghh/NewYearCountdown' target='_blank' rel='noreferrer'>
        <BsGithub className='absolute top-6 right-6 w-8 h-8 text-[var(--accent)] opacity-80 hover:opacity-100 transition-all hover:scale-110 hover:cursor-pointer'/>
      </a>
    </main>
  );
}

export default App;
