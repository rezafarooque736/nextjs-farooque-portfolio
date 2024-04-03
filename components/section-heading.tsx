export default function SectionHeading({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <h2 className="mb-8 text-3xl font-medium text-center capitalize">
      {children}
    </h2>
  );
}
