import Container from "./Container";

type SectionProps = {
  children: React.ReactNode;
  className?: string;
};

export default function Section({
  children,
  className = "",
}: SectionProps) {
  return (
    <section
      className={`
        py-12
        md:py-16
        ${className}
      `}
    >
      <Container>{children}</Container>
    </section>
  );
}