import type { NextApiRequest, NextApiResponse } from 'next'
import { NextResponse } from 'next/server'
 
type ResponseData = {
  message: string
}
 
export async function GET(
  req: any,
  res: NextApiResponse<ResponseData>
) {
  return(

    NextResponse.json({ message: 'Hello from Next.js!' },{status: 200})
  )
}