"use client";
import ConatactUsAccordion from "@/app/(withCommonLayout)/contact-us/Accordion";
import BecomePartner from "../about-us/BecomePartner";
import Form from "../form/Form";
import Input from "../form/Input";

const Contact = () => {
  const formHandlar = (data: any) => {
    console.log("data", data);
  };

  return (
    <div className="bg-white">
      <div
        className="relative h-[60vh] bg-cover bg-center"
        style={{
          backgroundImage: `url('https://i.ibb.co.com/q3j6cgSJ/blogPage.jpg')`,
        }}
      >
        <div className="absolute inset-0 bg-black bg-opacity-45 flex items-center justify-center md:pt-24">
          <div className="text-center text-white">
            <p className="text-sm mb-2">Home / Pages / Contact Us</p>
            <h1 className="text-4xl font-bold">Contact Us</h1>
          </div>
        </div>
      </div>

      {/* Blog cards */}

      <div className="project-container pt-24 pb-16">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-5 md:gap-7">
          <div>
            <div>
              <h1 className="text-base md:text-3xl md:font-bold">
                Drop Us A Line
              </h1>
              <p className="text-base text-slate-500 pt-2 pb-3">
                Feel free to connect with us through our online channels for
                updates, news, and more.
              </p>
            </div>
            <Form onSubmit={formHandlar}>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-7">
                <Input label="Full Name" name="fullName" />
                <Input
                  name="email"
                  label="Email Address"
                  type="email"
                  placeholder="you@example.com"
                  rules={{ required: "Email is required" }}
                />
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-7">
                <Input name="number" label="Number" type="number" />
                <Input
                  name="subject"
                  label="Subject"
                  placeholder="Enter Keyword"
                />
              </div>
              <Input name="description" label="Description" />
              <button
                type="submit"
                className="w-full bg-blue-600 text-white py-2 !rounded hover:bg-blue-700 transition duration-200"
              >
                Send Message
              </button>
            </Form>
          </div>

          <div>
            <div className="mapouter relative text-right w-full h-96 rounded">
              <div className="gmap_canvas overflow-hidden bg-none w-full h-full mt-3 rounded">
                <iframe
                  className="w-full h-full rounded"
                  width="820"
                  height="760"
                  id="gmap_canvas"
                  src="https://maps.google.com/maps?q=636+5th+Ave%2C+New+York&t=&z=13&ie=UTF8&iwloc=&output=embed"
                  frameBorder="0"
                  scrolling="no"
                  marginHeight={0}
                  marginWidth={0}
                ></iframe>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* <ConatactUsAccordion /> */}

      <BecomePartner />
    </div>
  );
};

export default Contact;
