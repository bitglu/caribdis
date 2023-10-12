'use server'
import { Database } from "@/supabase/models/supabase";
import { createServerActionClient } from "@supabase/auth-helpers-nextjs";
import { cookies } from "next/headers";
import { revalidatePath } from 'next/cache'

export const addCompany = async ( values: any) => {
    console.log(values);
    if(values === null) return 
    const supabase = createServerActionClient<Database>({ cookies })
    await supabase.from('companies').insert(values)
    revalidatePath(`/?hola=${values.toString()}`)
}