import Navigation from "../Navigation";
import Email from "../ui/Email";
import HomeButton from "../HomeButton";

export default function Header() {
  return (
    <header className="flex items-center px-50 py-5 z-10">
      <div className="basis-1/8">
        <HomeButton />
      </div>
      <div className="basis-6/8">
        <Navigation />
      </div>
      <div className="basis-1/8 text-right">
        <Email title="Email" />
      </div>
    </header>
  );
}
