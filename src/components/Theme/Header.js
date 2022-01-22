import Image from "next/image";
import logo from "../../../public/logo.svg";
import Link from "next/link";
import { useSession, signIn } from "next-auth/react";
import {
  HiOutlineCollection,
  HiOutlineHome,
  HiOutlineDesktopComputer,
  HiOutlineSearch,
  HiOutlineCalendar,
  HiOutlineUser,
} from "react-icons/hi";

function Header() {
  const { data: session } = useSession();
  return (
    <header className="flex flex-col sm:flex-row m-5 justify-between items-center h-auto z-50 bg-[#181818]">
      <div className="flex flex-grow justify-evenly max-w-2xl ">
        <Link href="/">
          <div className="header_items group">
            <HiOutlineHome className="header_icon" />
            <p className=" opacity-0 group-hover:opacity-100 tracking-widest">
              HOME
            </p>
          </div>
        </Link>

        <Link href="/upcoming">
          <div className="header_items group">
            <HiOutlineCalendar className="header_icon" />{" "}
            <p className=" opacity-0 group-hover:opacity-100 tracking-widest">
              UPCOMING
            </p>
          </div>
        </Link>

        <Link href="/collection">
          <div className="header_items group">
            <HiOutlineCollection className="header_icon" />{" "}
            <p className=" opacity-0 group-hover:opacity-100 tracking-widest">
              COLLECTION
            </p>
          </div>
        </Link>

        <Link href="/search">
          <div className="header_items group">
            <HiOutlineSearch className="header_icon" />{" "}
            <p className=" opacity-0 group-hover:opacity-100 tracking-widest">
              SEARCH
            </p>
          </div>
        </Link>

        <Link href="/tv">
          <div className="header_items group">
            <HiOutlineDesktopComputer className="header_icon" />{" "}
            <p className=" opacity-0 group-hover:opacity-100 tracking-widest">
              TV
            </p>
          </div>
        </Link>

        <div className="header_items group">
          {session ? (
            <Link href="/user/userProfile">
              <HiOutlineUser className="header_icon" />
            </Link>
          ) : (
            <HiOutlineUser className="header_icon" onClick={signIn} />
          )}

          <p
            className={`opacity-0 group-hover:opacity-100 tracking-widest ${
              session ? "capitalize" : ""
            } `}
          >
            {session ? `${session?.user?.name.split(" ")[0]}` : "Login"}
          </p>
        </div>
      </div>
      <Link href="/">
        <Image className="cursor-pointer" src={logo} width={108} height={32} />
      </Link>
    </header>
  );
}

export default Header;
