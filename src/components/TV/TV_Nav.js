import { useRouter } from "next/router";
import tv_requests from "../../utils/tv_requests";

function TV_Nav() {
  const router = useRouter();
  return (
    <nav className="relative ">
      <div
        className="flex px-10 sm:px-20 text-2xl whitespace-nowrap 
            space-x-10 sm:space-x-20 overflow-x-scroll scrollbar-none "
      >
        {Object.entries(tv_requests).map(([key, { title }]) => (
          <h2
            key={key}
            onClick={() => router.push(`/tv?query=${key}`)}
            className="last:pr-24 cursor-pointer transition duration-100 
                    transform hover:scale-125 hover:text-white 
                    active:text-red-500 "
          >
            {title}
          </h2>
        ))}
      </div>
      <div
        className="absolute top-0 right-0 bg-gradient-to-l from-[#181818] 
            h-10 w-1/12"
      />
    </nav>
  );
}

export default TV_Nav;