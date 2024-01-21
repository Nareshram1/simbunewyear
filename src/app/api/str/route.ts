import { NextResponse } from 'next/server';
import type { NextApiRequest, NextApiResponse } from 'next'

//Crucial Line for Dynamic API Routes
export const dynamic = 'force-dynamic'
 
type ResponseData = {
  quote: string
}




const strQuotes: string[] = [
  "Plants is also a living being if i'm not wrong. Scientifically. Ethuku nee vanthu plants ah vetti koldre? Athuvum living being tha thambi",
  "Athu yen January 31 varumbodhu new year kondaduringa nu kekura matheri iruku",
  "Kudikkadhavan kelu da kelvi",
  "Yenda Ivlo Kelvi Kekuringale Oru Cow athavathu oru maadu kuzhainthai kaga vechu iruka kudiya paal ah antha thaai pasuva katti nalla karanthu paala vangi kudichutu barista layum okkanthu kelvi ah da kekuringa",
  "Enna oru thought process, Enna oru thoora nokku paarvai , Unmaiyila great neengalam",
  "Ennada Veetu Ulla Adikiringa, Anga Adicha Eduthukarom , Inga Adichan Eduthuko , Ennada Veetukulla Adikiringa",
];
 
export async function GET (
  req: any,
  res: NextApiResponse<ResponseData>
  ) {
    const random_item = (items: string | any[]) => items[Math.floor(Math.random() * items.length)];
    setTimeout(() => {}, 5000);
    return(
    NextResponse.json({ quote: random_item(strQuotes) },{status: 200})
  )
}