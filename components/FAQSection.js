import Image from "next/image";
import Link from "next/link";

const FAQSection = () => {
  return (
    <section className="section w-full pb-base lg:pb-12">
      <div className="m-auto flex max-w-screen-2xl flex-col items-center md:items-start gap-8 px-6 py-20 md:px-10 lg:gap-[60px]">
        <div className="justify-left flex w-full max-w-lg flex-wrap gap-12 lg:gap-6 lg:max-w-none lg:items-end lg:justify-between">
          <h1 className="font-extrabold md:text-2xl w-full max-w-lg lg:text-[50px]">
            Got questions?<br /><br />We've got answers
          </h1>
          <div className="flex gap-3 overflow-x-scroll lg:gap-6 [&::-webkit-scrollbar]:w-0 [&::-webkit-scrollbar]:h-0">
            <button className="border-4 hover:border-[#004733] h-12 px-6 py-3 w-auto rounded-full font-bold">
              Our products
            </button>
            <button className="border-4 hover:border-[#004733] h-12 px-6 py-3 w-auto rounded-full font-bold">
              Calculators
            </button>
            <button className="border-4 hover:border-[#004733] h-12 px-6 py-3 w-auto rounded-full font-bold">
              Guides & FAQs
            </button>
          </div>
        </div>

        <div className="flex flex-wrap justify-center gap-6 lg:gap-6">
          
          <FAQCard
            title="Buying your first home with Better"
            imgSrc="/fonts/first-Home.webp"
            imgAlt="First Home"
            customClass="lg:w-[40%]"
            customClass1="lg:flex-col"
          />

         
          <FAQCard
            title="One Day Mortgage"
            imgSrc="/fonts/one.webp"
            imgAlt="One day mortgage"
            description="One Day Mortgage® offers you more certainty and kicks your home loan into hyperdrive: go from locked rate to Commitment Letter in a single day. Traditional lenders deliver a Commitment Letter in a few weeks.²"
            customClass="lg:w-[58%] flex-row-reverse"
          />

          <FAQCard
            title="Better HELOC"
            imgSrc="/fonts/image5.webp"
            imgAlt="Better HELOC"
            description="Introducing One Day HELOC™—your express lane to getting cash from your home with our Home Equity Line of Credit. Access up to 90% of your home equity as cash in as little as 7 days."
            customClass="lg:w-[58%]"
          />

          
          <FAQCard
            title="Insurance"
            imgSrc="/fonts/insurance.webp"
            imgAlt="Insurance"
            customClass="lg:w-[40%] flex-row-reverse"
          />
        </div>
      </div>
    </section>
  );
};

const FAQCard = ({ title, imgSrc, imgAlt, description, customClass }) => {
  const isSmallCard = customClass.includes("lg:w-[40%]");
  const customClass1 = isSmallCard ? "flex-col" : "lg:flex-row lg:justify-between";

  return (
    <Link href="/" className={`flex w-full cursor-pointer gap-6 rounded-2xl bg-[#F0F7F1] p-6 ${customClass} ${customClass1}`}>
      <div className="flex flex-col gap-4">
        <h2 className="font-bold text-xl md:text-2xl">{title}</h2>
        {description && <p className="text-sm text-gray-900">{description}</p>}
      </div>
      <Image src={imgSrc} alt={imgAlt} width={300} height={200} className="rounded-base h-[160px] md:h-[130px]" />
    </Link>
  );
};


export default FAQSection;
