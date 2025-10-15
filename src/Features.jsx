import { FeatureCard } from "./FeatureCard";

export function Features({ dark }) {
  return (
    <section
      className={`flex flex-wrap gap-6 justify-center py-16 transition${
        dark ? "bg-gray-900" : " text-gray-50"
      }`}
    >
      <FeatureCard title="Inner peace" dark={dark}>
        Our website cares about your peace of mind !!
      </FeatureCard>
      <FeatureCard title="Safety" dark={dark}>
        Your personal data is secure.
      </FeatureCard>
      <FeatureCard title="Simplicity" dark={dark}>
        A simple, clear, and psychologically tailored design for you !
      </FeatureCard>
    </section>
  );
}
