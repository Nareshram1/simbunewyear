'use client'
import { useState,useEffect } from "react"

type Props={
    targetDate:number,
    serverTime:Date
}
export default function Timer({targetDate:targetDate,serverTime:serverTime}:Props) {
    const [st,setSt]=useState(serverTime)
    const [timeLeft, setTimeLeft] = useState(calculateTimeLeft());

    useEffect(() => {
      const timer = setInterval(() => {
        setTimeLeft(calculateTimeLeft());
        console.log(st);
        setSt(new Date())
      }, 1000);
  
      return () => clearInterval(timer);
    }, [timeLeft]);
  
    function calculateTimeLeft() {
      const difference = targetDate - st.getTime();
      
      const days = Math.floor(difference / (1000 * 60 * 60 * 24));
      const hours = Math.floor((difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
      const minutes = Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60));
      const seconds = Math.floor((difference % (1000 * 60)) / 1000);
  
      return {
        days,
        hours,
        minutes,
        seconds,
      };
    }
  
    return (
      <div>
        <div className="font-semibold text-2xl mb-5">Simbu New Year</div>
        <div>{timeLeft.days} days</div>
        <div>{timeLeft.hours} hours</div>
        <div>{timeLeft.minutes} minutes</div>
        <div>{timeLeft.seconds} seconds</div>
      </div>
    );
}