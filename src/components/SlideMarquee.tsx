import Marquee from "@/src/components/ui/marquee";
import Star8 from "@/src/components/stars/s8";

export default function SlideMarquee() {
  const items = [
    <Star8
      color="white"
      width={50}
      height={50}
      stroke="black"
      strokeWidth={4}
    />,
    "AKMAL",
    <Star8
      color="white"
      width={50}
      height={50}
      stroke="black"
      strokeWidth={4}
    />,
    "AKMAL",
    <Star8
      color="white"
      width={50}
      height={50}
      stroke="black"
      strokeWidth={4}
    />,
    "AKMAL",
    <Star8
      color="white"
      width={50}
      height={50}
      stroke="black"
      strokeWidth={4}
    />,
    "AKMAL",
    <Star8
      color="white"
      width={50}
      height={50}
      stroke="black"
      strokeWidth={4}
    />,
    "AKMAL",
    <Star8
      color="white"
      width={50}
      height={50}
      stroke="black"
      strokeWidth={4}
    />,
    "AKMAL",
    <Star8
      color="white"
      width={50}
      height={50}
      stroke="black"
      strokeWidth={4}
    />,
    "AKMAL",
  ];

  return <Marquee items={items} />;
}
