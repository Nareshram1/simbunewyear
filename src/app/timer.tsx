'use client'
import axios from "axios";
import Image from "next/image";
import { useState, useEffect, useRef ,useMemo} from "react";
import Confetti from 'react-confetti';

type Props = {
  targetDate: number;
  serverTime: Date;
};

const Timer = ({ targetDate, serverTime }: Props) => {

  const [st, setSt] = useState<Date>(serverTime);
  
  const calculateTimeLeft = useMemo(() => {
    return () => {
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
    };
  }, [targetDate, st]);
  
  const [timeLeft, setTimeLeft] = useState(calculateTimeLeft());
  const endRef = useRef<boolean>(false);
  const [quote, setQuote] = useState<string>("");
  const [isLoading, setLoading] = useState<boolean>(true);

  const getQuote = async () => {
    try {
      const { data }: any = await axios("/api/str");
      setQuote(data.quoteObject.quote);
      let plants = new Audio('/' + data.quoteObject.index + '.mp3');
      setLoading(false);
      await plants.play();
    } catch (err) {
      console.log(err);
    }
  };

  useEffect(() => {
    setLoading(true);
    getQuote();
  }, []);

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft(calculateTimeLeft());
      setSt(new Date());
      if (timeLeft.days === 0 && timeLeft.hours === 0 && timeLeft.minutes === 0 && timeLeft.seconds === 0) {
        endRef.current = true;
      }
    }, 1000);

    return () => clearInterval(timer);
  }, [timeLeft]);



  const width: number = 1920;
  const height: number = 1920;

  return (
    <div>
      {isLoading ? (
        <div className="animate-bounce mt-10">
          <Image src="/str.gif" width={300} height={300} alt="loader" />
        </div>
      ) : (
        <div className="flex flex-col w-[100%] md:gap-4 justify-center items-center">
          {endRef.current && <Confetti width={width} height={height} />}
          <h1 className="font-semibold md:text-[5rem] text-2xl mb-5">Simbu New Year</h1>
          
          {!endRef.current && (
            <div className="flex gap-4 md:text-[2rem] justify-center items-center">
              <div className="grid grid-flow-col gap-5 text-center auto-cols-max">
                <CountdownItem value={timeLeft.days} unit="days" />
                <CountdownItem value={timeLeft.hours} unit="hours" />
                <CountdownItem value={timeLeft.minutes} unit="min" />
                <CountdownItem value={timeLeft.seconds} unit="sec" />
              </div>
            </div>
          )}

          <div className="p-2 mt-5 flex flex-col items-center text-center font-medium">
            <svg className="w-8 h-8 text-gray-400 dark:text-gray-600 mb-4" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 18 14">
              <path d="M6 0H2a2 2 0 0 0-2 2v4a2 2 0 0 0 2 2h4v1a3 3 0 0 1-3 3H2a1 1 0 0 0 0 2h1a5.006 5.006 0 0 0 5-5V2a2 2 0 0 0-2-2Zm10 0h-4a2 2 0 0 0-2 2v4a2 2 0 0 0 2 2h4v1a3 3 0 0 1-3 3h-1a1 1 0 0 0 0 2h1a5.006 5.006 0 0 0 5-5V2a2 2 0 0 0-2-2Z"/>
            </svg>
            <h1 className="relative max-w-[80%] text-[1.5rem]">"{quote}"</h1>
            <div className="flex w-[80%] font-semibold text-[1.2rem] justify-center mt-2">
              <h1>- The ATMan STR</h1>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

const CountdownItem = ({ value, unit }: { value: number; unit: string }) => (
  <div className="flex flex-col">
    <span className="countdown font-mono text-5xl">
      <span style={{ "--value": value } as React.CSSProperties}></span>
    </span>
    {unit}
  </div>
);

export default Timer;
