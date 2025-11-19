import React from "react";
import InfoCard from "../components/ui/InfoCard";

const Publication = () => {
  const highlights = [
    {
      title: "Publisher",
      content: "Taylor and Francis (T&F)",
    },
    {
      title: "Format",
      content: "Print and Electronic",
    },
    {
      title: "Identifiers",
      content: "ISBN for book, DOI for each chapter",
    },
    {
      title: "Indexing",
      content: "Will be advocated for Scopus indexing",
    },
  ];

  return (
    <div className="container mx-auto px-4 py-8 sm:px-6 md:px-8">
      <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold text-center mb-8 text-red-700">
        Publication and Review Process
      </h1>

      {/* Full Length Paper Publication */}
      <section className="mb-8">
        <h2 className="text-xl sm:text-2xl font-semibold mb-4 text-red-700">
          Full Length Paper Publication
        </h2>
        <p className="text-base md:text-lg mb-4 text-justify leading-relaxed">
          Taylor and Francis (T&F) constitute a prominent global publishing
          enterprise that is committed to rendering high-calibre research
          comprehensible and accessible to individuals worldwide, thereby
          facilitating the convergence of diverse individuals, concepts, and
          perspectives to disseminate the insights of experts, theoretical
          frameworks, and empirical truths.
        </p>
        <p className="text-base md:text-lg mb-4 text-justify leading-relaxed">
          All full-length papers that receive acceptance at the ICNGT-2025
          Conference will be compiled in a conference proceeding published by
          Taylor and Francis (T&F) in both print and electronic formats, each
          possessing an ISBN for the book and a DOI for each respective chapter,
          along with promotional activities on the T&F website.
        </p>
        <p className="text-base md:text-lg text-justify leading-relaxed">
          T&F will advocate for the published volume to be considered for
          indexing by Scopus, contingent upon adherence to Scopus's selection
          criteria and the fulfillment of the scope and quality standards
          requisite for Scopus Indexing.
        </p>

        {/* Highlights Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mt-6">
          {highlights.map((item, index) => (
            <InfoCard key={index} className="text-center">
              <h3 className="font-semibold text-red-700 mb-2">{item.title}</h3>
              <p className="text-sm">{item.content}</p>
            </InfoCard>
          ))}
        </div>
      </section>

      {/* Abstract Publication */}
      <section className="mb-8">
        <h2 className="text-xl sm:text-2xl font-semibold mb-4 text-red-700">
          Abstract Publication
        </h2>
        <p className="text-base md:text-lg text-justify leading-relaxed">
          Abstracts of presentations (oral/posters) will be published in
          conference souvenir cum abstract book.
        </p>
      </section>

      {/* Best Paper Award */}
      <section className="mb-8">
        <h2 className="text-xl sm:text-2xl font-semibold mb-4 text-red-700">
          Best Paper Award and Appreciation
        </h2>
        <p className="text-base md:text-lg text-justify leading-relaxed">
          Best Paper Award and Appreciation certificate will be given for the
          best oral and poster presentation in the conference.
        </p>
      </section>

      {/* Review Process */}
      <section className="mb-8">
        <h2 className="text-xl sm:text-2xl font-semibold mb-4 text-red-700">
          Review Process
        </h2>
        <p className="text-base md:text-lg mb-4 text-justify leading-relaxed">
          A panel of editorial board will conduct double-blind review for each
          of the contributed papers and abstracts. After review of the
          papers/abstracts by an editorial board, acceptance/reviewers' comments
          will be sent to the communicating author.
        </p>
        <p className="text-base md:text-lg text-justify leading-relaxed">
          All accepted papers/abstracts shall be presented as (oral/posters) at
          the conference.
        </p>
      </section>

      {/* Note */}
      <div className="bg-yellow-50 border-l-4 border-yellow-400 p-4 rounded">
        <p className="text-sm md:text-base text-justify">
          <strong>Note:</strong> After review of the papers by editorial board,
          acceptance/reviewers comments will be sent to the corresponding
          author.
        </p>
      </div>
    </div>
  );
};

export default Publication;
