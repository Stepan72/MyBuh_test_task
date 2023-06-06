"use client";
import React, { useState, useEffect } from "react";
import FirmCard from "@/components/FirmCard";
const data = [1, 2, 3, 4, 5, 6, 7];
import { companies } from "@/data/companies";

export default function Home() {
  const [firmsData, setFirmsData] = useState(companies);

  console.log(firmsData);
  return (
    <div className="flex flex-col">
      <header className="m-10 mt-20">
        <h1 className="text-center">Мои организации</h1>
      </header>
      <div id="container" className="mx-64 flex flex-wrap gap-2">
        {firmsData.map((el, index) => {
          return (
            <FirmCard
              key={el.company_id}
              name={el.company_name}
              innNumber={el.company_tin}
              logo={el.logo}
            />
          );
        })}
      </div>
    </div>
  );
}
