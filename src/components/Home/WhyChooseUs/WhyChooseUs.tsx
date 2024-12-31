import { Home } from "lucide-react";
import Image from "next/image";

export default function WhyChooseUs() {
  return (
    <div className="bg-[#f3f3fd] py-12">
      <div className="project-container ">
        <div className="flex flex-col md:flex-row gap-12 md:items-center">
          {/* Left Column - Image */}
          <div className="relative w-full">
            <div className="relativ overflow-hidden rounded-xl">
              <Image
                src="https://i.ibb.co.com/0Qp8jrq/img-w-text1.jpg"
                alt="Modern apartment building"
                className="object-cover rounded-xl w-full"
                width={600}
                height={800}
                priority
              />
            </div>
            <div className="absolute bottom-4 left-4 flex gap-4">
              <div className="bg-white rounded-full p-2 flex items-center shadow-lg">
                <div className="h-12 w-12 rounded-full bg-blue-100 flex items-center justify-center">
                  <Image
                    className="w-4/5 h-4/5 rounded-full"
                    src="https://i.ibb.co.com/jkgQsYv/download.jpg"
                    alt="Partner icon"
                    width={24}
                    height={24}
                  />
                </div>
                <div className="ml-2 mr-4">
                  <div className="text-xl font-bold text-blue-600">480k+</div>
                  <div className="text-sm text-gray-600">Partner</div>
                </div>
              </div>
              <div className="bg-white rounded-full p-2 flex items-center shadow-lg">
                <div className="h-12 w-12 rounded-full bg-blue-100 flex items-center justify-center">
                  <Image
                    className="w-4/5 h-4/5 rounded-full"
                    src="https://i.ibb.co.com/jkgQsYv/download.jpg"
                    alt="Property icon"
                    width={24}
                    height={24}
                  />
                </div>
                <div className="ml-2 mr-4">
                  <div className="text-xl font-bold text-blue-600">2.5k+</div>
                  <div className="text-sm text-gray-600">
                    Property Available
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column - Content */}
          <div className="space-y-8 w-full">
            <div>
              <div className="text-sm font-medium text-[#1563DF] mb-2 uppercase">
                Our Benifit
              </div>
              <h1 className="text-3xl font-semibold mb-4">
                Why Choose HomeLengo
              </h1>
              <p className="text-gray-600">
                Our seasoned team excels in real estate with years of successful
                market navigation, offering informed decisions and optimal
                results.
              </p>
            </div>

            <div className="space-y-6">
              {/* 1 */}
              <div className="flex items-center gap-4 px-10 py-4 rounded-xl bg-white hover:scale-105 duration-300">
                <Home className="size-10 text-blue-600" />

                <div>
                  <h2 className="text-2xl text-[##161e2d] font-semibold mb-2">
                    Proven Expertise
                  </h2>
                  <p className="text-[#5c6368] mb-3">
                    Our seasoned team excels in real estate with years of
                    successful market navigation, offering informed decisions
                    and optimal results.
                  </p>
                </div>
              </div>
              {/* 1 */}
              <div className="flex items-center gap-4 px-10 py-4 rounded-xl bg-white hover:scale-105 duration-300">
                <Home className="size-10 text-blue-600" />

                <div>
                  <h2 className="text-2xl text-[##161e2d] font-semibold mb-2">
                    Customized Solutions
                  </h2>
                  <p className="text-[#5c6368] mb-3">
                    We pride ourselves on crafting personalized strategies to
                    match your unique goals, ensuring a seamless real estate
                    journey.
                  </p>
                </div>
              </div>
              {/* 3*/}
              <div className="flex items-center gap-4 px-10 py-4 rounded-xl bg-white hover:scale-105 duration-300">
                <Home className="size-10 text-blue-600" />

                <div>
                  <h2 className="text-2xl text-[##161e2d] font-semibold mb-2">
                    Transparent Partnerships
                  </h2>
                  <p className="text-[#5c6368] mb-3">
                    Transparency is key in our client relationships. We
                    prioritize clear communication and ethical practices,
                    fostering trust and reliability throughout.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
