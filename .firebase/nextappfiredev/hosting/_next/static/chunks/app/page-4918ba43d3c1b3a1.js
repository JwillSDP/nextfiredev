(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[931],{4550:function(e,r,t){Promise.resolve().then(t.bind(t,7151))},7151:function(e,r,t){"use strict";t.r(r),t.d(r,{default:function(){return m}});var a=t(7437),n=t(6691),o=t.n(n),s=t(1396),l=t.n(s),i=t(2265),c=t(4086),d=t(3085),p=t(2716);function m(){let[e,r]=(0,i.useState)(null);(0,i.useEffect)(()=>{(0,d.Aj)(p.I8,e=>{e&&(r(e.providerData[0]),console.log("\uD83D\uDE80 ~ file: page.js:24 ~ onAuthStateChanged ~ user:",e.providerData[0]))})},[]);let t=async()=>{await (0,d.w7)(p.I8).then(()=>{console.log("Logged out")}).catch(e=>{})},n=async()=>{try{e&&(await (0,c.pl)((0,c.JU)(p.db,"user",e.uid),{userName:"Jason",name:"Los Angeles",state:"CA",country:"USA"}),console.log("\uD83D\uDE80 ~ file: page.js:56 ~ awaitsetDoc ~ userData.uid:",e.uid))}catch(e){console.error("Error adding document: ",e)}};return(0,a.jsxs)("main",{className:"flex min-h-screen flex-col items-center justify-between p-24",children:[(0,a.jsxs)("div",{className:"z-10 max-w-5xl w-full items-center justify-between font-mono text-sm lg:flex",children:[(0,a.jsxs)("p",{className:"fixed left-0 top-0 flex w-full justify-center border-b border-gray-300 bg-gradient-to-b from-zinc-200 pb-6 pt-8 backdrop-blur-2xl dark:border-neutral-800 dark:bg-zinc-800/30 dark:from-inherit lg:static lg:w-auto  lg:rounded-xl lg:border lg:bg-gray-200 lg:p-4 lg:dark:bg-zinc-800/30",children:[e?(0,a.jsx)("div",{children:e.displayName}):"Please Login","\xa0"]}),(0,a.jsx)("div",{className:"fixed bottom-0 left-0 flex h-48 w-full items-end justify-center bg-gradient-to-t from-white via-white dark:from-black dark:via-black lg:static lg:h-auto lg:w-auto lg:bg-none",children:(0,a.jsxs)("a",{className:"pointer-events-none flex place-items-center gap-2 p-8 lg:pointer-events-auto lg:p-0",href:"https://vercel.com?utm_source=create-next-app&utm_medium=appdir-template&utm_campaign=create-next-app",target:"_blank",rel:"noopener noreferrer",children:["By"," ",(0,a.jsx)(o(),{src:"/vercel.svg",alt:"Vercel Logo",className:"dark:invert",width:100,height:24,priority:!0})]})})]}),(0,a.jsx)(l(),{href:"/login",children:(0,a.jsx)("button",{className:"bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded",children:"Sign In"})}),(0,a.jsx)("div",{className:"relative flex place-items-center before:absolute before:h-[300px] before:w-[480px] before:-translate-x-1/2 before:rounded-full before:bg-gradient-radial before:from-white before:to-transparent before:blur-2xl before:content-[''] after:absolute after:-z-20 after:h-[180px] after:w-[240px] after:translate-x-1/3 after:bg-gradient-conic after:from-sky-200 after:via-blue-200 after:blur-2xl after:content-[''] before:dark:bg-gradient-to-br before:dark:from-transparent before:dark:to-blue-700 before:dark:opacity-10 after:dark:from-sky-900 after:dark:via-[#0141ff] after:dark:opacity-40 before:lg:h-[360px] z-[-1]",children:(0,a.jsx)(o(),{className:"relative dark:drop-shadow-[0_0_0.3rem_#ffffff70] dark:invert",src:"/next.svg",alt:"Next.js Logo",width:180,height:37,priority:!0})}),e?(0,a.jsx)("button",{onClick:t,className:"bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded",children:"Logout"}):"",e?(0,a.jsx)("button",{onClick:n,className:"bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded",children:"Send Data"}):"",(0,a.jsxs)("div",{className:"mb-32 grid text-center lg:max-w-5xl lg:w-full lg:mb-0 lg:grid-cols-4 lg:text-left",children:[(0,a.jsxs)("a",{href:"https://nextjs.org/docs?utm_source=create-next-app&utm_medium=appdir-template&utm_campaign=create-next-app",className:"group rounded-lg border border-transparent px-5 py-4 transition-colors hover:border-gray-300 hover:bg-gray-100 hover:dark:border-neutral-700 hover:dark:bg-neutral-800/30",target:"_blank",rel:"noopener noreferrer",children:[(0,a.jsxs)("h2",{className:"mb-3 text-2xl font-semibold",children:["Docs"," ",(0,a.jsx)("span",{className:"inline-block transition-transform group-hover:translate-x-1 motion-reduce:transform-none",children:"->"})]}),(0,a.jsx)("p",{className:"m-0 max-w-[30ch] text-sm opacity-50",children:"Find in-depth information about Next.js features and API."})]}),(0,a.jsxs)("a",{href:"https://nextjs.org/learn?utm_source=create-next-app&utm_medium=appdir-template-tw&utm_campaign=create-next-app",className:"group rounded-lg border border-transparent px-5 py-4 transition-colors hover:border-gray-300 hover:bg-gray-100 hover:dark:border-neutral-700 hover:dark:bg-neutral-800 hover:dark:bg-opacity-30",target:"_blank",rel:"noopener noreferrer",children:[(0,a.jsxs)("h2",{className:"mb-3 text-2xl font-semibold",children:["Learn"," ",(0,a.jsx)("span",{className:"inline-block transition-transform group-hover:translate-x-1 motion-reduce:transform-none",children:"->"})]}),(0,a.jsx)("p",{className:"m-0 max-w-[30ch] text-sm opacity-50",children:"Learn about Next.js in an interactive course with\xa0quizzes!"})]}),(0,a.jsxs)("a",{href:"https://vercel.com/templates?framework=next.js&utm_source=create-next-app&utm_medium=appdir-template&utm_campaign=create-next-app",className:"group rounded-lg border border-transparent px-5 py-4 transition-colors hover:border-gray-300 hover:bg-gray-100 hover:dark:border-neutral-700 hover:dark:bg-neutral-800/30",target:"_blank",rel:"noopener noreferrer",children:[(0,a.jsxs)("h2",{className:"mb-3 text-2xl font-semibold",children:["Templates"," ",(0,a.jsx)("span",{className:"inline-block transition-transform group-hover:translate-x-1 motion-reduce:transform-none",children:"->"})]}),(0,a.jsx)("p",{className:"m-0 max-w-[30ch] text-sm opacity-50",children:"Explore the Next.js 13 playground."})]}),(0,a.jsxs)("a",{href:"https://vercel.com/new?utm_source=create-next-app&utm_medium=appdir-template&utm_campaign=create-next-app",className:"group rounded-lg border border-transparent px-5 py-4 transition-colors hover:border-gray-300 hover:bg-gray-100 hover:dark:border-neutral-700 hover:dark:bg-neutral-800/30",target:"_blank",rel:"noopener noreferrer",children:[(0,a.jsxs)("h2",{className:"mb-3 text-2xl font-semibold",children:["Deploy"," ",(0,a.jsx)("span",{className:"inline-block transition-transform group-hover:translate-x-1 motion-reduce:transform-none",children:"->"})]}),(0,a.jsx)("p",{className:"m-0 max-w-[30ch] text-sm opacity-50",children:"Instantly deploy your Next.js site to a shareable URL with Vercel."})]})]})]})}},2716:function(e,r,t){"use strict";t.d(r,{I8:function(){return d},bb:function(){return i},db:function(){return c}});var a=t(994),n=t(3085),o=t(4086),s=t(9584);let l=(0,a.ZF)({apiKey:"AIzaSyBFgNJfyAZFYP5F-gjpDnnRCUP6kuD8cRc",authDomain:"nextappfiredev.firebaseapp.com",projectId:"nextappfiredev",storageBucket:"nextappfiredev.appspot.com",messagingSenderId:"G-L6XGK1KMF6",appId:"1:603005541353:web:ceceba369b13fe3df80978",measurementId:"G-L6XGK1KMF6"}),i=new n.hJ,c=(0,o.ad)(l),d=(0,n.v0)(l);(0,s.cF)(l)}},function(e){e.O(0,[358,51,210,396,971,596,744],function(){return e(e.s=4550)}),_N_E=e.O()}]);