import React from "react";
import { useSession, signOut, signIn } from "next-auth/react";
import Main_Theme from "../../components/Theme/Main_Theme";
import { MdEmail } from "react-icons/md";

export default function UserProfile() {
  const { data: session } = useSession();
  return (
    <Main_Theme>
      {session ? (
        <div className="max-w-4xl flex items-center h-auto lg:h-screen flex-wrap mx-auto my-20 lg:my-0">
          <div className="w-full lg:w-3/5 rounded-lg lg:rounded-lg shadow-2xl bg-white opacity-75 mx-3 lg:mx-0 lg:flex">
            <div className="p-4 md:p-12 text-center lg:text-left">
              <img
                src={session?.user?.image}
                alt=" "
                className="block lg:hidden rounded-full shadow-xl mx-auto -mt-16 h-40 w-40 bg-cover bg-center"
              />
              <h1 className="text-3xl font-bold pt-8 lg:pt-0 capitalize text-black">
                {session?.user?.name}
              </h1>
              <div className="mx-auto lg:mx-0 w-4/5 pt-3 border-b-2 border-red-500 opacity-25"></div>
              <p className="pt-4 text-gray-600 text-xs lg:text-sm flex items-center justify-center lg:justify-start">
                <MdEmail className="w-5 h-5 mr-2" />
                {session?.user?.email}
              </p>
              <p className="pt-8 text-sm">Thankyou for Joining Netflix.</p>
              <div className="pt-12 pb-8">
                <button
                  onClick={signOut}
                  className="relative inline-flex items-center justify-start  px-5 py-3 overflow-hidden font-bold rounded group bg-[#E50914]"
                >
                  <span className="absolute top-0 left-0 w-48 h-48 -mt-1 transition-all duration-500 ease-in-out rotate-45 -translate-x-56 -translate-y-24 bg-black opacity-100 group-hover:-translate-x-8"></span>
                  <span className="relative w-full text-left text-white transition-colors duration-200 ease-in-out group-hover:text-white">
                    Signout
                  </span>
                </button>
              </div>
            </div>
            <img
              src={session?.user?.image}
              alt=" "
              className="hidden lg:block rounded-full shadow-xl mx-auto -mt-16 h-40 w-40 bg-cover bg-center"
            />
          </div>
        </div>
      ) : (
        <div className="flex flex-col items-center pt-40">
          <p className="text-xl mb-5">Please Sign in to view Profile.</p>
          <button
            onClick={signIn}
            className="relative inline-flex items-center justify-start px-9 py-3 overflow-hidden font-medium transition-all bg-red-500 rounded-md group"
          >
            <span className="absolute top-0 right-0 inline-block w-4 h-4 transition-all duration-500 ease-in-out bg-red-700 rounded group-hover:-mr-4 group-hover:-mt-4">
              <span className="absolute top-0 right-0 w-5 h-5 rotate-45 translate-x-1/2 -translate-y-1/2 bg-white"></span>
            </span>
            <span className="absolute bottom-0 left-0 w-full h-full transition-all duration-500 ease-in-out delay-200 -translate-x-full translate-y-full bg-red-600 rounded-md group-hover:mb-12 group-hover:translate-x-0"></span>
            <span className="relative w-full text-left text-white transition-colors duration-200 ease-in-out group-hover:text-white">
              Sign in
            </span>
          </button>
        </div>
      )}
    </Main_Theme>
  );
}
