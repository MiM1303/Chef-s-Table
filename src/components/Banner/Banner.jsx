

const Banner = () => {
    return (
        <div className="text-center mt-9 mb-16 md:mb-24">
            <div className="px-8 py-20 md:p-32 bg-[linear-gradient(0deg,rgba(3,7,18,0.50),rgba(3,7,18,0.00)),url(/src/assets/images/banner.jpeg)]  from-[#150B2BE5] to-[#150B2B00] rounded-3xl bg-cover">
            <h2 className="text-white text-3xl md:text-[52px] font-bold">Discover an exceptional cooking <br /> class tailored for you!</h2>
            <p className="text-white text-base md:text-lg font-normal w-11/12 mx-auto pt-6 pb-10">Welcome to the ultimate culinary hub! Discover a world of delectable delights with our curated collection of mouthwatering recipes. From sizzling appetizers to decadent desserts, embark on a culinary journey filled with flavors, techniques, and inspiration. Let us cook up something extraordinary together!</p>
            <div className="flex flex-row gap-4 md:gap-6 items-center md:justify-center">
                <button className="rounded-[50px] bg-[#0BE58A] text-[#150B2B] text-lg md:text-xl font-semibold py-4 px-4 md:px-6 w-1/2 md:w-fit">Explore Now</button>
                <button className="rounded-[50px] text-white border border-white text-lg md:text-xl font-semibold py-4 px-4 md:px-6 w-1/2 md:w-fit">Our Feedback</button>
            </div>
         </div>
        </div>
    );
};

export default Banner;