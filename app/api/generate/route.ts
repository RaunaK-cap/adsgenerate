import { NextRequest, NextResponse } from "next/server";
import { auth } from "../../../lib/auth"; // path to your Better Auth server instance
import { headers } from "next/headers";
import { z} from "zod"



export async function POST(req:NextRequest){
        
        const body = await req.json()
        
        const session = await auth.api.getSession({
            headers: await headers() // you need to pass the headers object.
        })

        if(!session?.user){
            return NextResponse.json({
                message:"unauthorized"
            })
        }
        
        const generateshema = z.object({
            prompt:z.string().min(2),
            image: z.string().min(2),
            type:z.string().min(2)

        })
        
        const verifiedbody = generateshema.safeParse(body)
        if(!verifiedbody.success){
            return NextResponse.json({
                message:"enter correct data "
            })
        }

        


}