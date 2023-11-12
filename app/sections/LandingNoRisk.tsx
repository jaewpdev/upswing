import Image from "next/image";
import { noRiskItems } from "../../src/static/noRiskItems";

export default function LandingNoRisk() {
  return (
    <section id="no-risk" className="pt-40 -mt-40">
      <div className="container mx-auto">
        <div className="gray-rounded-section">
          <div className="flex flex-col lg:flex-row gap-10 lg:gap-32 mb-4">
            <p className="sub-tag mt-4">What We Do</p>
            <h2>
              Accelerate Success with Our Guaranteed Appointment Booking and
              Risk-Free Growth Strategies
            </h2>
          </div>
          <div className="overflow-hidden w-full relative aspect-[16/6] rounded-[32px] mb-4">
            <Image
              objectFit="cover"
              objectPosition="10% 20%"
              fill
              src="/images/no-risk.jpg"
              alt=""
            />
          </div>
          <ul className=" grid-cols-1 md:grid-cols-2 lg:grid-cols-4 grid gap-4">
            {noRiskItems.map(({ title, description }) => (
              <li
                className="white-rounded-section"
                key={title}
              >
                
                <h3 className="md:max-w-[13ch] mt-auto mb-4 font-medium">
                  {title}
                </h3>
                <p>{description}</p>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}
