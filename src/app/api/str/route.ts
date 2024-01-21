import { NextResponse } from 'next/server';
import type { NextApiRequest, NextApiResponse } from 'next'

//Crucial Line for Dynamic API Routes
export const dynamic = 'force-dynamic'
 
type ResponseData = {
  quoteObject: string
}




const strQuotes: Object[] = [
  {quote:"Plants is also a living being if i'm not wrong. Scientifically. Ethuku nee vanthu plants ah vetti koldre? Athuvum living being tha thambi",audio:"https://videsaurvidssea.s3.ap-southeast-1.amazonaws.com/videos/uIvo4XGMQI8lnfoTJhdAgot8EkFQd9Pxf4JcmCKU.mp4",index:"0"},
  {quote:"Athu yen January 31 varumbodhu new year kondaduringa nu kekura matheri iruku",audio:"https://videsaurvidssea.s3.ap-southeast-1.amazonaws.com/videos/Kgqf94hxNqIvILeDtemS7iiSteWRYCKN5Ec6iGEf.mp4",index:"1"},
  {quote:"Kudikkadhavan kelu da kelvi",audio:"https://videsaurvidssea.s3.ap-southeast-1.amazonaws.com/videos/sFoFRreEtJGTIq7SKIijMpLtZ3AJmfoHRbVEsAWy.mp4",index:"2"},
  {quote:"Yenda Ivlo Kelvi Kekuringale Oru Cow athavathu oru maadu kuzhainthai kaga vechu iruka kudiya paal ah antha thaai pasuva katti nalla karanthu paala vangi kudichutu barista layum okkanthu kelvi ah da kekuringa",audio:"https://videsaurvidssea.s3.ap-southeast-1.amazonaws.com/videos/EwgAFCkFsYhwlEpAhZdUau3MOTGohACVvcHgzX46.mp4",index:"3"},
  {quote:"Enna oru thought process, Enna oru thoora nokku paarvai , Unmaiyila great neengalam",audio:"https://videsaurvidssea.s3.ap-southeast-1.amazonaws.com/videos/3ZXLHGq2DcCvCLUdiPvJV0fOgBUP7mfMmXg3TAG8.mp4",index:"4"},
  {quote:"Ennada Veetu Ulla Adikiringa, Anga Adicha Eduthukarom , Inga Adichan Eduthuko , Ennada Veetukulla Adikiringa",audio:"https://videsaurvidssea.s3.ap-southeast-1.amazonaws.com/videos/ppzaelu0PNpfysoy7Dz5BBlPOC8voD9XRaIBUMmv.mp4",index:"5"},
];
 
export async function GET (
  req: any,
  res: NextApiResponse<ResponseData>
  ) {
    const random_item = (items: string | any[]) => items[Math.floor(Math.random() * items.length)];
    setTimeout(() => {}, 5000);
    return(
    NextResponse.json({ quoteObject: random_item(strQuotes) },{status: 200})
  )
}