import Navigation from "./Navigation";
import CTAButton from "./ui/CTAButton";
import HomeButton from "./ui/HomeButton";

export default function Header() {
  return (
    <div className="px-50 py-5 flex items-center">
      <span className="flex justify-center items-center basis-1/8 gap-3">
        <HomeButton />
      </span>
      <span className="basis-6/8">
        <Navigation />
      </span>
      <span className="basis-1/8 text-right">
        <CTAButton>Email</CTAButton>
      </span>
    </div>
  );
}
