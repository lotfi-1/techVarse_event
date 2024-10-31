/** @format */

import React from "react";

function CounterCard({ title, count }: CounterCardProps) {
  return (
    <div className="px-4 py-2.5 flex flex-col items-center justify-center">
      <span className="text-[28px] md:text-[40px] font-bold">
        {count < 10 ? `0${count}` : count}
      </span>
      <div>{title}</div>
    </div>
  );
}

export default React.memo(CounterCard);
