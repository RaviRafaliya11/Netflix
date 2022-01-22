import Main_Theme from "../components/Theme/Main_Theme";
import Link from "next/link";

export default function FourOhFour() {
  return (
    <Main_Theme>
      <div className="flex flex-col items-center justify-center h-screen">
        <p className="text-3xl md:text-6xl lg:text-9xl font-extrabold text-transparent bg-clip-text bg-gradient-to-br from-white to-[#E50914]">
          Opps!
        </p>
        <p className="my-5 md:text-xl lg:text-2xl">404 | Page Not Found</p>
        <Link href="/">
          <button className="p-3 rounded-full font-bold bg-gray-500">
            Back To Home
          </button>
        </Link>
      </div>
    </Main_Theme>
  );
}
