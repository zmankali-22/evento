import H1 from "@/components/h1";
import { capitalize, getEvent, sleep } from "@/lib/utils";
import { Metadata } from "next";
import Image from "next/image";

type EventProps = {
  params: {
    slug: string;
  };
};

export async function generateMetadata({
  params,
}: EventProps): Promise<Metadata> {
  const slug = params.slug;

  const data = await getEvent(slug);

  return {
    title: data.name,
  };
}

export default async function EventPage({ params }: EventProps) {
  const slug = params.slug;


  return (
    <main>
      <section className="relative  overflow-hidden flex justify-center items-center py-14 md:py-20">
        <Image
          className="object-cover z-0 blur-2xl "
          src={data.imageUrl}
          alt="Event background image"
          fill
          quality={50}
          sizes="(max-width: 1280px) 100vw, 1280px"
        />
        <div className="z-1 relative flex flex-col  gap-6 lg:gap-x-16 lg:flex-row ">
          <Image
            src={data.imageUrl}
            alt={data.name}
            width={300}
            height={201}
            className="rounded-xl border-2 border-white/50 object-cover"
          />
          <div className="flex flex-col ">
            <p className="text-white/75 ">
              {new Date(data.date).toLocaleDateString("en-US", {
                weekday: "long",
                month: "long",
                day: "numeric",
              })}
            </p>

            <H1 className="mb-2 mt-1 whitespace-nowrap lg:text-5xl">
              {data.name}
            </H1>
            <p className="whitespace-nowrap text-xl text-white/75">
              Organised by{" "}
              <span className="italic">{data.organizerName}</span>
            </p>
            <button className="bg-white/20 text-lg capitalize bg-blur mt-5 lg:mt-auto w-[95vw] rounded-md border-white/10 border-2 sm:w-full py-2 state-effects">
              Get tickets
            </button>
          </div>
        </div>
      </section>
      <div className="min-h-[]75vh] text-center px-5 py-16">
        <Section>
          <SectionHeading>About this event</SectionHeading>
          <SectionContent>{data.description}</SectionContent>
        </Section>

        <Section>
          <SectionHeading>Location</SectionHeading>
          <SectionContent>{data.location}</SectionContent>
        </Section>
      </div>
    </main>
  );
}

function Section({ children }: { children: React.ReactNode }) {
  return <section className="mb-12">{children}</section>;
}

function SectionHeading({ children }: { children: React.ReactNode }) {
  return <h2 className="text-2xl mb-8">{children}</h2>;
}

function SectionContent({ children }: { children: React.ReactNode }) {
  return (
    <div className="max-w-4xl mx-auto text-lg leading-8 text-white/75">
      {children}
    </div>
  );
}
