import { NextResponse } from 'next/server';
import type { NextApiRequest, NextApiResponse } from 'next'

//Crucial Line for Dynamic API Routes
export const dynamic = 'force-dynamic'
 
type ResponseData = {
  quoteObject: string
}




const strQuotes: Object[] = [
  {quote:"Plants is also a living being if i'm not wrong. Scientifically. Ethuku nee vanthu plants ah vetti koldre? Athuvum living being tha thambi",index:"0"},
  {quote:"Athu yen January 31 varumbodhu new year kondaduringa nu kekura matheri iruku",index:"1"},
  {quote:"Kudikkadhavan kelu da kelvi",index:"2"},
  {quote:"Yenda Ivlo Kelvi Kekuringale Oru Cow athavathu oru maadu kuzhainthai kaga vechu iruka kudiya paal ah antha thaai pasuva katti nalla karanthu paala vangi kudichutu barista layum okkanthu kelvi ah da kekuringa",index:"3"},
  {quote:"Enna oru thought process, Enna oru thoora nokku paarvai , Unmaiyila great neengalam",index:"4"},
  {quote:"Ennada Veetu Ulla Adikiringa, Anga Adicha Eduthukarom , Inga Adichan Eduthuko , Ennada Veetukulla Adikiringa",index:"5"},
];
 
export async function GET (
  req: any,
  res: NextApiResponse<ResponseData>
  ) {
    const random_item = (items: string | any[]) => items[Math.floor(Math.random() * items.length)];
    setTimeout(() => {},4869);
    return(
    NextResponse.json({ quoteObject: random_item(strQuotes) },{status: 200})
  )
}