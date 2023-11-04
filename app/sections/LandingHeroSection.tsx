import ArrowButton from "../components/ArrowButton";
import Button from "../components/Button";
import SocialMediaIcons from "../components/SocialMediaIcons";

export default function LandingHeroSection() {
  return (
    <section className="container mx-auto pt-10">

      <div className="sm:grid grid-rows-7 xl:grid-rows-8 grid-flow-col grid-cols-12 gap-4">

        <div className="gray-rounded-section hidden  md:col-start-1 md:row-start-2 md:col-span-6 md:row-span-1 xl:col-span-4 xl:row-span-1 md:flex flex-col xl:flex-row gap-4 xl:gap-8 items-center">
          <SocialMediaIcons />
          <div className="">
            <p>Expertise in latest platforms and technologies</p>
            <a className="text-brand-green hover:text-brand-black focus:text-brand-black cursor-pointer">
              <p>Check this out.</p>
            </a>
          </div>
        </div>

        <div className="gray-rounded-section hidden md:col-start-1 md:row-start-3 md:col-span-6 md:row-span-2 xl:col-span-4 xl:row-span-3 xl:row-start-2 md:flex flex-col">
          <p className="mb-10">
            Every business, big or small, deserves a towering online presence
            and a thicker bottom line—our bespoke strategies make sure of it.
          </p>
          <Button variant="secondary" className="mt-auto mr-auto">
            Get Started
          </Button>
        </div>

        <div className="col-span-12 row-span-1 col-start-1 row-start-1  xl:col-start-5 xl:col-span-8 xl:row-span-4 xl:pl-16 pb-16">
          <h1 className="mb-6">
            Accelerate Your
            <br /> Client <span className="italic font-medium">Growth</span>
          </h1>
          <div className="flex items-center">
            <p className="max-w-[30ch]">
              Savvy solutions for dominating online spaces and elevating profits
            </p>
            <div className="flex-auto h-[2px] bg-brand-gray mr-4" />
            <p className="max-w-[4ch]">EST. 2023</p>
          </div>
        </div>

        <div className=" col-start-1 row-start-2 row-span-2 md:col-start-7 md:row-start-2 col-span-6 md:row-span-3  xl:col-span-4 xl:row-span-4 xl:row-start-5 xl:pt-8 flex flex-col rounded-[32px] border-2 border-brand-black p-8 xl:p-0 xl:border-none">
          <h1 className=" mb-6 italic">100%</h1>

          <h4 className="mb-4 mt-auto">Guarantee</h4>
          <p>
            With unwavering confidence in our proven track record, we assure you
            that partnering with us comes with zero risk — only the promise of
            exceptional results.
          </p>
        </div>

        <div className="gray-rounded-section hidden md:col-span-6 md:row-span-3 md:col-start-1 md:row-start-5 xl:col-span-5 xl:row-span-4 xl:col-start-5 xl:row-start-5 xl:min-h-[400px] md:flex flex-col">
          <h3>
            With a keen specialization in digital excellence, we nurture{" "}
            <span className="italic font-semibold">businesses</span> to not just
            navigate but truly thrive amidst the complexities of the online
            world.
          </h3>
          <div className="flex justify-between mt-auto">
            <Button variant="outline">Learn More</Button>
            <ArrowButton size="sm" />
          </div>
        </div>

        <div className="green-rounded-section mt-6 sm:mt-0 col-start-7 row-start-2 row-span-2 col-span-6 md:row-span-3 xl:col-span-3 xl:row-span-4 xl:col-start-10 xl:row-start-5 flex flex-col">
          <h1 className=" mb-6 italic">20+</h1>
          <h4 className="mb-4 md:mt-auto">Booked Appointments</h4>
          <p className="font-extralight">
            Proven to secure steady appointment flows for your business.
          </p>
        </div>
      </div>
    </section>
  );
}
