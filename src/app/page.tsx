import Timer from "./timer";

export default function Home() {
  const targetDate = new Date('2024-01-20T23:59:59').getTime();
  const serverTime=new Date();
  // console.log(typeof(serverTime))
  // console.log(serverTime)
  return (
    <main className="flex justify-center items-center h-screen">
     <Timer targetDate={targetDate} serverTime={serverTime}/>
    </main>
  );
}
