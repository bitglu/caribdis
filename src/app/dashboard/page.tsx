import { createServerComponentClient } from "@supabase/auth-helpers-nextjs";
import { cookies } from "next/headers";
import AccountForm from "../account/account-form";
import { Breadcrumb } from "antd";
import DashboardPage from "./dashboard";

export default async function Account() {
  const supabase = createServerComponentClient<any>({ cookies });

  const {
    data: { session },
  } = await supabase.auth.getSession();

  return (
    <section>
      <DashboardPage />
    </section>
  );
}
