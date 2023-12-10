import Form from "@/components/form";
import Link from "next/link";

export default function Home() {

  return (
    <main className="flex h-screen gap-8 justify-center items-center">
      <Link href='/register' className="py-3 px-4 border rounded-md hover:bg-neutral-800 shadow-sm shadow-neutral-800">
        Register
      </Link>
      <Link href='/dashboard' className="py-3 px-4 border rounded-md hover:bg-neutral-800 shadow-sm shadow-neutral-800">
        Dashboard
      </Link>
    </main>
  )
}
