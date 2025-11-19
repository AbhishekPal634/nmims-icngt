import React from "react";
import InfoCard from "../components/ui/InfoCard";

const ImpDates = () => {
  const dates = [
    {
      label: "Call for full length paper/ abstract submission:",
      date: "To be announced soon",
    },
    {
      label: "Deadline for full length paper/abstract submission:",
      date: "To be announced soon",
    },
    { label: "Acceptance of abstract:", date: "To be announced soon" },
    { label: "Acceptance of full length paper:", date: "To be announced soon" },
    {
      label: "Last date of Early Bird Registration:",
      date: "To be announced soon",
    },
    { label: "Last date of Registration:", date: "To be announced soon" },
    { label: "Conference Dates:", date: "To be announced soon" },
  ];

  return (
    <div className="container mx-auto px-4 py-8 sm:px-6 md:px-8">
      <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold text-center mb-8 text-red-700">
        Important Dates
      </h1>

      <div className="prose max-w-none">
        <div className="space-y-4 mb-6">
          {dates.map((item, index) => (
            <InfoCard
              key={index}
              className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-2"
            >
              <p className="font-semibold text-sm md:text-base">{item.label}</p>
              <p className="text-sm md:text-base italic">{item.date}</p>
            </InfoCard>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ImpDates;
