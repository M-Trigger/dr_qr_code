"use client"
import Image from "next/image";
import { useEffect } from "react";
import { useRouter } from "next/navigation";


export default function Home() {
  const router = useRouter();
  
  useEffect(() => {
    router.replace("/main")
    }, []);
  
  return (
    <div className="w-full h-full bg-black flex flex-row justify-center items-center">
     <h1 className="font-KahrobaB text-8xl">خوش آمدید</h1>
    </div>
  );
}
