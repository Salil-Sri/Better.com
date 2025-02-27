import Image from "next/image";

const AboutUs = () => {
  return (
    <div className="flex flex-col items-center w-full">
      {/* Hero Section */}
      <section className="w-full text-center py-16 px-6">
        <h2 className="text-green-700 font-semibold text-lg">Our mission</h2>
        <h1 className="text-4xl font-bold max-w-3xl mx-auto mt-4">
          We’re making homeownership simpler, faster — and most importantly, more accessible for all Americans.
        </h1>
      </section>

      {/* The Status Quo Section */}
      <section className="w-full flex flex-col md:flex-row items-center gap-8 max-w-5xl px-6 py-12">
        <div className="max-w-md">
          <h2 className="text-2xl font-bold">The status quo is broken</h2>
          <p className="text-gray-600 mt-4">
            Homeownership has been complicated for too long. Our goal is to make the process faster, simpler, and better for everyone.
          </p>
          <button className="bg-green-700 text-white px-6 py-3 rounded-full mt-4">
            Read more
          </button>
        </div>
        <Image src="/images/status-quo.jpg" alt="Status Quo" width={400} height={300} className="rounded-lg" />
      </section>

      {/* How We're Changing Things Section */}
      <section className="w-full bg-green-700 text-white py-16 text-center">
        <h2 className="text-3xl font-bold">How we're changing things</h2>
        <p className="max-w-3xl mx-auto mt-4 text-lg">
          We are simplifying the mortgage process with technology and customer-centric solutions.
        </p>
      </section>

      {/* Backed By Section */}
      <section className="w-full text-center py-12">
        <h2 className="text-2xl font-bold">Backed by</h2>
        <div className="flex justify-center gap-8 mt-6 flex-wrap">
          <Image src="/images/partner1.png" alt="Partner 1" width={100} height={50} />
          <Image src="/images/partner2.png" alt="Partner 2" width={100} height={50} />
          <Image src="/images/partner3.png" alt="Partner 3" width={100} height={50} />
        </div>
      </section>

      {/* Company Timeline */}
      <section className="w-full max-w-4xl px-6 py-12">
        <h2 className="text-center text-3xl font-bold">Company Timeline</h2>
        <div className="mt-8">
          {[
            { year: "2014", text: "Company founded, changing the mortgage industry." },
            { year: "2015", text: "Launched innovative home loan solutions." },
            { year: "2019", text: "Expanded nationwide with new services." },
            { year: "2021", text: "Achieved $100B+ in funded loans." },
            { year: "Today", text: "Continuing to revolutionize homeownership." },
          ].map((event, index) => (
            <div key={index} className="flex items-center gap-4 mb-6">
              <span className="bg-green-700 text-white px-4 py-2 rounded-full">{event.year}</span>
              <p className="text-gray-700">{event.text}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Footer */}
      <footer className="w-full bg-gray-100 py-12 text-center">
        <h2 className="text-xl font-bold">Better</h2>
        <p className="text-gray-600 mt-2">© {new Date().getFullYear()} All Rights Reserved.</p>
      </footer>
    </div>
  );
};

export default AboutUs;
