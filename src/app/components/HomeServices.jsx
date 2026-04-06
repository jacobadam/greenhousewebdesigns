import HomeServicesCard from "./HomeServicesCard";
import LinkButton from "../ui/LinkButton";

export default function HomeServices() {
  return (
    <section className="w-full h-full py-24 md:py-0 flex items-center justify-center bg-background">
      <div className="max-w-7xl px-4 py-8 sm:px-6 sm:py-12 lg:px-8 lg:py-4">
        <div className="grid grid-cols-1 gap-y-8 lg:grid-cols-2 lg:items-center lg:gap-x-16">
          <div className="lg:w-4/5 flex flex-col items-center justify-center lg:items-start lg:justify-center mx-auto text-start lg:mx-0">
            <h1 className="text-3xl md:text-4xl xl:text-5xl font-bold mb-4 text-foreground text-center lg:text-left">
              Quality Design, Real Impact
            </h1>

            <p className="text-foreground/80 text-lg md:text-xl mb-6 max-w-sm text-center lg:text-left">
              Discover a range of solutions tailored to meet your business needs
            </p>

            <LinkButton href="/contact">Get a Quote</LinkButton>
          </div>

          <div>
            <HomeServicesCard />
          </div>
        </div>
      </div>
    </section>
  );
}
