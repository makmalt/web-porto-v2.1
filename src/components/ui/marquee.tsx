export default function Marquee({ items }: { items: React.ReactNode[] }) {
  return (
    <div className="relative flex w-full overflow-x-hidden border-b-2 border-t-2 border-border bg-secondary-background text-foreground font-base">
      <div className="animate-marquee whitespace-nowrap py-1 flex items-center">
        {items.map((item, index) => (
          <span key={index} className="mx-2 text-4xl inline-flex items-center">
            {item}
          </span>
        ))}
      </div>

      <div className="absolute top-0 animate-marquee2 whitespace-nowrap py-1 flex items-center">
        {items.map((item, index) => (
          <span key={index} className="mx-2 text-4xl inline-flex items-center">
            {item}
          </span>
        ))}
      </div>
    </div>
  );
}
