'use server'
import { error } from "console";
import { db } from "./db";
import { redirect } from "next/navigation";

export const FormSubmit = async(formdata: FormData) => {
    const name = formdata.get('name') as string;
    const interest = formdata.get('interest') as string;
    try {
        const data = await db.student.create({
            data: {
                name: name,
                interest: interest || 'something'
            }
        })
        // console.log(data)
        return data
    } catch (error) {
        console.log(error)
        
    }
}

export const fetchGuests = async() => {
    try {
        const profiles = await db.profile.findMany({
            where:{
                roletag: 'GUEST'
            }
        })

        // console.log(profiles)
    } catch (error) {
        console.log(error)
    }
    
}