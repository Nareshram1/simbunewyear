import Timer from "./timer";
import Head from "next/head";
export default function Home() {
  const targetDate = new Date('2024-01-31T24:00:00').getTime();
  const serverTime=new Date();
  // console.log(typeof(serverTime))
  // console.log(serverTime)
  return (
    <div>
   
   <Head>
  <title>STRrr</title>
  <link rel="icon" href="/simbulogo.ico" /> 
  </Head>
    <main className="flex justify-center items-center h-screen">
      
     <Timer targetDate={targetDate} serverTime={serverTime}/>
     {/* <img src="/simbu.png"></img> */}
    </main>
    </div>
  );
}
