

const Banner = () => {
    return (
        <div className="text-center mt-9">
            <div className="p-32 bg-[url(/src/assets/images/banner.jpeg)] rounded-3xl bg-cover">
            <h2 className="text-white text-[52px] font-bold">Discover an exceptional cooking <br /> class tailored for you!</h2>
            <p className="text-white text-lg font-normal w-3/4 mx-auto pt-6 pb-10">Welcome to the ultimate culinary hub! Discover a world of delectable delights with our curated collection of mouthwatering recipes. From sizzling appetizers to decadent desserts, embark on a culinary journey filled with flavors, techniques, and inspiration. Let us cook up something extraordinary together!</p>
            <div>
                <button className="rounded-[50px] bg-[#0BE58A] text-[#150B2B] text-lg py-4 px-6">Explore Now</button>
                <button className="rounded-[50px] text-white border border-white text-lg py-4 px-6 ml-6">Our Feedback</button>
            </div>
         </div>
        </div>
    );
};

export default Banner;