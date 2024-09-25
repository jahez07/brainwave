import { benefits } from "../constants";
import Heading from "./Heading";
import Section from "./Section";

const Benefits = () => {
  return (
    <Section id="features">
      <div className="container relative z-2">
        <Heading
          className="md:max-w-mg lg:max-w-2xl"
          title="Chat Smarter, Not Harder with Brainwave"
        />
      </div>

      <div className="flex flex-wrap gap-10 mb-10">{benefits}</div>
    </Section>
  );
};

export default Benefits;
