'use client'
import axios from "axios"
import Image from "next/image"
import { useState,useEffect,Suspense, useRef } from "react"



type Props={
    targetDate:number,
    serverTime:Date
}
export default function Timer({targetDate:targetDate,serverTime:serverTime}:Props) {
    const [st,setSt]=useState<Date>(serverTime)
    const [timeLeft, setTimeLeft] = useState(calculateTimeLeft());
    const [quote,setQuote]=useState<string>("")

    const [isLaoding,setLoading]=useState<boolean>(true)
 
const getQuote = async()=>{
 
  setTimeout(async()=>{
    try{
      const {data}:any = await axios("/api/str")
      console.log(data)
      setQuote(data.quoteObject.quote)
      console.log(quote)
      let plants =  new Audio('/'+data.quoteObject.index+'.mp3')
        
      setLoading(false)
       await plants.play()
    }catch(err){
      console.log(err)
    }
  },1500)

}
    
  useEffect(()=>{ 
    setLoading(true)
    getQuote()

  },[])
    
    useEffect(() => {

      const timer = setInterval(() => {
        setTimeLeft(calculateTimeLeft());
        // console.log(st);
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

        {isLaoding ? (
          <div className=" animate-bounce mt-10">
            <Image src="/str.gif" width={300} height={300} alt="loader" />
          </div>
        ) :(



          <div className="flex flex-col w-[100%] md:gap-4 justify-center items-center">
          <h1 className="font-semibold md:text-[5rem] text-2xl mb-5">Simbu New Year</h1>
          {/* COUNTDOWN */}
          <div className="flex gap-4 md:text-[2rem] justify-center items-center">
          {/* <h1>{timeLeft.days} days</h1>
          <h1>{timeLeft.hours} hours</h1>
          <h1>{timeLeft.minutes} minutes</h1>
          <h1>{timeLeft.seconds} seconds</h1> */}
          <div className="grid grid-flow-col gap-5 text-center auto-cols-max">
            <div className="flex flex-col">
              <span className="countdown font-mono text-5xl">
                <span style={{"--value":timeLeft.days}as React.CSSProperties}></span>
              </span>
              days
            </div> 
            <div className="flex flex-col">
              <span className="countdown font-mono text-5xl">
                <span style={{"--value":timeLeft.hours}as React.CSSProperties}></span>
              </span>
              hours
            </div> 
            <div className="flex flex-col">
              <span className="countdown font-mono text-5xl">
                <span style={{"--value":timeLeft.minutes}as React.CSSProperties}></span>
              </span>
              min
            </div> 
            <div className="flex flex-col">
              <span className="countdown font-mono text-5xl">
                <span style={{"--value":timeLeft.seconds}as React.CSSProperties}></span>
              </span>
              sec
            </div>
          </div>
          </div>

          
        <div className="p-2 mt-5 flex flex-col items-center text-center font-medium">
        <svg className="w-8 h-8 text-gray-400 dark:text-gray-600 mb-4" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 18 14">
        <path d="M6 0H2a2 2 0 0 0-2 2v4a2 2 0 0 0 2 2h4v1a3 3 0 0 1-3 3H2a1 1 0 0 0 0 2h1a5.006 5.006 0 0 0 5-5V2a2 2 0 0 0-2-2Zm10 0h-4a2 2 0 0 0-2 2v4a2 2 0 0 0 2 2h4v1a3 3 0 0 1-3 3h-1a1 1 0 0 0 0 2h1a5.006 5.006 0 0 0 5-5V2a2 2 0 0 0-2-2Z"/>
    </svg>
        <h1 className="relative max-w-[80%] text-[1.5rem]  ">"{quote}"</h1>
        <div className="flex  w-[80%] font-semibold text-[1.2rem]  justify-center mt-2">
          <h1>- The ATMan STR</h1>
        </div>
        </div>
</div>
)}

     </div>
    );
}