const Value = () => {
    return (
        <div className=" flex w-full flex-col items-center justify-center bg-[#3B9869] mt-20 rounded-2xl">
            <div className="md:flex hidden items-center justify-center flex-col mt-10">

                <img src="/images/stars.svg" alt="stars" />
                <h1 className="text-white text-3xl  overflow-hidden mt-4">ارزش های مسطورا</h1>
            </div>
            {/* mobile */}
            <div className="md:hidden flex items-center justify-between w-full px-4 mt-5">

                <h1 className="text-white text-[20px] overflow-hidden font-bold">ارزش های مسطورا</h1>
                <img src="/images/stars.svg" alt="stars" />
            </div>
            {/* mobile */}
            <section className="w-full releative overflow-auto bg-[#3B9869] flex flex-col justify-center items-start md:items-center  pb-20 ">
                <div className="flex justify-center items-center mt-8 space-x-3 space-x-reverse w-[970px]">
                    <div className="flex h-[245px] w-[238px] flex-col items-center bg-[#308B5D] text-center px-5 rounded-[20px]">
                        <img src="/images/star.svg" alt="star" className="w-5 h-5 mt-5" />
                        <p className="text-[#F2B523]">آموزش معنویت</p>
                        <p className="text-white mt-5">در مسطورا، ما به ارتقای ارزش‌های معنوی و دینی متعهدیم.</p>
                    </div>
                    <div className="flex h-[245px] w-[238px] flex-col items-center bg-[#308B5D] text-center px-5 rounded-[20px]">
                        <img src="/images/star.svg" alt="star" className="w-5 h-5 mt-5" />
                        <p className="text-[#F2B523]">آموزش معنویت</p>
                        <p className="text-white mt-5">با ارائه محتوای الهام‌بخش و اشتراک تجارب موفقیت، ما به ایجاد انگیزه و انرژی مثبت در همه کاربرانمان پرداخته‌ایم</p>
                    </div>
                    <div className="flex h-[245px] w-[238px] flex-col items-center bg-[#308B5D] text-center px-5 rounded-[20px]">
                        <img src="/images/star.svg" alt="star" className="w-5 h-5 mt-5" />
                        <p className="text-[#F2B523]">آموزش معنویت</p>
                        <p className="text-white mt-5">ما به ایجاد فرصت‌هایی برای رشد و توسعه فردی همه کاربرانمان ارزش می‌دهیم</p>
                    </div>
                    <div className="flex h-[245px] w-[238px] flex-col items-center bg-[#308B5D] text-center px-5 rounded-[20px]">
                        <img src="/images/star.svg" alt="star" className="w-5 h-5 mt-5" />
                        <p className="text-[#F2B523]">آموزش معنویت</p>
                        <p className="text-white mt-5">با توجه به ارزش احترام به دیگران، ما به ایجاد یک محیط متعالی از همبستگی و همکاری میان کاربرانمان می‌پردازیم</p>
                    </div>
                </div>
            </section>
        </div>
    );
}

export default Value;