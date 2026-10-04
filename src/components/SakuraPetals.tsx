const petals = [
  { left: "6%", delay: "0s", duration: "24s", size: 10 },
  { left: "18%", delay: "5s", duration: "30s", size: 7 },
  { left: "34%", delay: "11s", duration: "26s", size: 12 },
  { left: "52%", delay: "2s", duration: "33s", size: 8 },
  { left: "68%", delay: "8s", duration: "28s", size: 11 },
  { left: "81%", delay: "14s", duration: "35s", size: 7 },
  { left: "93%", delay: "4s", duration: "27s", size: 9 },
];

export function SakuraPetals() {
  return (
    <div aria-hidden className="pointer-events-none absolute inset-0 overflow-hidden">
      {petals.map((p, i) => (
        <span
          key={i}
          className="animate-drift absolute top-0 block rounded-[60%_40%_60%_40%] bg-sakura/70"
          style={{
            left: p.left,
            width: p.size,
            height: p.size * 0.75,
            animationDelay: p.delay,
            animationDuration: p.duration,
          }}
        />
      ))}
    </div>
  );
}
