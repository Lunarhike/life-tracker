import { redirect } from "next/navigation";
import { createBrowserClient } from "@supabase/ssr";
import { createClient } from "@supabase/supabase-js";

export default function Login() {
  const signIn = async () => {
    "use server";

    const supabase = createClient(
      process.env.NEXT_PUBLIC_SUPABASE_URL!,
      process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!
    );

    const { error } = await supabase.auth.signInWithOAuth({
      provider: "google",
    });

    if (error) {
      return redirect("/login?message=Could not authenticate user");
    }

    return redirect("/");
  };

  return (
    <div className="flex-1 flex flex-col w-full px-8 sm:max-w-md justify-center gap-2">
      <form
        className="animate-in flex-1 flex flex-col w-full justify-center gap-2 text-foreground"
        action={signIn}
      >
        <button className="bg-green-700 rounded-md px-4 py-2 text-foreground mb-2">
          Google
        </button>
      </form>
    </div>
  );
}
