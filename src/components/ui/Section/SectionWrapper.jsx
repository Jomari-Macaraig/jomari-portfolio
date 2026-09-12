export default function SectionWrapper({ id, className = "", children }) {
  return (
    <section id={id} className={`px-6 sm:px-10 md:px-20 lg:px-40 pt-24 pb-12 ${className}`}>
      {children}
    </section>
  );
}
