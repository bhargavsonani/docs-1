// import Link from "next/link";
// import Image from "next/image";
// import { SearchInput } from "./search-input";
// import { UserButton } from "@clerk/nextjs";

// export const Navbar = () => {
//   return (
//     <nav className="flex items-center justify-between h-full w-full">
      
//       <div className="flex gap-3 items-center shrink-0 pr-6">
        
//         {/* Logo */}
//         <Link href="/">
//           <Image
//             src="/logo.svg"   
//             alt="Logo"
//             width={36}
//             height={36}
//             priority
//           />
//         </Link>

//         {/* Title */}
//         <h3 className="text-xl">Docs</h3>

//       </div>

//       <SearchInput/>
//       <UserButton/>

//     </nav>
//   );
// };


// import Link from "next/link";
// import Image from "next/image";
// import { SearchInput } from "./search-input";
// import { UserButton } from "@clerk/nextjs";

// export const Navbar = () => {
//   return (
//     <nav className="flex items-center justify-between h-full w-full">
      
//       <div className="flex gap-3 items-center shrink-0 pr-6">
//         <Link href="/">
//           <Image
//             src="/logo.svg"
//             alt="Logo"
//             width={36}
//             height={36}
//             priority
//           />
//         </Link>

//         <h3 className="text-xl">Docs</h3>
//       </div>

//       <SearchInput />
      
//       <UserButton />
//     </nav>
//   );
// };

"use client";

import Link from "next/link";
import Image from "next/image";
import { SearchInput } from "./search-input";
import { UserButton, useUser } from "@clerk/nextjs";
import { Button } from "@/components/ui/button";

export const Navbar = () => {
  const { isSignedIn, isLoaded } = useUser();

  // Prevent hydration mismatch
  if (!isLoaded) {
    return null;
  }

  return (
    <nav className="flex items-center justify-between h-full w-full">
      <div className="flex gap-3 items-center shrink-0 pr-6">
        <Link href="/">
          <Image
            src="/logo.svg"
            alt="Logo"
            width={36}
            height={36}
            priority
          />
        </Link>

        <h3 className="text-xl">Docs</h3>
      </div>

      <SearchInput />

      {isSignedIn ? (
        <UserButton afterSignOutUrl="/sign-in" />
      ) : (
        <Link href="/sign-in">
          <Button>Sign In</Button>
        </Link>
      )}
    </nav>
  );
};