"use client";
import React from "react";
import dynamic from "next/dynamic";

// Define types for the AnimatedNumbers component props
interface AnimatedNumbersProps {
  animateToNumber: number;
  locale: string;
  className: string;
  configs: (idx: number) => { mass: number; friction: number; tensions: number };
}

// Dynamically import the AnimatedNumbers component correctly
const AnimatedNumbers = dynamic(() => import("react-animated-numbers").then(mod => mod.default), {
  ssr: false,
}) as React.ComponentType<AnimatedNumbersProps>; // Explicitly cast it as a React component type

// Define the type for achievement data
interface Achievement {
  metric: string;
  value: string;
  prefix?: string;
  postfix?: string;
}

const achievementsList: Achievement[] = [
  {
    metric: "Projects",
    value: "100",
    postfix: "+",
  },
  {
    prefix: "~",
    metric: "Users",
    value: "100,000",
  },
  {
    metric: "Awards",
    value: "7",
  },
  {
    metric: "Years",
    value: "5",
  },
];

const AchievementsSection: React.FC = () => {
  return (
    <div className="py-8 px-4 xl:gap-16 sm:py-16 xl:px-16">
      <div className="sm:border-[#33353F] sm:border rounded-md py-8 px-16 flex flex-col sm:flex-row items-center justify-between">
        {achievementsList.map((achievement, index) => (
          <div
            key={index}
            className="flex flex-col items-center justify-center mx-4 my-4 sm:my-0"
          >
            <h2 className="text-white text-4xl font-bold flex flex-row">
              {achievement.prefix}
              <AnimatedNumbers
                animateToNumber={parseInt(achievement.value.replace(/,/g, ""))}
                locale="en-US"
                className="text-white text-4xl font-bold"
                configs={(idx: number) => ({
                  mass: 1,
                  friction: 100,
                  tensions: 140 * (idx + 1),
                })}
              />
              {achievement.postfix}
            </h2>
            <p className="text-[#ADB7BE] text-base">{achievement.metric}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default AchievementsSection;
