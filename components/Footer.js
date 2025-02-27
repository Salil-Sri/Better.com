"use client";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSquareFacebook } from "@fortawesome/free-brands-svg-icons";
import { faInstagram } from "@fortawesome/free-brands-svg-icons";
import { faLinkedin } from "@fortawesome/free-brands-svg-icons";

import Link from "next/link";

const Footer = () => {
  return (
    <div className="mt-12 mx-14 text-black font-extrabold pb-11 ">
      <div className="flex gap-2 mb-3">
      <FontAwesomeIcon icon={faSquareFacebook} className="text-3xl text-black" />
      <FontAwesomeIcon icon={faInstagram} className="text-3xl text-black" />
      <FontAwesomeIcon icon={faLinkedin} className="text-3xl text-black" />
      </div>
      <p className="  m-0 p-0 text-left  text-sm">
        <sup>1</sup> Better Mortgage’s One Day Mortgage™ promotion offers
        qualified customers who provide certain required financial
        information/documentation to Better Mortgage within 4 hours of locking a
        rate on a mortgage loan the opportunity to receive an underwriting
        determination from Better Mortgage within 24 hours of their rate lock.
        The underwriting determination is subject to customary terms, including
        fraud and anti-money laundering checks, that take place pre-closing and
        which may trigger additional required documentation from the customer.
        Better Mortgage does not guarantee that initial underwriting approval
        will result in a final underwriting approval. See{" "}
        <Link
          className="font-normal underline focus:outline-interactivePrimary focus:outline-1 focus:outline-offset-[theme(spacing.2xs)] hover:text-interactivePrimary text-inherit"
          href="/with/one-day-mortgage-terms/"
        >
          One Day Mortgage™ Terms and Conditions.
        </Link>
      </p>

      <p className=" leading-body m-0 p-0 text-left text-textPrimary text-xs mt-3">
        <sup>2</sup>Better Mortgage’s One Day HELOC™ promotion offers qualified
        customers who provide certain required financial
        information/documentation to Better Mortgage within 4 hours of locking a
        rate on a HELOC loan the opportunity to receive an underwriting
        determination from Better Mortgage within 24 hours of their rate lock.
        The underwriting determination is subject to customary terms, including
        fraud and anti-money laundering checks, that take place pre-closing and
        which may trigger additional required documentation from the customer.
        Better Mortgage does not guarantee that initial underwriting approval
        will result in final underwriting approval. See{" "}
        <Link
          className=" underline focus:outline-interactivePrimary focus:outline-1 focus:outline-offset-[theme(spacing.2xs)] hover:text-interactivePrimary text-inherit"
          href="/b/better-mortgage-one-day-heloc-promotion-terms-and-conditions/"
        >
          One Day Heloc™ Terms and Conditions.
        </Link>
      </p>

      <p className=" leading-body m-0 p-0 text-left text-textPrimary text-xs mt-3">
        <sup>3</sup>Assumes borrowers are eligible for the Automated Valuation
        Model (AVM) to calculate their home value, their loan amount is less
        than $400,000, all required documents are uploaded to their Better
        Mortgage online account within 24 hours of application, closing is
        scheduled for the earliest available date and time, and a notary is
        readily available. Funding timelines may vary and may be longer if an
        appraisal is required to calculate a borrower’s home value.
      </p>

      <hr className="my-xl border-strokeBorder" />

      <p className=" leading-body m-0 p-0 text-left text-textPrimary text-xs">
        © 2025 Better Home & Finance Holding Company and/or its affiliates.
        Better is a family of companies. Better Mortgage Corporation provides
        home loans; Better Real Estate, LLC and Better Real Estate California
        Inc License # 02164055 provides real estate services; Better Cover, LLC
        sells insurance products; and Better Settlement Services provides title
        insurance services; and Better Inspect, LLC provides home inspection
        services. All rights reserved.
      </p>

      <p className=" leading-body m-0 p-0 text-left text-textPrimary text-xs mt-4">
        Home lending products offered by Better Mortgage Corporation. Better
        Mortgage Corporation is a direct lender. NMLS #330511. 1 World Trade
        Center, 80th Floor, New York, NY 10007. Loans made or arranged pursuant
        to a California Finance Lenders Law License. Not available in all
        states. Equal Housing Lender.{" "}
        <a
          className="underline"
          href="http://www.nmlsconsumeraccess.org/EntityDetails.aspx/COMPANY/330511"
          target="_blank"
          rel="noopener noreferrer"
        >
          NMLS Consumer Access
        </a>
      </p>

      <p className=" leading-body m-0 p-0 text-left text-textPrimary text-xs mt-4">
        Better Real Estate, LLC dba BRE, Better Home Services, BRE Services, LLC
        and Better Real Estate, and operating in the State of California through
        its wholly owned subsidiary Better Real Estate California Inc., is a
        licensed real estate brokerage and maintains its corporate headquarters
        at 325-41 Chestnut Street, Suite 826, Philadelphia, PA 19106. Here is a
        full listing of Better Real Estate, LLC’s{" "}
        <Link className="underline" href="/with/better-realestate-license/">
          license numbers
        </Link>
        . Better Real Estate, LLC provides access to real estate brokerage
        services via its nationwide network of partner brokerages and real
        estate agents (“Better Real Estate Partner Agents”). Equal Housing
        Opportunity. All rights reserved.
      </p>

      <p className=" leading-body m-0 p-0 text-left text-textPrimary text-xs mt-4">
        <a
          className="underline"
          href="https://www.dos.ny.gov/licensing/docs/FairHousingNotice_new.pdf"
          target="_blank"
          rel="noopener noreferrer"
        >
          New York State Housing and Anti-Discrimination Notice
        </a>
      </p>

      <p className=" leading-body m-0 p-0 text-left text-textPrimary text-xs mt-4">
        <a
          className="underline"
          href="https://media.better.com/pdfs/NYStandardizedOperatingProcedures.pdf"
          target="_blank"
          rel="noopener noreferrer"
        >
          New York Standard Operating Procedures
        </a>
      </p>

      <p className=" leading-body m-0 p-0 text-left text-textPrimary text-xs mt-4">
        Texas Real Estate Commission:{" "}
        <a
          className="underline"
          href="https://www.har.com/mhf/terms/dispBrokerInfo?sitetype=aws&cid=645736"
          target="_blank"
          rel="noopener noreferrer"
        >
          Information About Brokerage Services
        </a>{" "}
        |{" "}
        <a
          className="underline"
          href="https://www.trec.texas.gov/sites/default/files/pdf-forms/CN%201-4-1_1.pdf"
          target="_blank"
          rel="noopener noreferrer"
        >
          Consumer Protection Notice
        </a>
      </p>

      <p className=" leading-body m-0 p-0 text-left text-textPrimary text-xs mt-4">
        Better Settlement Services, LLC. 325-41 Chestnut Street, Suite 803,
        Philadelphia, PA 19106.
      </p>

      <p className=" leading-body m-0 p-0 text-left text-textPrimary text-xs mt-4">
        Homeowners insurance policies are offered through Better Cover, LLC, a
        Pennsylvania Resident Producer Agency. License #881593. 325-41 Chestnut
        Street, Suite 807, Philadelphia, PA 19106.
      </p>

      <p className=" leading-body m-0 p-0 text-left text-textPrimary text-xs mt-4">
        Better Mortgage Corporation, Better Real Estate, LLC, Better Settlement
        Services, LLC, Better Cover, LLC, Better Connect, and Better Inspect,
        LLC are separate operating subsidiaries of Better Home & Finance Holding
        Company. Each company is a separate legal entity operated and managed
        through its own management and governance structure as required by its
        state of incorporation, and applicable and legal and regulatory
        requirements. Products not available in all states.
      </p>
    </div>
  );
};

export default Footer;
