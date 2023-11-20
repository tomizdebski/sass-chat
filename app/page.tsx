import { authOptions } from "@/auth";
import { getServerSession } from "next-auth";
import Image from "next/image";
import Link from "next/link";

export default async function Home() {
  const session = await getServerSession(authOptions);
  console.log('session',session?.user.id);
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <div className="relative isolate pt-14 dark:bg-gray-900">
        <div
          className="absolute inset-x-0 top-28 -z-10 transform-gpu overflow-hidden blur-3xl"
          aria-hidden="true"
        >
          <div
            className="relative left-[calc(50%-11rem)] top-[-2rem] w-[calc(100vw+2rem)] h-[calc(100vw+2rem)] bg-gradient-to-br from-[#f9a8d4] to-[#9089fc] rounded-[50%])]"
            style={{
              clipPath:
                "polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 0 80%, 32% 72.5%, 60% 62%, 52% 68%)",
            }}
          />
        </div>
        <Link
          href="/pricing"
          className="mt-8 rounded-md bg-indigo-600 px-3.5 py-2 text-center text-sm font-semibold 
                leading-6 text-white shadow-sm hover:bg-indigo-500 focus-visible:outline 
                focus-visible:outline-2 focus-visible:outline-indigo-600 cursor-pointer disabled:opacity-80"
        >
          View Pricing
        </Link>
      </div>
    </main>
  );
}
