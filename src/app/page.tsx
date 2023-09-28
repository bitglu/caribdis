import Image from "next/image";
import styles from "./page.module.css";
import { cookies } from "next/headers";
import { createServerComponentClient } from "@supabase/auth-helpers-nextjs";
import AuthFormComponent from "@/components/supabase/AuthFormComponent";

export default async function Home() {
  const supabase = createServerComponentClient<any>({ cookies });

  const {
    data: { session },
  } = await supabase.auth.getSession();

  return (
    <main className={styles.main}>
      <div className={styles.center}>
        <Image
          className={styles.logo}
          src="/next.svg"
          alt="Next.js Logo"
          width={180}
          height={37}
          priority
        />
      </div>
      <div style={{ width: "30%" }}>
        <AuthFormComponent />
      </div>
    </main>
  );
}
