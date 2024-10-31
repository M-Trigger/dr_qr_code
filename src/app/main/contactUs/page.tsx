import Logo from "@/app/public/dcLogo.svg"
import happy_face from "@/app/public/happy_face.png"
import Image from "next/image"
export default function main(){

    return (
        <div className="w-full h-full flex flex-col items-end px-2 py-2">
            <h1 className="font-KahrobaB text-2xl mt-8 text-gray-700">
راه های ارتباطی            
</h1>
            <p className="font-KahrobaB mt-6 text-dengerColor text-right"> از هر کدام از روش های زیر می توانید برای تماس با ما  اقدام کنید</p>

            
            <div className=" w-full h-full flex flex-col mt-10">
                <div>
                    <h3 className="font-KahrobaB text-primaryColor text-right text_rtl">شماره تماس جهت سفارش برخط/انلاین :</h3>
                    <p className="font-KahrobaB text-right text-sm mt-3 mr-4 text_rtl text-gray-600" >09331394313</p>
                </div>
                <div className="mt-4">
                    <h3 className="font-KahrobaB text-primaryColor text-right text_rtl">شماره تماس ثابت جهت سفارش برخط/انلاین :</h3>
                    <p className="font-KahrobaB text-right text-sm mt-3 mr-4 text_rtl text-gray-600">0133608124</p>
                </div>
                <div className="mt-4">
                    <h3 className="font-KahrobaB text-primaryColor text-right text_rtl">آدرس : </h3>
                    <p className="font-KahrobaB text-right text-sm mt-3 mr-4 text-gray-600">ایران
گیلان
رشت, بلوار امام - روبروی اداره برق
داروخانه دکتر ممجد</p>
                </div>

                {/* <div className="bg-accentColor hover:bg-dengerColor w-40 h-16 mt-8 rounded-lg shadow-lg flex flex-row justify-center items-center">
                    <h1 className="font-KahrobaB text-white text-right ">تماس آنلاین</h1>
                </div> */}
                

            </div>


        </div>
    )

}