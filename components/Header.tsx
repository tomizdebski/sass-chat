import Link from "next/link"
import { authOptions } from "@/auth"
import {DarkModeToggle} from "./DarkModeToggle"
import Logo from "./Logo"
import UserAvatar from "./UserAvatar"
import UserButton from "./UserButton"
import { getServerSession } from "next-auth"
import {MessagesSquareIcon } from "lucide-react"
import CreateChatButton from "./CreateChatButton"


async function Header() {
    const session = await getServerSession(authOptions);
    console.log(session)
  return (
    <header className='sticky top-0 z-50 bg-white dark:bg-gray-900'>
      <nav className="flex flex-col sm:flex-row items-center p-5 pl-2 bg-white dark:bg-gray-900 max-w-7xl mx-auto">
        <Logo session={session}/>
        <div className="flex-1 flex items-center justify-end space-x-4">
            {session ? (
                <>
                <Link href={'/chat'} prefetch={false}>
                    <MessagesSquareIcon className="text-black dark:text-white" />
                </Link>
                <CreateChatButton />
                </>
            ): (
                <Link href={'/pricing'} prefetch={false}>
                        Pricing
                </Link>  
                 
            )}
            
            <DarkModeToggle />
            <UserButton session={session}/>
            
        </div>
      </nav>
    </header>
  )
}

export default Header;