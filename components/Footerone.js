"use client";

const Footerone = () => {
    return (
      <footer className="bg-white text-black font-bold py-10 px-6 lg:px-20">
        <div className="max-w-screen-2xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
          
          <div>
            <h2 className="text-3xl font-bold text-green-900">Better</h2>
            <p className="mt-4 text-sm">
              Better is a family of companies serving all your homeownership needs.
            </p>
            <div className="mt-6 space-y-4">
              {[
                { title: "Mortgage", desc: "We can’t wait to say 'Welcome home.' Apply 100% online, with expert customer support." },
                { title: "Real Estate", desc: "Connect with a local Better Real Estate Partner Agent to find out all the ways you can save." },
                { title: "Cover", desc: "Shop, bundle, and save on insurance coverage for home, auto, life, and more." },
                { title: "Inspect", desc: "Get free repair estimates, 24-hour turnarounds on reports, and rest easy with our 100-day inspection guarantee." },
                { title: "Settlement Services", desc: "Get transparent rates when you shop for title insurance all in one convenient place." },
              ].map((item, index) => (
                <div key={index}>
                  <h3 className="text-green-900 font-extrabold text-lg flex gap-x-2">Better  <p className="opacity-30">{item.title}</p></h3>
                  <p className="text-sm">{item.desc}</p>
                </div>
              ))}
            </div>
          </div>
  
          
          <div>
            <h3 className="font-extrabold text-lg">Resources</h3>
            <ul className="mt-4 space-y-2 text-sm">
              {[
                "Home affordability calculator",
                "Mortgage calculator",
                "Free mortgage calculator",
                "Mortgage calculator with taxes",
                "Mortgage calculator with PMI",
                "Rent vs buy calculator",
                "HELOC payment calculator",
                "HELOC vs cash-out refinance calculator",
                "Buy a home",
                "Sell a home",
                "Get home inspection",
              ].map((item, index) => (
                <li key={index} className="hover:underline cursor-pointer">{item}</li>
              ))}
            </ul>
          </div>
  
         
          <div>
            <h3 className="font-extrabold text-lg">Company</h3>
            <ul className="mt-4 space-y-2 text-sm text-black">
              {[
                "About Us",
                "Careers",
                "Media",
                "Partner With Us",
                "Learning center",
                "FAQs",
                "Investor Relations",
              ].map((item, index) => (
                <li key={index} className="hover:underline cursor-pointer">{item}</li>
              ))}
            </ul>
          </div>
  
          
          <div>
            <h3 className="font-bold text-lg">Contact Us</h3>
            <ul className="mt-4 space-y-2 text-sm">
              <li className="hover:underline cursor-pointer">hello@better.com</li>
              <li className="hover:underline cursor-pointer">415-523-8837</li>
              <li className="hover:underline cursor-pointer">FAQ</li>
              <li className="hover:underline cursor-pointer">Glossary</li>
            </ul>
  
            <h3 className="font-bold text-lg mt-6">Legal</h3>
            <ul className="mt-4 space-y-2 text-sm">
              {[
                "NMLS Consumer Access",
                "Privacy Policy",
                "Terms of Use",
                "Disclosures & Licensing",
                "Affiliated Business",
                "Browser",
              ].map((item, index) => (
                <li key={index} className="hover:underline cursor-pointer">{item}</li>
              ))}
            </ul>
          </div>
        </div>
      </footer>
    );
  };
  
  export default Footerone;
  