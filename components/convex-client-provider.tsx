// "use client";

// import { ReactNode } from "react";
// import { ConvexReactClient } from "convex/react";
// import { ConvexProviderWithClerk } from "convex/react-clerk";
// import { ClerkProvider, useAuth } from "@clerk/nextjs";

// const convex = new ConvexReactClient(
//   process.env.NEXT_PUBLIC_CONVEX_URL!
// );

// export function ConvexClientProvider({ children }: { children: ReactNode }) {
//   return (
//     <ClerkProvider>
//       <ConvexProviderWithClerk client={convex} useAuth={useAuth}>
//         {children}
//       </ConvexProviderWithClerk>
//     </ClerkProvider>
//   );
// }



// "use client";

// import { ReactNode } from "react";
// import {  ConvexReactClient,Authenticated,Unauthenticated,AuthLoading } from "convex/react";
// import {ConvexProviderWithClerk} from "convex/react-clerk";
// import {ClerkProvider,useAuth,SignIn} from "@clerk/nextjs"

// const convex = new ConvexReactClient(
//   process.env.NEXT_PUBLIC_CONVEX_URL!
// );

// // console.log(process.env.NEXT_PUBLIC_CONVEX_URL);

// export function ConvexClientProvider({ children }: { children: ReactNode }) {
//   return (
//     <ClerkProvider publishableKey={process.env.NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY!}>
//         <ConvexProviderWithClerk 
//         useAuth={useAuth} 
//         client={convex}
//         >
//             <Authenticated>
//               {children}
//              </Authenticated>  
//              <Unauthenticated>
//                 <div className="flex flex-col items-center min-h-screen justify-center ">
//                     <SignIn/>
//                 </div>
//              </Unauthenticated>    
//              <AuthLoading>
//                 <p>Loading auth...</p>
//              </AuthLoading>   

//         </ConvexProviderWithClerk>
//     </ClerkProvider>
//   );
  
// }




// "use client";

// import { ReactNode } from "react";
// import {
//   ConvexReactClient,
//   Authenticated,
//   Unauthenticated,
//   AuthLoading,
// } from "convex/react";
// import { ConvexProviderWithClerk } from "convex/react-clerk";
// import { ClerkProvider, useAuth, SignIn } from "@clerk/nextjs";

// const convex = new ConvexReactClient(
//   process.env.NEXT_PUBLIC_CONVEX_URL!
// );

// export function ConvexClientProvider({
//   children,
// }: {
//   children: ReactNode;
// }) {
//   return (
//     <ClerkProvider publishableKey={process.env.NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY!}>
//       <ConvexProviderWithClerk useAuth={useAuth} client={convex}>
        
//         <Authenticated>
//           {children}
//         </Authenticated>

//         <Unauthenticated>
//           <div className="flex flex-col items-center min-h-screen justify-center">
//             <SignIn />
//           </div>
//         </Unauthenticated>

//         <AuthLoading>
//           <p>Loading auth...</p>
//         </AuthLoading>

//       </ConvexProviderWithClerk>
//     </ClerkProvider>
//   );
// }














"use client";

import { ReactNode } from "react";
import { ConvexReactClient } from "convex/react";
import { ConvexProviderWithClerk } from "convex/react-clerk";
import { ClerkProvider, useAuth } from "@clerk/nextjs";

const convex = new ConvexReactClient(
  process.env.NEXT_PUBLIC_CONVEX_URL!
);

export function ConvexClientProvider({
  children,
}: {
  children: ReactNode;
}) {
  return (
    <ClerkProvider publishableKey={process.env.NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY!}>
      <ConvexProviderWithClerk useAuth={useAuth} client={convex}>
        {children}
      </ConvexProviderWithClerk>
    </ClerkProvider>
  );
}













