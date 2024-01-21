import Timer from "./timer";
export default function Home() {
  const targetDate = new Date('2024-01-31T24:00:00').getTime();
  const serverTime=new Date();
  return (
    <div>
  
    <main className="flex justify-center items-center h-screen">
      
     <Timer targetDate={targetDate} serverTime={serverTime}/>
     {/* <img src="/simbu.png"></img> */}
    </main>
    </div>
  );
}
