import React from "react";

const advisoryMembers = [
  { name: 'Mr. Amrishbhai R. Patel', role: 'Chancellor, SVKM\'s NMIMS & President, SVKM' },
  { name: 'Mr. Bhupeshbhai R. Patel', role: 'Joint President, SVKM' },
  { name: 'Mr. Rajgopal Bhandari', role: 'Managing Committee Member, SVKM & Mentor, MPTP Shirpur Campus' },
  { name: 'Mrs. Rita Patel', role: 'Incharge, NMIMS Shirpur Campus' },
  { name: 'Dr. Ramesh Bhat', role: 'Vice Chancellor, SVKM\'s NMIMS' },
  { name: 'Dr. Jayant Gandhi', role: 'Hon. Secretary, SVKM' },
  { name: 'Dr. M.N. Welling', role: 'Advisor to the President - SVKM & to Chancellor - NMIMS' },
  { name: 'Dr. Sharad Mhaiskar', role: "Pro-Vice Chancellor, SVKM's NMIMS" },
  { name: 'Dr. Meena Chintamaneni', role: "Pro-Vice Chancellor, SVKM's NMIMS" },
  { name: 'Dr. Abhishek Ranjan', role: "Pro-Vice Chancellor, SVKM's NMIMS" },
  { name: 'Dr. Rajan Welukar', role: 'Vice Chancellor, ATLAS Skill Tech University, India' },
  { name: 'Dr. Sunil Bhirud', role: 'Vice Chancellor, COEP Technological University, Pune, India' },
  { name: 'Dr. Prashant kumar Patil', role: 'Vice Chancellor, Mahatma Phule Krishi Veedyapeeth, Rahuri' },
  { name: 'Dr Sachin Bhagwat', role: 'Chief Scientific Officer, Wockhardt, Chartapati Sambhaji Nagar, Maharashtra' },
  { name: 'Dr. Pratapsinh K. Desai', role: 'President, ISTE, New Delhi' },
  { name: 'Dr. Kavi Arya', role: 'Professor, IIT Bombay' },
  { name: 'Mr. Hemat Aiyer', role: 'Vice President, Nuvoco Vistas Corp., Mumbai' },
  { name: 'Mr. Deepak Talwar', role: 'Former National Security Officer, Microsoft; Board Advisor - Start-ups & Academia' },
  { name: 'Dr. Ajay Khopade', role: 'Vice President, R&D, Sun Pharmaceutical Industries Limited, Vadodara' },
  { name: 'Dr Saranjit Singh', role: 'Ex Professor, NIPER, Mohali' },
  { name: 'Dr. Mukul Jain', role: 'President, Zydus Research Centre, Cadila Healthcare Ltd., Ahmedabad' },
  { name: 'Dr Navin Vaya', role: 'Senior Director, Formulation Development at Apotex, Toronto, Ontario' },
  { name: 'Dr. Samrat Mukhopadhyay', role: 'Professor, IIT Delhi' },
  { name: 'Dr. Ravindra Kale', role: 'Professor, ICT Mumbai' }
];

const Advisory = () => {
  return (
    <div className="container mx-auto px-4 py-8 sm:px-6 md:px-8">
      <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold text-center mb-8 text-red-700">
        Program Advisory Committee
      </h1>

      <div className="max-w-5xl mx-auto">
        <ul className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          {advisoryMembers.map((m, i) => (
            <li key={i} className="p-4 bg-white rounded-lg shadow-sm border">
              <div className="text-sm font-semibold text-slate-800">{m.name}</div>
              <div className="text-xs text-slate-500 mt-1">{m.role}</div>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default Advisory;
