import { FC } from "react";
import Image from "next/image";
import { FaQuoteLeft } from "react-icons/fa";

interface TestimonialProps {
  imageSrc: string;
  name: string;
  title: string;
  rating: number;
  text: string;
}

const TestimonialCard: FC<TestimonialProps> = ({
  text,
}) => {
  return (
    <div className="max-w-sm mx-auto bg-white rounded-2xl shadow-md p-6 space-y-4 cursor-pointer">
      <div className="text-blue-600 text-3xl flex justify-start">
        <FaQuoteLeft />
      </div>
      <p className="text-gray-800 text-sm leading-relaxed text-start">
        "{text}"
      </p>
      <div className="flex items-center gap-6 pt-3">
        {/* <div> */}
          <Image
            src="https://corf-react.envytheme.com/img/client/client2.jpg"
            alt="Noman Ali"
            width={60}
            height={60}
            className="rounded-full ring-1 shadow ring-blue-300 ring-offset-2"
          />
        {/* </div> */}
        <div className="flex flex-col space-y-">
          <p className="text-sm font-semibold text-gray-900">Noman Ali</p>
          <p className="text-xs text-gray-500">Software Developer at Bikiron</p>

          {/* <ReactStats
            count={5}
            value={rating}
            edit={false}
            size={16}
            activeColor="#ffd700"
          />  */}
        </div>
      </div>
    </div>
  );
};

export default TestimonialCard;

