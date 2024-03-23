import {connectDb} from '@/dbConfig/dbConfig';

import User from '@/models/userModel';
import { NextRequest, NextResponse } from 'next/server';

connectDb()

export async function POST(request: NextRequest, response: NextResponse){
    try {
    const reqBody =  request.json()
    const {username, email, password} = reqBody
    //validation
    console.log(reqBody);

    // user reg

 const user = await User.findOne({email})

 if(user){
    return NextResponse.json({error :'user already exists'}, {status: 400})
 }

        
    } catch (error: any) {
        return NextResponse.json({error: error.messsage}, {status:500});
        
    }

}

