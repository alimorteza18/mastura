import { sideBar } from "../../data/index";

const Profile = () => {
   return (<main className="flex w-full">

      {/* <button data-drawer-target="default-sidebar" data-drawer-toggle="default-sidebar" aria-controls="default-sidebar" type="button" className="inline-flex items-center p-2 mt-2 ms-3 text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 ">
         <span className="sr-only">Open sidebar</span>
         <svg className="w-6 h-6" aria-hidden="true" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
            <path clip-rule="evenodd" fill-rule="evenodd" d="M2 4.75A.75.75 0 012.75 4h14.5a.75.75 0 010 1.5H2.75A.75.75 0 012 4.75zm0 10.5a.75.75 0 01.75-.75h7.5a.75.75 0 010 1.5h-7.5a.75.75 0 01-.75-.75zM2 10a.75.75 0 01.75-.75h14.5a.75.75 0 010 1.5H2.75A.75.75 0 012 10z"></path>
         </svg>
      </button> */}

      <aside id="default-sidebar" className="fixed top-0 right-0 border-l-2 z-40 w-64 h-screen transition-transform translate-x-full md:translate-x-0" aria-label="Sidebar">
         <div className="h-full px-3 py-4 overflow-y-auto bg-gray-50 ">
            <div className="w-full flex mt-10 justify-between items-center px-4">
               <img src="/images/mastura-logo.svg" alt="mastura-logo" />
               <img className="cursor-pointer" src="/icons/ring.svg" alt="ring" />
            </div>
            <div className="mt-5 flex flex-col border rounded-[20px] p-5 space-y-5">
               <div className="flex items-center">
                  <img src="/images/user-profile.svg" alt="user-profile" />
                  <div className="mr-2">
                     <p>زهرا علیزاده</p>
                     <p className="text-[13px] text-[#2486F9]">صفحه من</p>
                  </div>
               </div>
               <div className="flex items-center justify-between">
                  <div className="flex items-center">
                     <p className="text-[#46AE41]">۳۴</p>
                     <img src="/icons/aye.svg" alt="aye" className="mr-1" />
                  </div>
                  <div className="flex items-center">
                     <p className="text-[#46AE41]">۶۳۴</p>
                     <img src="/icons/gem.svg" alt="aye" className="mr-1 mb-2" />
                  </div>
               </div>
            </div>
            <ul className="space-y-2 font-medium mt-8">
               {sideBar.map((item, index) => (
                  <li key={index}>
                     <a href="#" className="flex items-center p-2 text-gray-900 rounded-lg hover:text-[#3B9869]  hover:bg-[#EDF7EC]  group">
                        <img className="w-5 h-5 transition duration-75" src={item.imgUrl} alt="icon" />
                        <span className="ms-3">{item.title}</span>
                     </a>
                  </li>
               ))}
            </ul>
         </div>
      </aside>

      <div className="p-14 md:mr-64 w-full">
         <div className="w-full py-6 px-6 pr-gradient rounded-[20px] flex flex-col">
                  <img src="/icons/stars.svg" alt="" className="w-[214px] h-[112px] absolute left-36" />
            <div className="flex w-full justify-between items-center">
               <div className="flex flex-col">
                  <h1 className="text-white font-bold text-lg">
                     آیه روز
                  </h1>
                  <p className="text-white font-light">روز چهارم ماه مبارک رمضان</p>
               </div>
               <div className="flex items-center space-x-1 space-x-reverse">

                  <div className=" glass w-[40px] h-[40px] flex justify-center items-center rounded-lg">
                     <p className="text-white">۰۵</p>
                  </div>
                  <span className="text-white">
                     :
                  </span>
                  <div className=" glass w-[40px] h-[40px] flex justify-center items-center rounded-lg">
                     <p className="text-white">۳۴</p>
                  </div>
                  <span className="text-white">
                     :
                  </span>
                  <div className=" glass w-[40px] h-[40px] flex justify-center items-center rounded-lg">
                     <p className="text-white">۲۲</p>
                  </div>
               </div>
            </div>

            <div className="w-full py-4 bg-white-glass rounded-lg mt-8 flex px-4 items-center justify-between">
               <div className="flex items-center">
                  <img src="/icons/glass-aye.svg" alt="aye" />
                  <div className="mr-2">
                     <p className="text-white">زندگی با هدف</p>
                     <p className="text-[12px] text-white font-extralight">اسراء | آیه ۹</p>
                  </div>
               </div>
               <div className="flex space-x-4 space-x-reverse">
                  <div className="flex justify-center items-center w-[50px] h-[26px] bg-white rounded-[50px]">
                     <p className="text-[#46AE41] text-[12px]">۶۳۴</p>
                     <img src="/icons/gem.svg" alt="aye" className="w-[10px] h-4 mb-1 mr-1" />
                  </div>
                  <img src="/icons/vector-f.svg" alt="" />
               </div>
            </div>
         </div>
         <p className="text-2xl font-bold mt-10 overflow-hidden">مسیر مسابقه</p>
         <div className="w-full py-6 px-6 gr-gradient rounded-[20px] flex flex-col mt-10">
         <img src="/icons/stars.svg" alt="" className="w-[214px] h-[112px] absolute left-36" />

            <div className="flex w-full justify-between items-center">
               <div className="flex flex-col">
                  <h1 className="text-white font-bold text-lg">
                     آیات شاخص رمضان
                  </h1>
                  <p className="text-white font-light">این ۲ آیه محور محتوایی فعالیت‌های قرآنی امسال و حرکت هم‌افزا هستند.</p>
               </div>
               <div className="flex flex-col justify-center items-center">
                  <div className="glass w-[31px] h-[31px] rounded-full flex justify-center items-center cursor-pointer">
                     <img src="/icons/arrow-down.svg" alt="" />
                  </div>
                  <p className="text-white mt-2">۰/۱۸</p>
               </div>
            </div>
         </div>
         <div className="w-full py-6 px-6 br-gradient rounded-[20px] flex flex-col mt-5">
         <img src="/icons/stars.svg" alt="" className="w-[214px] h-[112px] absolute left-36" />

            <div className="flex w-full justify-between items-center">
               <div className="flex flex-col">
                  <h1 className="text-white font-bold text-lg">
                  هر روز، یک آیه
                  </h1>
                  <p className="text-white font-light">این ۳۰ آیه برای ۳۰ روز رمضان، بر اساس کتاب طرح کلی انتخاب شده‌اند</p>
               </div>
               <div className="flex flex-col justify-center items-center">
                  <div className="glass w-[31px] h-[31px] rounded-full flex justify-center items-center cursor-pointer">
                     <img src="/icons/arrow-down.svg" alt="" />
                  </div>
                  <p className="text-white mt-2">۰/۱۸</p>
               </div>
            </div>
         </div>
         <div className="w-full py-6 px-6 db-gradient rounded-[20px] flex flex-col mt-5">
         <img src="/icons/stars.svg" alt="" className="w-[214px] h-[112px] absolute left-36" />

            <div className="flex w-full justify-between items-center">
               <div className="flex flex-col">
                  <h1 className="text-white font-bold text-lg">
                  آیات مکمل رمضان
                  </h1>
                  <p className="text-white font-light">این ۱۸ آیه، آیات مکمل متناسب با محور محتوایی رمضان هستند</p>
               </div>
               <div className="flex flex-col justify-center items-center">
                  <div className="glass w-[31px] h-[31px] rounded-full flex justify-center items-center cursor-pointer">
                     <img src="/icons/arrow-down.svg" alt="" />
                  </div>
                  <p className="text-white mt-2">۰/۱۸</p>
               </div>
            </div>
         </div>
      </div>

   </main>);
}

export default Profile;