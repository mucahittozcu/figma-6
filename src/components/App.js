"use client"
import { useState } from "react" 
import { FcGoogle } from 'react-icons/fc';
import { FaFacebook } from 'react-icons/fa';
const App = () => {
  const [userName,setUserName] = useState("")
  const [password,setPassword] = useState("")
  return (
    <div className="bg-black h-screen overflow-hidden relative">
<div className=" overflow-hidden absolute top-[-100px] right-[-150px] rounded-tl-[100px] -skew-x-[10deg] -rotate-90 bg-gradient-to-r from-[#b82424] to-[#051d58]  w-[750px] h-[650px] -skew-y-[20deg]"></div>

<div className=" overflow-hidden absolute bottom-[-100px] left-[-120px] rounded-tl-[100px] rotate-90 bg-gradient-to-r from-[#363cf3] to-[#061b4e]  w-[750px] h-[650px] -skew-x-[9deg] -skew-y-[14deg]"></div>

       <div className="absolute top-0 left-0 w-full h-full flex justify-center items-center ">{/*bu div ile login divini sarıp login kısmını arka planın önünde olmasını sağlıyoruz*/}

        <div className="flex items-center justify-center h-full overflow-hidden">
  
         <div className="flex flex-col bg-slate-700 bg-opacity-20 p-14 w-[500px] h-[600px] shadow-xl">
        <h1 className=" text-7xl font-bold text-gray-100 opacity-55">LOGIN</h1>
        <input 
          type="text"
          placeholder="Username"
          className="border bg-black text-gray-400 border-black rounded-md p-4 mt-6 pl-4"
          value={userName}
          onChange={(event) => setUserName(event.target.value)}
          />
          <input 
          type="password"
          placeholder="Password"
          className="border bg-black text-gray-400 border-black rounded-md p-4 mt-6 pl-4"
          value={password}
          onChange={(event) => setPassword(event.target.value)}
          />
        <button className="flex justify-center items-center  text-2xl font-semibold text-gray-400 bg-slate-100 bg-opacity-10 hover:bg-slate-100 hover:bg-opacity-40 hover:text-gray-800 w-[180px] h-[50px] mt-7 rounded-lg">LOGIN</button>
      <div className="flex items-center my-6 pt-5">
        <hr className="flex flex-grow bg-gray-800" />
         <span className="mx-4 text-gray-600 text-xl">OR</span>
        <hr className="flex flex-grow bg-gray-800"/> 
      </div>
          <div className="flex justify-center pt-5">
            <a href="#" className="pr-5"><FcGoogle size={30} /> </a>
            <a href="#" className="pl-5"><FaFacebook size={30} color="blue" /></a>
          </div>
          </div>
          </div>
          </div>
          <div className="absolute top-[10%] left-[10%] skew-y-12 skew-x-12 bg-[#27B902] w-24 h-24 "></div>
          <div className="absolute bottom-[10%] right-[15%] rotate-[90deg] skew-y-12 skew-x-12 bg-[#27B902] w-24 h-24 "></div>
    </div>
  )
}
export default App
{/* <div className="absolute top-[10%] left-[10%] skew-y-12 skew-x-12 bg-[#27B902] w-20 h-20 "></div> */}