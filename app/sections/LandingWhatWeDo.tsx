import { whatWeDoItems } from "../../src/static/whatWeDoItems";

export default function LandingWhatWeDo() {
  return (
    <section id="what-we-do" className="pt-40 -mt-40 mb-10">
      <div className="container mx-auto">
        <div className="gray-rounded-section flex flex-col lg:flex-row gap-10 lg:gap-32">
          <p className="sub-tag mt-4">What We Do</p>

          <div>
            <h2>
              Boost growth with our data-driven lead capture and precise
              appointment setting
            </h2>
            <ul className="mt-10 grid gap-4">
              {whatWeDoItems.map(({ title, description }) => (
                <li
                  className="white-rounded-section flex justify-between"
                  key={title}
                >
                  <div>
                    <h2 className="mb-4">{title}</h2>
                    <p className="max-w-[60ch]">{description}</p>
                  </div>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
