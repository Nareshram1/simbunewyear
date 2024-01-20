'use client'
import { useState,useEffect } from "react"

type Props={
    targetDate:number,
    serverTime:Date
}
export default function Timer({targetDate:targetDate,serverTime:serverTime}:Props) {
    const [st,setSt]=useState<Date>(serverTime)
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
      <div className="flex flex-col w-[100%] md:gap-4   justify-center items-center">
        <h1 className="font-semibold md:text-[5rem] text-2xl mb-5">Simbu New Year</h1>
        <div className="flex gap-4 md:text-[2rem] justify-center items-center">
        <h1>{timeLeft.days} days</h1>
        <h1>{timeLeft.hours} hours</h1>
        <h1>{timeLeft.minutes} minutes</h1>
        <h1>{timeLeft.seconds} seconds</h1>
        </div>
      </div>
    );
}