"use client"


import { useState } from "react";
import {login, confirmCode} from "../../services/contactService"
import { redirect } from "next/navigation";

const Login = ({modal, setModal}) => {
    const [mobile, setMobile] = useState("");
    const [mobileStatus, setMobileStatus] = useState(1);
    const [activeCode, setActiveCode] = useState("");
    const [activeCodeStatus, setActiveCodeStatus] = useState(1);
    const handleLoginSubmit = async event   => {
        event.preventDefault();
        try {
            const user = {mobile}
            const { status, data } = await login(user);
            if (status === 200) {
                setMobileStatus(status);
            }
        } catch (ex) {
            console.log(ex);
        }
    }

    const handleActiveCode = async event   => {
        event.preventDefault();
        try {
            const code = {mobile,activeCode}
            const { status, data } = await confirmCode(code);
            
            if (status === 200) {
                localStorage.setItem("token", data.data)
            }
        } catch (ex) {
            console.log(ex);
            

        }
    }
    return (

        <section id="authentication-modal" aria-hidden="true" className={`overflow-y-auto overflow-x-hidden fixed z-50 justify-center items-center w-screen h-screen md:inset-0 bg-gray-950 bg-opacity-50 ${modal === true ? 'flex' : 'hidden'}`}>

            {/* <!-- Main modal --> */}
            
                {mobileStatus === 1 ?
                <div className=" p-4 w-full max-w-md max-h-full">
                {/* <!-- Modal content --> */}
                <div className="relative bg-white rounded-lg shadow py-6">
                    {/* <!-- Modal header --> */}
                    <div className="flex items-center justify-between p-4 md:p-5 rounded-t ">

                        <button onClick={()=> setModal(false)} type="button" className="end-2.5 text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm w-8 h-8 ms-auto inline-flex justify-center items-center  " data-modal-hide="authentication-modal">
                            <svg className="w-3 h-3" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 14">
                                <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m1 1 6 6m0 0 6 6M7 7l6-6M7 7l-6 6" />
                            </svg>
                            <span className="sr-only">Close modal</span>
                        </button>
                    </div>
                    {/* <!-- Modal body --> */}
                    <div className="w-full flex flex-col items-center justify-center">
                        <h1 className="text-[24px] font-bold">ورود به مسطورا</h1>
                        <p className="text-[18px] text-[#2A2B2D] mt-8">برای شروع مسیر، شماره موبایلت رو بنویس</p>
                    </div>

                    <div className="p-4 md:p-5">
                        <form className="space-y-4" onSubmit={handleLoginSubmit}>
                            <div>
                                <input type="text" name="mobile" id="mobile" value={mobile} onChange={e => setMobile(e.target.value)} className="bg-gray-50 border border-gray-300 outline-none text-sm rounded-lg block w-full p-2.5 py-4" placeholder="شماره موبایل" required />
                            </div>
                         
                            <button type="submit" className="w-full text-white bg-[#3B9869] hover:bg-[#32855c] focus:ring-4 focus:outline-none rounded-lg text-sm px-5 py-4 text-center ">تایید و دریافت کد تایید</button>
                         
                        </form>
                    </div>
                </div>
            </div> 
            :
            mobileStatus === 200 && activeCodeStatus === 1 ?
            <div className=" p-4 w-full max-w-md max-h-full">
                    {/* <!-- Modal content --> */}
                    <div className="relative bg-white rounded-lg shadow py-6">
                        {/* <!-- Modal header --> */}
                        <div className="flex items-center justify-between p-4 md:p-5 rounded-t ">

                            <button onClick={()=> setModal(false)} type="button" className="end-2.5 text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm w-8 h-8 ms-auto inline-flex justify-center items-center  " data-modal-hide="authentication-modal">
                                <svg className="w-3 h-3" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 14">
                                    <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m1 1 6 6m0 0 6 6M7 7l6-6M7 7l-6 6" />
                                </svg>
                                <span className="sr-only">Close modal</span>
                            </button>
                        </div>
                        {/* <!-- Modal body --> */}
                        <div className="w-full flex flex-col items-center justify-center">
                            <h1 className="text-[24px] font-bold">ثبت کد تایید</h1>
                            <p className="text-[18px] text-[#2A2B2D] mt-8"> کد تایید ارسال شده را وارد کنید </p>
                        </div>

                        <div className="p-4 md:p-5">
                            <form className="space-y-4" onSubmit={handleActiveCode}>
                                <div>
                                    <input type="text" name="activeCode" id="activeCode" value={activeCode} onChange={e => setActiveCode(e.target.value)} className="bg-gray-50 border border-gray-300 outline-none text-sm rounded-lg block w-full p-2.5 py-4" placeholder="کد تایید" required />
                                </div>
                             
                                <button type="submit" className="w-full text-white bg-[#3B9869] hover:bg-[#32855c] focus:ring-4 focus:outline-none rounded-lg text-sm px-5 py-4 text-center ">تایید و دریافت کد تایید</button>
                             
                            </form>
                        </div>
                    </div>
                </div> : null

                
            }
          

        </section>
    );
}

export default Login;