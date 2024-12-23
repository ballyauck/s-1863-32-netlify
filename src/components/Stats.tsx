const stats = [
  { number: "99%", label: "Customer Satisfaction" },
  { number: "24/7", label: "Support Available" },
  { number: "150+", label: "Countries Served" },
];

const Stats = () => {
  return (
    <section className="py-24 px-6 bg-[#3C8F69] text-white">
      <div className="max-w-7xl mx-auto">
        <div className="grid md:grid-cols-3 gap-12 text-center">
          {stats.map((stat, index) => (
            <div key={index} className="space-y-2">
              <div className="text-4xl md:text-5xl font-bold">{stat.number}</div>
              <div className="text-accent">{stat.label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Stats;