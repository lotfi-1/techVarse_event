/** @format */

import Footer from "@/components/landing/Footer";
import Header from "@/components/landing/Header";
import RegisterForm from "@/components/ui/forms/RegisterForm";

export default function Page() {
  return (
    <div>
      <Header />
      <div className="flex flex-col lg:flex-row lg:justify-evenly gap-x-20 gap-y-[52px] px-6 md:px-16 mt-10 pb-28">
        <div className="max-w-[700px] lg:max-w-[500px]">
          <h3 className="text-[31px] font-bold mb-2">
            Join the Future of cybersecurity and Computer Science
          </h3>
          <p>
            Register now to be a part of the exclusive event where industry
            leaders and enthusiasts converge to shape the future.
          </p>
        </div>
        <div className="w-full flex justify-center items-center">
          <RegisterForm />
        </div>
      </div>
      <Footer />
    </div>
  );
}
