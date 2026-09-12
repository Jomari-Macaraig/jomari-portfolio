import Navigation from "../Navigation";
import Email from "../ui/Email";
import HomeButton from "../HomeButton";

export default function Header() {
  return (
    <header className="sticky top-0 z-20 grid grid-cols-[auto_1fr_auto] items-center gap-4 py-5 px-5 sm:px-10 md:px-20 lg:px-40 bg-bg/60">
      <div>
        <HomeButton />
      </div>
      <div className="hidden lg:block">
        <Navigation />
      </div>
      <div className="justify-self-end hidden lg:block">
        <Email title="Email" />
      </div>
    </header>
  );
}
