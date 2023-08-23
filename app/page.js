"use client";

import Image from "next/image";
import Link from "next/link";
import { useState, useEffect } from "react";
import { doc, setDoc } from "firebase/firestore";

import {
   onAuthStateChanged,
   signOut,
   GoogleAuthProvider,
   signInWithRedirect,
} from "firebase/auth";
import { collection, addDoc } from "firebase/firestore";
import { auth, providerG, db } from "@/firebaseconfig";

export default function Home() {
   const [userData, setUserData] = useState(null);

   useEffect(() => {
      onAuthStateChanged(auth, (user) => {
         if (user) {
            setUserData(user.providerData[0]);

            console.log(
               "🚀 ~ file: page.js:24 ~ onAuthStateChanged ~ user:",
               user.providerData[0]
            );
            // ...
         } else {
            // User is signed out
            // ...
         }
      });
   }, []);

   const logOut = async () => {
      await signOut(auth)
         .then(() => {
            console.log("Logged out");
         })
         .catch((error) => {
            // An error happened.
         });
   };

   const sendData = async () => {
      try {
         if (userData) {
            await setDoc(doc(db, "user", userData.uid), {
               userName: "Jason",
               name: "Los Angeles",
               state: "CA",
               country: "USA",
            });
            console.log(
               "🚀 ~ file: page.js:56 ~ awaitsetDoc ~ userData.uid:",
               userData.uid
            );
         }
      } catch (e) {
         console.error("Error adding document: ", e);
      }
   };

   return (
      <main className="flex min-h-screen flex-col items-center justify-between p-24">
         <div className="z-10 max-w-5xl w-full items-center justify-between font-mono text-sm lg:flex">
            <p className="fixed left-0 top-0 flex w-full justify-center border-b border-gray-300 bg-gradient-to-b from-zinc-200 pb-6 pt-8 backdrop-blur-2xl dark:border-neutral-800 dark:bg-zinc-800/30 dark:from-inherit lg:static lg:w-auto  lg:rounded-xl lg:border lg:bg-gray-200 lg:p-4 lg:dark:bg-zinc-800/30">
               Jason Has Changed this Here!!!&nbsp;
               <code className="font-mono font-bold">app/page.js</code>
            </p>
            <div className="fixed bottom-0 left-0 flex h-48 w-full items-end justify-center bg-gradient-to-t from-white via-white dark:from-black dark:via-black lg:static lg:h-auto lg:w-auto lg:bg-none">
               <a
                  className="pointer-events-none flex place-items-center gap-2 p-8 lg:pointer-events-auto lg:p-0"
                  href="https://vercel.com?utm_source=create-next-app&utm_medium=appdir-template&utm_campaign=create-next-app"
                  target="_blank"
                  rel="noopener noreferrer"
               >
                  By{" "}
                  <Image
                     src="/vercel.svg"
                     alt="Vercel Logo"
                     className="dark:invert"
                     width={100}
                     height={24}
                     priority
                  />
               </a>
            </div>
         </div>
         <Link href="/login">
            <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
               Sign In
            </button>
         </Link>

         <div className="relative flex place-items-center before:absolute before:h-[300px] before:w-[480px] before:-translate-x-1/2 before:rounded-full before:bg-gradient-radial before:from-white before:to-transparent before:blur-2xl before:content-[''] after:absolute after:-z-20 after:h-[180px] after:w-[240px] after:translate-x-1/3 after:bg-gradient-conic after:from-sky-200 after:via-blue-200 after:blur-2xl after:content-[''] before:dark:bg-gradient-to-br before:dark:from-transparent before:dark:to-blue-700 before:dark:opacity-10 after:dark:from-sky-900 after:dark:via-[#0141ff] after:dark:opacity-40 before:lg:h-[360px] z-[-1]">
            <Image
               className="relative dark:drop-shadow-[0_0_0.3rem_#ffffff70] dark:invert"
               src="/next.svg"
               alt="Next.js Logo"
               width={180}
               height={37}
               priority
            />
         </div>

         {!userData ? (
            ""
         ) : (
            <button
               onClick={logOut}
               className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
            >
               Logout
            </button>
         )}
         {!userData ? (
            ""
         ) : (
            <button
               onClick={sendData}
               className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
            >
               Send Data
            </button>
         )}

         <div className="mb-32 grid text-center lg:max-w-5xl lg:w-full lg:mb-0 lg:grid-cols-4 lg:text-left">
            <a
               href="https://nextjs.org/docs?utm_source=create-next-app&utm_medium=appdir-template&utm_campaign=create-next-app"
               className="group rounded-lg border border-transparent px-5 py-4 transition-colors hover:border-gray-300 hover:bg-gray-100 hover:dark:border-neutral-700 hover:dark:bg-neutral-800/30"
               target="_blank"
               rel="noopener noreferrer"
            >
               <h2 className={`mb-3 text-2xl font-semibold`}>
                  Docs{" "}
                  <span className="inline-block transition-transform group-hover:translate-x-1 motion-reduce:transform-none">
                     -&gt;
                  </span>
               </h2>
               <p className={`m-0 max-w-[30ch] text-sm opacity-50`}>
                  Find in-depth information about Next.js features and API.
               </p>
            </a>

            <a
               href="https://nextjs.org/learn?utm_source=create-next-app&utm_medium=appdir-template-tw&utm_campaign=create-next-app"
               className="group rounded-lg border border-transparent px-5 py-4 transition-colors hover:border-gray-300 hover:bg-gray-100 hover:dark:border-neutral-700 hover:dark:bg-neutral-800 hover:dark:bg-opacity-30"
               target="_blank"
               rel="noopener noreferrer"
            >
               <h2 className={`mb-3 text-2xl font-semibold`}>
                  Learn{" "}
                  <span className="inline-block transition-transform group-hover:translate-x-1 motion-reduce:transform-none">
                     -&gt;
                  </span>
               </h2>
               <p className={`m-0 max-w-[30ch] text-sm opacity-50`}>
                  Learn about Next.js in an interactive course
                  with&nbsp;quizzes!
               </p>
            </a>

            <a
               href="https://vercel.com/templates?framework=next.js&utm_source=create-next-app&utm_medium=appdir-template&utm_campaign=create-next-app"
               className="group rounded-lg border border-transparent px-5 py-4 transition-colors hover:border-gray-300 hover:bg-gray-100 hover:dark:border-neutral-700 hover:dark:bg-neutral-800/30"
               target="_blank"
               rel="noopener noreferrer"
            >
               <h2 className={`mb-3 text-2xl font-semibold`}>
                  Templates{" "}
                  <span className="inline-block transition-transform group-hover:translate-x-1 motion-reduce:transform-none">
                     -&gt;
                  </span>
               </h2>
               <p className={`m-0 max-w-[30ch] text-sm opacity-50`}>
                  Explore the Next.js 13 playground.
               </p>
            </a>

            <a
               href="https://vercel.com/new?utm_source=create-next-app&utm_medium=appdir-template&utm_campaign=create-next-app"
               className="group rounded-lg border border-transparent px-5 py-4 transition-colors hover:border-gray-300 hover:bg-gray-100 hover:dark:border-neutral-700 hover:dark:bg-neutral-800/30"
               target="_blank"
               rel="noopener noreferrer"
            >
               <h2 className={`mb-3 text-2xl font-semibold`}>
                  Deploy{" "}
                  <span className="inline-block transition-transform group-hover:translate-x-1 motion-reduce:transform-none">
                     -&gt;
                  </span>
               </h2>
               <p className={`m-0 max-w-[30ch] text-sm opacity-50`}>
                  Instantly deploy your Next.js site to a shareable URL with
                  Vercel.
               </p>
            </a>
         </div>
      </main>
   );
}
