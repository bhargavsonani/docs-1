
// export default {
//   providers: [
//     {
     
//       domain: "https://daring-beetle-86.clerk.accounts.dev",
//       applicationID: "convex",
//     },
//   ]
// } ;


import { AuthConfig } from "convex/server";

export default {
  providers: [
    {
     
      domain: "https://daring-beetle-86.clerk.accounts.dev",
      applicationID: "convex",
    },
  ]
} satisfies AuthConfig;
