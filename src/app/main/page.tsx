"use client"

import Link from "next/link"

export default function main(){
    // let redirectToGooleMet = () =>{
    //     window.location.href = "http://meet.google.com/umm-bowo-fhd"
    // }
    return (
        <div className="w-full h-full flex flex-col items-end px-2 py-2 ">
            <h1 className="font-KahrobaB text-lg md:text-2xl mt-2 sm:mt-8 text-gray-700 ">
            بدون نیاز به مراجعه حضوری!! 
            </h1>
            <p className="font-KahrobaB mt-6 text-dengerColor text-right text-base md:text-lg">شما می توانید فقط با لمس لینک تماس انلاین مستقیما به متصدی داروخانه متصل شوید و به راحتی داروهایتان را تهیه کنید</p>
            
            <div className=" w-full h-full flex flex-col mt-10">
                <div>
                    <h3 className="font-KahrobaB text-primaryColor text-right text_rtl text-sm md:text-base">صرفه‌جویی در زمان و انرژی:</h3>
                    <p className="font-KahrobaB text-right text-xs md:text-sm mt-3 mr-4 text_rtl text-gray-600" >با استفاده از سرویس ارتباط انلاین نیاز شما از مراجعه حضوری بر طرف شده و بدون اتلاف وقت داروهای مورد نیازتان در سریع ترین زمان ممکن اماده تحویل می شوند</p>
                </div>
                <div className="mt-4">
                    <h3 className="font-KahrobaB text-primaryColor text-right text_rtl text-sm md:text-base">تحویل سریع و آسان:</h3>
                    <p className="font-KahrobaB text-right text-xs md:text-sm mt-3 mr-4 text_rtl text-gray-600">تحویل درب منزل برای افرادی که امکان مراجعه حضوری به داروخانه را ندارند</p>
                </div>
                <div className="mt-4">
                    <h3 className="font-KahrobaB text-primaryColor text-right text-sm md:text-base ">صرفه‌جویی در زمان و انرژی:</h3>
                    <p className="font-KahrobaB text-right text-xs md:text-sm mt-3 mr-4 text-gray-600">امکان ثبت و سفارش انلاین دارو و تحویل سریع و پک شده اقلام دارویی شما</p>
                </div>

                <div className="bg-accentColor hover:bg-dengerColor w-40 h-16 mt-12 rounded-lg shadow-lg flex flex-row justify-center items-center">
                    {/* <h1 onClick={() => {redirectToGooleMet()}} className="font-KahrobaB text-white text-right ">تماس آنلاین</h1> */}
                    <Link href={"http://meet.google.com/umm-bowo-fhd"} className="font-KahrobaB text-white text-right ">تماس آنلاین</Link>
                </div>
                

            </div>


        </div>
    )

}