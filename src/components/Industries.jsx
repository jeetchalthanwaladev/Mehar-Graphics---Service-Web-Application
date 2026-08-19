// src/components/Industries.jsx

import React from "react";

// Helper to render consistent icons
const Icon = ({ path }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    fill="none"
    viewBox="0 0 24 24"
    strokeWidth={1.5}
    stroke="currentColor"
    className="industry-icon-svg"
  >
    {path}
  </svg>
);

export default function Industries() {
  // Row 1 Data
  const row1 = [
    {
      id: 11,
      title: "Retail Stores",
      desc: "Showrooms & Supermarkets",
      path: <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 21v-7.5a.75.75 0 01.75-.75h3a.75.75 0 01.75.75V21m-4.5 0H2.36m11.14 0H18m0 0h3.64m-1.39 0V9.349m-16.5 11.65V9.35m0 0a3.001 3.001 0 003.75-.615A2.993 2.993 0 009.75 9.75c.896 0 1.7-.393 2.25-1.016a2.993 2.993 0 002.25 1.016c.896 0 1.7-.393 2.25-1.016a3.001 3.001 0 003.75.614m-16.5 0a3.004 3.004 0 01-.621-4.72L4.318 3.44A1.5 1.5 0 015.378 3h13.243a1.5 1.5 0 011.06.44l1.19 1.189a3 3 0 01-.621 4.72m-13.5 8.65h3.75a.75.75 0 00.75-.75V13.5a.75.75 0 00-.75-.75H6.75a.75.75 0 00-.75.75v3.75c0 .415.336.75.75.75z" />
    },
    {
      id: 12,
      title: "Real Estate",
      desc: "Builders & Architects",
      path: <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 21h19.5m-18-18v18m10.5-18v18m6-13.5V21M6.75 6.75h.75m-.75 3h.75m-.75 3h.75m3-6h.75m-.75 3h.75m-.75 3h.75M6.75 21v-3.375c0-.621.504-1.125 1.125-1.125h3.75c.621 0 1.125.504 1.125 1.125V21M3 3h12m-.75 4.5H21m-3.75 3.75h.008v.008h-.008v-.008zm0 3h.008v.008h-.008v-.008zm0 3h.008v.008h-.008v-.008z" />
    },
    {
      id: 13,
      title: "Automotive",
      desc: "Service Centers & Showrooms",
      path: <path strokeLinecap="round" strokeLinejoin="round" d="M8.25 18.75a1.5 1.5 0 01-3 0m3 0a1.5 1.5 0 00-3 0m3 0h6m-9 0H3.375a1.125 1.125 0 01-1.125-1.125V14.25m17.25 4.5a1.5 1.5 0 01-3 0m3 0a1.5 1.5 0 00-3 0m3 0h1.125c.621 0 1.129-.504 1.09-1.124a17.902 17.902 0 00-3.213-9.193 2.056 2.056 0 00-1.58-.86H14.25M16.5 18.75h-2.25m0-11.177v-.958c0-.568-.422-1.048-.987-1.106a48.554 48.554 0 00-10.026 0 1.106 1.106 0 00-.987 1.106v7.635m12-6.677v6.677m0 4.5v-4.5m0 0h-12" />
    },
    {
      id: 14,
      title: "Hospitality",
      desc: "Restaurants, Cafes & Hotels",
      path: <path strokeLinecap="round" strokeLinejoin="round" d="M9.75 9.75l4.5 4.5m0-4.5l-4.5 4.5M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
    },
    {
      id: 15,
      title: "Corporate Offices",
      desc: "IT & Business Parks",
      path: <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 21h16.5M4.5 3h15M5.25 3v18m13.5-18v18M9 6.75h1.5m-1.5 3h1.5m-1.5 3h1.5m3-6H15m-1.5 3H15m-1.5 3H15M9 21v-3.375c0-.621.504-1.125 1.125-1.125h3.75c.621 0 1.125.504 1.125 1.125V21" />
    },
    {
      id: 16,
      title: "Events & Expos",
      desc: "Organizers & Wedding Planners",
      path: <path strokeLinecap="round" strokeLinejoin="round" d="M6.75 3v2.25M17.25 3v2.25M3 18.75V7.5a2.25 2.25 0 012.25-2.25h13.5A2.25 2.25 0 0121 7.5v11.25m-18 0A2.25 2.25 0 005.25 21h13.5A2.25 2.25 0 0021 18.75m-18 0v-7.5A2.25 2.25 0 015.25 9h13.5A2.25 2.25 0 0121 11.25v7.5m-9-6h.008v.008H12v-.008zM12 15h.008v.008H12V15zm0 2.25h.008v.008H12v-.008zM9.75 15h.008v.008H9.75V15zm0 2.25h.008v.008H9.75v-.008zM7.5 15h.008v.008H7.5V15zm0 2.25h.008v.008H7.5v-.008zm6.75-4.5h.008v.008h-.008v-.008zm0 2.25h.008v.008h-.008V15zm0 2.25h.008v.008h-.008v-.008zm2.25-4.5h.008v.008H16.5v-.008zm0 2.25h.008v.008H16.5V15z" />
    },
    {
      id: 17,
      title: "Education",
      desc: "Schools & Universities",
      path: <path strokeLinecap="round" strokeLinejoin="round" d="M4.26 10.147a60.436 60.436 0 00-.491 6.347A48.627 48.627 0 0112 20.904a48.627 48.627 0 018.232-4.41 60.46 60.46 0 00-.491-6.347m-15.482 0a50.57 50.57 0 00-2.658-.813A59.905 59.905 0 0112 3.493a59.902 59.902 0 0110.499 5.216c-1.5.836-3.045 1.58-4.63 2.227L12 11.25l-7.239-1.103zM3.924 17.5v.375a2.25 2.25 0 002.25 2.25h11.652a2.25 2.25 0 002.25-2.25V17.5" />
    },
    {
      id: 18,
      title: "Healthcare",
      desc: "Hospitals, Clinics & Pharma",
      path: <path strokeLinecap="round" strokeLinejoin="round" d="M12 9v6m3-3H9m12 0a9 9 0 11-18 0 9 9 0 0118 0z" />
    },
    {
      id: 19,
      title: "Finance",
      desc: "Banks & Insurance",
      path: <path strokeLinecap="round" strokeLinejoin="round" d="M12 6v12m-3-2.818l.879.659c1.171.879 3.07.879 4.242 0 1.172-.879 1.172-2.303 0-3.182C13.536 12.219 12.768 12 12 12c-.725 0-1.45-.22-2.003-.659-1.106-.879-1.106-2.303 0-3.182s2.9-.879 4.006 0l.415.33M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
    },
    {
      id: 20,
      title: "Fitness",
      desc: "Gyms & Studios",
      path: <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 13.5l10.5-11.25L12 10.5h8.25L9.75 21.75 12 13.5H3.75z" />
    },
  ];

  // Row 2 Data
  const row2 = [
    {
      id: 31,
      title: "Beauty & Wellness",
      desc: "Salons & Spas",
      path: <path strokeLinecap="round" strokeLinejoin="round" d="M9.813 15.904L9 18.75l-.813-2.846a4.5 4.5 0 00-3.09-3.09L2.25 12l2.846-.813a4.5 4.5 0 003.09-3.09L9 5.25l.813 2.846a4.5 4.5 0 003.09 3.09L15.75 12l-2.846.813a4.5 4.5 0 00-3.09 3.09zM18.259 8.715L18 9.75l-.259-1.035a3.375 3.375 0 00-2.455-2.456L14.25 6l1.036-.259a3.375 3.375 0 002.455-2.456L18 2.25l.259 1.035a3.375 3.375 0 002.456 2.456L21.75 6l-1.035.259a3.375 3.375 0 00-2.456 2.456zM16.894 20.567L16.5 21.75l-.394-1.183a2.25 2.25 0 00-1.423-1.423L13.5 18.75l1.183-.394a2.25 2.25 0 001.423-1.423l.394-1.183.394 1.183a2.25 2.25 0 001.423 1.423l1.183.394-1.183.394a2.25 2.25 0 00-1.423 1.423z" />
    },
    {
      id: 32,
      title: "Entertainment",
      desc: "Film Production & Media",
      path: <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 10.5V6a3.75 3.75 0 10-7.5 0v4.5m11.356-1.993l1.263 12c.07.665-.45 1.243-1.119 1.243H4.25a1.125 1.125 0 01-1.12-1.243l1.264-12A1.125 1.125 0 015.513 7.5h12.974c.576 0 1.059.435 1.119 1.007zM8.625 10.5a.375.375 0 11-.75 0 .375.375 0 01.75 0zm7.5 0a.375.375 0 11-.75 0 .375.375 0 01.75 0z" />
    },
    {
      id: 33,
      title: "Logistics",
      desc: "Transport & Shipping",
      path: <path strokeLinecap="round" strokeLinejoin="round" d="M8.25 18.75a1.5 1.5 0 01-3 0m3 0a1.5 1.5 0 00-3 0m3 0h6m-9 0H3.375a1.125 1.125 0 01-1.125-1.125V14.25m17.25 4.5a1.5 1.5 0 01-3 0m3 0a1.5 1.5 0 00-3 0m3 0h1.125c.621 0 1.129-.504 1.09-1.124a17.902 17.902 0 00-3.213-9.193 2.056 2.056 0 00-1.58-.86H14.25M16.5 18.75h-2.25m0-11.177v-.958c0-.568-.422-1.048-.987-1.106a48.554 48.554 0 00-10.026 0 1.106 1.106 0 00-.987 1.106v7.635m12-6.677v6.677m0 4.5v-4.5m0 0h-12" />
    },
    {
      id: 34,
      title: "Travel",
      desc: "Tour & Agencies",
      path: <path strokeLinecap="round" strokeLinejoin="round" d="M12.75 3.03v.568c0 .334.148.65.405.864l1.068.89c.442.369.535 1.01.216 1.49l-.51.766a2.25 2.25 0 01-1.161.886l-.143.048a1.107 1.107 0 00-.57 1.664c.369.555.169 1.307-.413 1.68l-1.225.956a1.5 1.5 0 00-.599 1.579l.26.953c.154.564.496 1.05.95 1.343l1.168.787a1.5 1.5 0 001.597.043l.635-.41c.64-.407 1.488-.13 1.83.612.324.708.824 1.325 1.455 1.786.877.63 1.951.78 2.946.347A9.006 9.006 0 0112 21.75M12.75 3.03A9 9 0 0121 12m-8.25-8.97G12 3a9 9 0 00-9 9 9 9 0 003.5 7.15m7.5-16.12l.75-2.25m0 0h3.75a.75.75 0 01.75.75V13.5a.75.75 0 01-.75.75H13.5a.75.75 0 01-.75-.75V6.75a.75.75 0 01.75-.75z" />
    },
    {
      id: 35,
      title: "Manufacturing",
      desc: "Industrial Units",
      path: <path strokeLinecap="round" strokeLinejoin="round" d="M10.34 15.84c-.688-.06-1.386-.09-2.09-.09H7.5a4.5 4.5 0 110-9h.75c.704 0 1.402-.03 2.09-.09m0 9.18c.253.962.584 1.892.985 2.783A24.967 24.967 0 0121 9.75 24.967 24.967 0 019.25 3h2.325c.704 0 1.402.03 2.09.09m0-9.18c.253-.962.584-1.892.985-2.783A24.969 24.969 0 009.25 21h-2.325" />
    },
    {
      id: 36,
      title: "Government",
      desc: "Offices & NGOs",
      path: <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 21h19.5m-18-18v18m10.5-18v18m6-13.5V21M6.75 6.75h.75m-.75 3h.75m-.75 3h.75m3-6h.75m-.75 3h.75m-.75 3h.75M6.75 21v-3.375c0-.621.504-1.125 1.125-1.125h3.75c.621 0 1.125.504 1.125 1.125V21" />
    },
    {
      id: 37,
      title: "Fashion",
      desc: "Apparel Brands",
      path: <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 6a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0zM4.501 20.118a7.5 7.5 0 0114.998 0A17.933 17.933 0 0112 21.75c-2.676 0-5.216-.584-7.499-1.632z" />
    },
    {
      id: 38,
      title: "Marketing",
      desc: "Advertising Agencies",
      path: <path strokeLinecap="round" strokeLinejoin="round" d="M10.34 15.84c-.688-.06-1.386-.09-2.09-.09H7.5a4.5 4.5 0 110-9h.75c.704 0 1.402-.03 2.09-.09m0 9.18c.253.962.584 1.892.985 2.783A24.967 24.967 0 0121 9.75 24.967 24.967 0 019.25 3h2.325c.704 0 1.402.03 2.09.09m0-9.18c.253-.962.584-1.892.985-2.783A24.969 24.969 0 009.25 21h-2.325" />
    },
    {
      id: 39,
      title: "Interiors",
      desc: "Designers & Architects",
      path: <path strokeLinecap="round" strokeLinejoin="round" d="M6 6.878V6a2.25 2.25 0 012.25-2.25h7.5A2.25 2.25 0 0118 6v.878m-12 0c.235-.083.487-.128.75-.128h10.5c.263 0 .515.045.75.128m-12 0A2.25 2.25 0 004.5 9v.878m13.5-3A2.25 2.25 0 0119.5 9v.878m0 0a2.246 2.246 0 00-.75-.128H5.25c-.263 0-.515.045-.75.128m15 0A2.25 2.25 0 0121 12v6a2.25 2.25 0 01-2.25 2.25H5.25A2.25 2.25 0 013 18v-6c0-.98.626-1.813 1.5-2.122" />
    },
    {
      id: 40,
      title: "Hotels",
      desc: "Resorts & Event Halls",
      path: <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 21h19.5m-18-18v18m10.5-18v18m6-13.5V21M6.75 6.75h.75m-.75 3h.75m-.75 3h.75m3-6h.75m-.75 3h.75m-.75 3h.75M6.75 21v-3.375c0-.621.504-1.125 1.125-1.125h3.75c.621 0 1.125.504 1.125 1.125V21" />
    },
  ];

  // Component for a single industry card
  const IndustryCard = ({ item }) => (
    <div className="industry-card">
      <div className="icon-box">
        <Icon path={item.path} />
      </div>
      <h4>{item.title}</h4>
      <p>{item.desc}</p>
    </div>
  );

  return (
    <section className="industries-marquee">
      <div className="container" style={{ maxWidth: '100%' }}>
        <h2 className="industries-marquee__title">Sectors We Support</h2>
        <p className="industries-marquee__sub">
          Navigating the complex requirements of different industries requires a
          partner who understands the big picture. We offer specialized
          end-to-end support for these diverse sectors.
        </p>

        <div className="marquee-wrapper">
          {/* Row 1 - Forward */}
          <div className="marquee-track">
            {row1.map((item) => (
              <IndustryCard key={item.id} item={item} />
            ))}
            {/* Duplicate for infinite loop */}
            {row1.map((item) => (
              <IndustryCard key={`dup-${item.id}`} item={item} />
            ))}
          </div>

          {/* Row 2 - Reverse */}
          <div className="marquee-track reverse">
            {row2.map((item) => (
              <IndustryCard key={item.id} item={item} />
            ))}
            {/* Duplicate for infinite loop */}
            {row2.map((item) => (
              <IndustryCard key={`dup-${item.id}`} item={item} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
