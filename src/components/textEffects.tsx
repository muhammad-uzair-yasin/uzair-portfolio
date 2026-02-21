import { TypeAnimation } from "react-type-animation";

const TextEffect = () => {
  return (
    <TypeAnimation
      sequence={[
        "AI Agentic Developer",
        1500,
        "Software Engineer",
        1500,
        "Backend Developer",
        1500,
      ]}
      speed={50}
      className="text-[2rem] md:text-[3rem]  text-blue-500 font-bold"
      repeat={Infinity}
    />
  );
};

export default TextEffect;
