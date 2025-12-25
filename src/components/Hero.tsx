import { Button } from "@/src/components/ui/button";
import TextType from "./animate/TextType";
import Image from "next/image";

const HeroSection = ({ id }: { id?: string }) => {
  return (
    <div id={id} className="relative w-11/12 lg:w-11/12 xl:w-10/12 mx-auto py-16 mb-4 overflow-hidden lg:h-130">
      <div className="absolute inset-0 bg-[linear-gradient(to_right,rgba(0,0,0,0.15)_1px,transparent_1px),linear-gradient(to_bottom,rgba(0,0,0,0.15)_1px,transparent_1px)] bg-[size:60px_60px]" />
      {/* Content */}
      <div className="relative grid grid-cols-10 gap-10">
        <div className="col-span-10 md:col-span-6 lg:col-span-6 mt-2 md:mt-10 ">
          <div className="w-fit">
            <h1 className="font-black text-2xl md:text-4xl xl:text-[3rem] leading-none w-fit">
              <TextType
                text={["Mochammad Akmal Thoriq", "Akmal", "Thoriq"]}
                typingSpeed={75}
                pauseDuration={1500}
                showCursor={true}
                cursorCharacter="|"
              />
            </h1>
            <p className="font-publicSans text mt-5 font-medium xl:w-150 text-justify">
              A fresh graduate in Informatics Engineering from Brawijaya
              University with experience and strong interest in software
              development, both as front-end and back-end developer, especially
              has a very high enthusiasm for front-end development. Have 2+ year
              experience in developing web application. Enjoys learning things,
              such as learning new programming languages and frameworks.
            </p>

            {/* CTA Section*/}
            <div className="font-publicSans mt-16 w-fit">
              <p className="my-2">Discover the future of Learning-Today</p>
              <a href="/explore">
                <Button size="lg" className="h-14 px-8 text-[1.1rem]">
                  Download CV
                </Button>
              </a>
            </div>
          </div>
        </div>

        <div className="col-span-10 md:col-span-4 lg:col-span-4">
          <div className="relative w-full max-w-md mx-auto  transition-all hover:scale-101 duration-300">
            {/* Multiple Border Layers for Depth */}
            <div className="absolute inset-0 bg-blue-500 translate-x-4 translate-y-4 border-4 border-black" />
            <div className="absolute inset-0 bg-pink-400 translate-x-2 translate-y-2 border-4 border-black" />

            {/* Main Image Container */}
            <div className="relative h-[400px] bg-white border-4 border-black shadow-[8px_8px_0px_0px_rgba(0,0,0,1)] overflow-hidden">
              <Image
                src="/fotobio-2.jpeg"
                alt="Akmal Thoriq"
                width={400}
                height={500}
                className="w-full h-full object-cover object-[50%_60%] mix-blend-multiply"
              />



              {/* Corner Accent */}
              <div className="absolute top-0 right-0 w-16 h-16 bg-yellow-400 border-l-4 border-b-4 border-black" />
              <div className="absolute bottom-0 left-0 w-16 h-16 bg-red-500 border-r-4 border-t-4 border-black" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
