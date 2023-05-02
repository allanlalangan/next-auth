import Link from "next/link";
import SignInButton from "../SignInButton";

const Header = () => {
  return (
    <header className="flex w-full justify-between items-center bg-slate-700 p-4">
      <Link className="mx-2" href="/">
        Home
      </Link>
      <SignInButton />
    </header>
  );
};
export default Header;
