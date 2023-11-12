import ArrowButton from "../../src/components/ArrowButton";
import Button from "../../src/components/Button";
import { aboutItems } from "../../src/static/aboutItems";

export default function LandingAboutUs() {
  return (
    <section id="about-us" className=" pt-40 -mt-40 mb-10">
      <div className="container mx-auto ">
        <div className="flex flex-col md:flex-row gap-10 md:gap-20 lg:gap-32 gray-rounded-section mb-4">
          <div className="flex flex-col justify-between md:py-4">
            <p className="sub-tag">About Upswing</p>
            <Button className="hidden md:flex" href="/contact">Let&apos;s Connect</Button>
          </div>

          <h2 className="">
            At Upswing, we&apos;re a collective of digital marketing savvy,
            united by a mission to drive your business forward. Leveraging
            advanced strategies and a deep market insight, we deliver a
            noticeable lift to your online visibility and revenue.
          </h2>

          <Button className="md:hidden">Let&apos;s Connect</Button>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
          {aboutItems.map(({ heading, description }, index) => (
            <div
              className={
                index !== 1 ? "gray-rounded-section" : "green-rounded-section"
              }
              key={heading}
            >
              <ArrowButton
                className="ml-auto lg:mb-20"
                direction="up"
                color={index !== 1 ? "black" : "white"}
              />
              <h3 className="max-w-[13ch] mt-auto mb-4 font-medium">{heading}</h3>
              <p>{description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
