"use client"
import Logo from "@/app/public/dcLogo.svg"
import happy_face from "@/app/public/happy_face.png"
import menu from "@/app/public/burger-bar.png"
import Image from "next/image"
import { usePathname } from 'next/navigation';
import { useEffect, useState } from 'react';
import Link from 'next/link'


export default function Main(
    {
        children,
      }: Readonly<{
        children: React.ReactNode;
      }>
){

    const router = usePathname();
    const [menuItem,setMenuItem] = useState("mainPage")
    const [showStatus,setShowStatus] = useState(false)


    useEffect( () => {
        console.log(`===> ${router.split("/")[2]}`)
        if (router.split("/")[2] === undefined){
            setMenuItem("mainPage")
        }
        else if  (router.split("/")[2] === "aboutUs"){
            setMenuItem("aboutUs")
        }
        else if   (router.split("/")[2] === "contactUs"){
            setMenuItem("contactUs")
        }
    },[router])

    return (
        <div className="w-full h-screen bg-primaryColor flex flex-row justify-center items-center py-6 lg:py-0 overflow-auto">
            <div className="w-2/3 mt-10 seToHigher:mt-0 seToHigher:h-screen sm:h-full lg:h-[80%]  lg:max-h-[700px] max-w-[1100px] bg-secondaryColor rounded-lg flex flex-col px-2 md:px-8 py-2">
                <div className="h-16 w-full  flex flex-row-reverse justify-between">
                    <div className="sm:h-0 sm:w-0 h-full w-12 flex flex-row justify-center items-center visible sm:invisible">
                        <Image src={menu} alt="menu" className="" onClick={() => setShowStatus(!showStatus)}></Image>
                    </div>
                    <div className=" h-0 sm:w-full sm:h-16 flex flex-row-reverse items-center invisible sm:visible ">
                        <Link href={"/main"}  className={`font-KahrobaB ${menuItem == "mainPage" ? "text-accentColor" : "text-primaryColor"} ml-1 sm:ml-3 text-base md:text-lg`}>صفحه اصلی</Link >
                        <Link href={"/main/contactUs"}  className={`font-KahrobaB ${menuItem == "contactUs" ? "text-accentColor" : "text-primaryColor"} ml-1 sm:ml-3 text-base md:text-lg`}>ارتباط با ما</Link >
                        <Link href={"/main/aboutUs"}  className={`font-KahrobaB ${menuItem == "aboutUs" ? "text-accentColor" : "text-primaryColor"} ml-1 sm:ml-3 text-base md:text-lg`}>درباره ما</Link >
                        
                    </div>
                    <div className=" h-16 flex flex-row items-center">
                        <Image src={Logo} className="w-14 h-14" alt="logo"></Image>
                    </div>
                </div>
                <div className="h-full w-full  flex flex-col lg:flex-row lg:justify-normal justify-center items-center">
                    <div className=" lg:w-1/3 lg:h-full flex flex-col md:mt-8 lg:mt-0">
                    
                    <div className="invisible w-0 h-0 md:visible md:w-full md:h-full  flex flex-row justify-center items-center">
                        <div className="w-40 h-40 lg:w-48 lg:h-48 xl:w-64 xl:h-64  rounded-full border-4 border-white p-2">
                            <div className="bg-primaryColor w-full h-full rounded-full relative">
                                <div className="w-full h-full  flex flex-col justify-center items-center rounded-full">
                                    <h1 className="font-KahrobaB text-accentColor text-lg lg:text-2xl xl:text-4xl mt-[-2rem]  lg:mt-[-4rem] text-with-border">داروخانه</h1>
                                    <h1 className="font-KahrobaB text-accentColor text-lg lg:text-2xl xl:text-4xl  text-with-border">دکتر ممجد</h1>
                                </div>
                                <Image src={happy_face} alt="main_image" className="absolute w-[300rem bottom-[-40px]"></Image>
                            </div>
                        </div>
                    </div>
                    </div>
                    <div className=" lg:w-2/3 h-full flex flex-col ">
                    
                        <div className=" w-full h-full  ">
                            <div className={`bg-primaryColor ${showStatus ? "w-full h-12 mb-4 flex flex-rows space-x-2" : "hidden"} space-x-2 justify-center items-center`}>
                            <Link href={"/main/aboutUs"}  className={`font-KahrobaB ${menuItem == "aboutUs" ? "text-accentColor" : "text-white"} text-xs`}>درباره ما</Link >
                            <Link href={"/main/contactUs"}  className={`font-KahrobaB ${menuItem == "contactUs" ? "text-accentColor" : "text-white"} text-xs`}>ارتباط با ما</Link >
                            <Link href={"/main"}  className={`font-KahrobaB ${menuItem == "mainPage" ? "text-accentColor" : "text-white"} text-xs`}>صفحه اصلی</Link >
                            </div>
                            {children}

                        </div>
                    </div>
                </div>

            </div>
        </div>
    )

}