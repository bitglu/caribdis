import AccountForm from "@/app/account/account-form";
import { createServerComponentClient } from "@supabase/auth-helpers-nextjs";
import { cookies } from "next/headers";

export default async function Account() {
  const supabase = createServerComponentClient<any>({ cookies });

  const {
    data: { session },
  } = await supabase.auth.getSession();

  

  return (
    <>
    <AccountForm session={session} /> 
    <div>hola</div>

    </>
  );
}
