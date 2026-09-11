import Navigation from "../Navigation";
import Email from "../ui/Email";
import HomeButton from "../HomeButton";

export default function Header() {
  return (
    <header className="sticky flex top-0 z-20 items-center px-50 py-5 bg-bg/75">
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
