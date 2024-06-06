"use client"

import CountUp from "react-countup";

const stats = [
    {
        num: 2,
        text: "Years of experience",
    },
    {
        num: 5,
        text: "Projects completed",
    },
    {
        num: 300,
        text: "Satisfied clients",
    },
];

const Stats = () => {
  return (
    <section className="pt-4 pb-12 xl:pt-0 xl:pb-0">
      <div className="container mx-auto">
        {/* Adjust the flex container for better spacing and alignment */}
        <div className="flex flex-wrap gap-8 justify-center xl:justify-between max-w-[80vw] mx-auto xl:max-w-none">
            {stats.map((item, index) => {
                return (
                    <div
                      className="flex-1 flex flex-col items-center xl:items-start gap-2"
                      key={index}
                    >
                        {/* Center the CountUp component and adjust its size responsively */}
                        <CountUp
                          end={item.num}
                          duration={5}
                          delay={2}
                          className="text-4xl xl:text-6xl font-extrabold"
                        />
                        {/* Use max-w-full for better responsiveness and consistent spacing */}
                        <p className={`text-center xl:text-left ${item.text.length < 15 ? "max-w-[100px]" : "max-w-[150px]"} leading-snug text-white/80`}>
                          {item.text}
                        </p>
                    </div>
                );
            })}
        </div>
      </div>
    </section>
  );
}

export default Stats;
