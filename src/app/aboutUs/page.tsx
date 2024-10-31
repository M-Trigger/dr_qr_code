// import Logo from "@/app/public/dcLogo.svg"
// import happy_face from "@/app/public/happy_face.png"
// import Image from "next/image"
export default function main(){

    return (
        <div className="w-full h-full md:h-full flex flex-col items-end px-2 py-2">
            <h1 className="font-KahrobaB text-2xl md:mt-8 text-gray-700 md:text-right text-center">داروخانه دکتر ممجد</h1>
            <p className="font-KahrobaB mt-6 text-dengerColor text-right">داروخانه دکتر ممجد از سال ۹۸ شروع به فعالیت نموده ، که در عرضه انواع محصولات دارویی و بهداشتی در حال خدمت رسانی می باشد.</p>
            <div className=" w-full h-72 seToHigher:h-full flex flex-col mt-10  overflow-scroll">
                <div>
                    <h3 className="font-KahrobaB text-primaryColor text-right text_rtl">عرضه دارو با بیمه :</h3>
                    <p className="font-KahrobaB text-right text-sm mt-3 mr-4 text_rtl text-gray-600" >عرضه انواع محصولات دارویی و بهداشتی / آموزش انجام فشارخون و قند / طرف قرارداد با بیمه های تامین اجتماعی - خدمات درمانی و نیروهای مسلح / داروخانه معتمد بیمه سینا</p>
                </div>
                <div className="mt-4">
                <h3 className="font-KahrobaB text-primaryColor text-right text_rtl">خدمات ویژه  :</h3>
                <p className="font-KahrobaB text-right text-sm mt-3 mr-4 text_rtl text-gray-600">مشاوره تلفنی و برخط (انلاین) دارویی و انواع بیماری ها - خصوصا فشار خون و دیابت </p>
                </div>
                <div className="mt-4">
                <h3 className="font-KahrobaB text-primaryColor text-right text_rtl">فروش انلاین :</h3>
                <p className="font-KahrobaB text-right text-sm mt-3 mr-4 text-gray-600">خرید آنلاین و غیرحضوری ، شما می توانید هر محصولی که نیاز دارید را به صورت غیرحضوری خریداری کنید و ما محصولات را برای شما ارسال می کنیم</p>
                </div>
            </div>


        </div>
    )

}