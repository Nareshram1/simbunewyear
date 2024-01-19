import Timer from "./timer";

export default function Home() {
  const targetDate = new Date('2024-02-01T00:00:00').getTime();
  const serverTime=new Date();
  // console.log(typeof(serverTime))
  // console.log(serverTime)
  return (
    <main className="flex justify-center items-center h-screen">
      
     <Timer targetDate={targetDate} serverTime={serverTime}/>
    </main>
  );
}
