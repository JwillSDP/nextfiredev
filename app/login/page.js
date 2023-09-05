"use client";
import Image from "next/image";
import { useRouter } from "next/navigation";
import { useState, useEffect } from "react";
import {
   signInWithEmailAndPassword,
   signInWithRedirect,
   getRedirectResult,
} from "firebase/auth";
import { auth, providerG } from "@/firebase/firebaseconfig";

export default function Login() {
   const [userEmail, setUserEmail] = useState("");
   const [userPassword, setuserPassword] = useState("");
   const router = useRouter();

   const signInGoogle = async () => {
      await signInWithRedirect(auth, providerG);
      router.push("/");
   };

   const signInForm = async (email, password) => {
      await signInWithEmailAndPassword(auth, email, password)
         .then((userCredential) => {
            // Signed in
            const user = userCredential.user;
            // ...
         })
         .catch((error) => {
            const errorCode = error.code;
            const errorMessage = error.message;
         });
      window.location.replace("/");
   };

   return (
      <div className="flex flex-col items-center md:flex-row md:h-screen">
         <div className="flex items-center justify-center w-full md:w-1/2">
            <Image
               src="https://upload.wikimedia.org/wikipedia/commons/d/d8/Person_icon_BLACK-01.svg"
               alt="Login Image"
               width={800}
               height={600}
            />
         </div>
         <div className="flex flex-col items-center justify-center w-full md:w-1/4">
            <div className="w-full max-w-md space-y-8">
               <div>
                  <h1 className="text-2xl font-bold">Welcome back!</h1>
                  <p className="mt-2 text-gray-600">
                     Please sign in to your account.
                  </p>
               </div>
               <form className="mt-8 space-y-6">
                  <div>
                     <label
                        htmlFor="email"
                        className="block font-bold text-gray-700"
                     >
                        Email address
                     </label>
                     <input
                        id="email"
                        type="email"
                        placeholder="Enter your email"
                        className="w-full px-4 py-3 mt-1 border-gray-300 rounded-md focus:border-indigo-500 focus:ring focus:ring-indigo-200"
                        required
                     />
                  </div>
                  <div>
                     <label
                        htmlFor="password"
                        className="block font-bold text-gray-700"
                     >
                        Password
                     </label>
                     <input
                        id="password"
                        type="password"
                        placeholder="Enter your password"
                        className="w-full px-4 py-3 mt-1 border-gray-300 rounded-md focus:border-indigo-500 focus:ring focus:ring-indigo-200"
                        required
                     />
                  </div>
                  <div>
                     <button
                        type="submit"
                        className="w-full px-4 py-3 font-bold text-white bg-indigo-500 rounded-md hover:bg-indigo-600 focus:outline-none focus:shadow-outline-indigo focus:border-indigo-700"
                     >
                        Sign In
                     </button>
                     <button
                        onClick={signInGoogle}
                        className="w-full mt-5 px-4 py-3 font-bold text-white bg-indigo-500 rounded-md hover:bg-indigo-600 focus:outline-none focus:shadow-outline-indigo focus:border-indigo-700"
                     >
                        Google Sign-In
                     </button>
                  </div>
               </form>
            </div>
         </div>
      </div>
   );
}
