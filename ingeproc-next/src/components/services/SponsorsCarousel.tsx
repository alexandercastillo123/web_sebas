import Image from 'next/image';

const sponsors = [
    "https://expert-themes.com/newwp/emarat/wp-content/uploads/2019/01/1.png",
    "https://expert-themes.com/newwp/emarat/wp-content/uploads/2019/01/5.png",
    "https://expert-themes.com/newwp/emarat/wp-content/uploads/2019/01/2.png",
    "https://expert-themes.com/newwp/emarat/wp-content/uploads/2019/01/3.png",
    "https://expert-themes.com/newwp/emarat/wp-content/uploads/2019/01/4.png",
];

export default function SponsorsCarousel() {
    return (
        <section
            className="py-16 relative bg-cover bg-center"
            style={{ backgroundImage: "url('https://expert-themes.com/newwp/emarat/wp-content/uploads/2019/01/5.jpg')" }}
        >
            <div className="absolute inset-0 bg-black/80"></div>

            <div className="max-w-7xl mx-auto px-4 relative z-10">
                <div className="flex flex-wrap justify-center items-center gap-12 lg:gap-20 opacity-80">
                    {[...sponsors, ...sponsors].map((src, index) => (
                        <div key={index} className="w-32 h-16 relative transition-all duration-300 hover:opacity-100 hover:scale-110 cursor-pointer">
                            <Image
                                src={src}
                                alt="Partner logo"
                                fill
                                className="object-contain"
                            />
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
