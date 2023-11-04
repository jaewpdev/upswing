import ArrowButton from "../components/ArrowButton";
import Button from "../components/Button";
import SocialMediaIcons from "../components/SocialMediaIcons";

export default function LandingHeroSection() {
  return (
    <section className="container mx-auto pt-10">
      <div className="grid grid-rows-8 grid-flow-col grid-cols-12 gap-4">
        <div className="gray-rounded-section col-span-4 row-span-1 flex gap-8 items-center">
          <SocialMediaIcons />
          <div className="">
            <p>Expertise in latest platforms and technologies</p>
            <a className="text-brand-green hover:text-brand-black focus:text-brand-black cursor-pointer">
              <p>Check this out.</p>
            </a>
          </div>
        </div>

        <div className="gray-rounded-section col-span-4 row-span-3 row-start-2 flex flex-col">
          <p className="mb-10">
            Every business, big or small, deserves a towering online presence
            and a thicker bottom line—our bespoke strategies make sure of it.
          </p>
          <Button variant="secondary" className="mt-auto mr-auto">
            Get Started
          </Button>
        </div>

        <div className="col-start-5 col-span-8 row-span-4 pl-16 pb-16">
          <h1 className="text-9xl mb-6 font-light">
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
        <div className="col-span-4 row-span-4 row-start-5 pt-8 flex flex-col">
          <h2 className="text-9xl mb-6 font-light italic">100%</h2>

          <h4 className="mb-4 mt-auto">Guarantee</h4>
          <p>With unwavering confidence in our proven track record, we assure you that partnering with us comes with zero risk — only the promise of exceptional results.</p>
        </div>

        <div className="gray-rounded-section col-span-5 row-span-4 col-start-5 row-start-5 min-h-[400px] flex flex-col">
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

        <div className="green-rounded-section col-span-3 row-span-4 col-start-10 row-start-5 flex flex-col">
          <h2 className="text-9xl mb-6 font-light italic">20+</h2>
          <h4 className="mb-4 mt-auto">Booked Appointments</h4>
          <p className="font-extralight">
            Proven to secure steady appointment flows for your business.
          </p>
        </div>
      </div>
    </section>
  );
}
