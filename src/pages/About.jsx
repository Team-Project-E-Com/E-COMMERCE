import React from "react";
import { assets } from "../assets/assets";


const About = () => {
    return (
        <div>

            <div className="flex items-center gap-2 justify-center text-2xl pt-10 ">
                <p>ABOUT <b>US</b></p>
                <p className='w-8 md:w-11 h-[2px] bg-[#414141]'></p>
            </div>

            <div className="my-10 flex flex-col md:flex-row gap-10 sm:gap-14 md:gap-16 px-4 sm:px-10 md:px-16 lg:px-24">
                <img className="w-full md:max-w-[450px] object-cover" src={assets.about_img} alt="" />

                <div className="flex flex-col justify-center gap-4 sm:gap-5 md:gap-6 text-gray-600 md:w-2/4 text-sm sm:text-base">
                    <p>StyleNest was born out of a passion for innovation and a desire to revolutionize the way people shop online and visit our shop directly. Our journey began with a simple idea: to provide a platform where customers can easily discover, explore, and purchase a wide range of products from the comfort of their homes.</p>
                    <p>Since our shop inception, we've worked tirelessly to curate a diverse selection of high-quality and top-brand products that cater to every taste and preference. From fashion and beauty to electronics and home essentials, we offer an extensive collection sourced from trusted brands and suppliers.</p>
                    <b className="text-gray-800 text-base sm:text-lg">Our Shop's Resolution</b>
                    <p>Our shop's mission at Forever is to empower customers with choice, convenience, and confidence. We're dedicated to providing a seamless shopping experience that exceeds expectations, from browsing and ordering to delivery and beyond.</p>
                </div>
            </div>

            <div className="flex items-center gap-2 text-base sm:text-lg md:text-xl py-4 px-4 sm:px-10 md:px-16 lg:px-24 ">
                <p>WHY <b>CHOOSE US</b></p>
                <p className='w-6 sm:w-8 md:w-11 h-[2px] bg-[#414141]'></p>
            </div>

            <div className="flex flex-col md:flex-row gap-6 md:gap-4 text-sm md:text-base mb-20 px-4 sm:px-10 md:px-16 lg:px-24">
                <div className="border px-6 sm:px-10 md:px-12 lg:px-16 py-6 sm:py-12 md:py-20 flex flex-col gap-3 sm:gap-4 md:gap-5 flex-1">
                    <b>Quality Assurance:</b>
                    <p className="text-gray-600">We meticulously select and vet each product to ensure it meets our stringent quality standards.</p>
                </div>

                <div className="border px-6 sm:px-10 md:px-12 lg:px-16 py-6 sm:py-12 md:py-20 flex flex-col gap-3 sm:gap-4 md:gap-5 flex-1">
                    <b>Convenience:</b>
                    <p className="text-gray-600">With our user-friendly interface and hassle-free ordering process, shopping has never been easier.</p>
                </div>

                <div className="border px-6 sm:px-10 md:px-12 lg:px-16 py-6 sm:py-12 md:py-20 flex flex-col gap-3 sm:gap-4 md:gap-5 flex-1">
                    <b>Exceptional Customer Service:</b>
                    <p className="text-gray-600">Our team of dedicated professionals is here to assist you the way, ensuring your satisfaction is our top priority.</p>
                </div>

            </div>

        </div>
    );
};

export default About;