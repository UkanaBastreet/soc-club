import { Inter } from "next/font/google";
import Link from "next/link";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <>
      <header>
        <Link href={"/login"}>Sign In</Link>
        <Link href={"/register"}>Sign Up</Link>
      </header>
      <main>Hello</main>
    </>
  );
}
