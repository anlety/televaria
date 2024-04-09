import Image from "next/image"
import Link from "next/link"
import MobileNav from "./MobileNav"
import { SignIn, SignInButton, SignedIn, SignedOut, UserProfile } from "@clerk/nextjs"
import { UserButton } from "@clerk/nextjs/app-beta"


const Navbar = () => {
  return (
    <nav className='flex flex-between fixed z-50 w-full bg-dark-1 px-6 py-4 lg:px-10'>
      <Link href='/' className="flex items-center gap-1">
        <Image src="/icons/logo.svg" width={32} height={32} alt="logo" className='max-sm:size-10'/>
        <p className="text-[26px] font-extrabold text-black max-sm:hidden">Televaria</p>
      </Link>
      <div className="flex-between gap-5">
        {/* Clerk */}
        
       <SignedIn>
          <UserButton />
         {/* <UserProfile />  */}
       </SignedIn>
        {/* <SignedOut>
          <SignInButton />
        </SignedOut>   */}
        
        <MobileNav />
      </div>
    </nav>
  )
}

export default Navbar