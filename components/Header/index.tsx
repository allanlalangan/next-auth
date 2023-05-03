import Link from "next/link";

const Header = () => {
  return (
    <header className="flex w-full justify-between items-center bg-slate-700 p-4">
      <Link className="mx-2" href="/">
        Home
      </Link>
    </header>
  );
};
export default Header;
