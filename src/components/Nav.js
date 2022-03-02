import { useRouter } from "next/router";
import movie_requests from "../utils/movie_requests";

function Nav() {
  const router = useRouter();
  return (
    <nav className="relative ">
      <div
        className="flex px-10 sm:px-20 text-2xl whitespace-nowrap 
            space-x-10 sm:space-x-20 overflow-x-scroll scrollbar-none"
      >
        {Object.entries(movie_requests).map(([key, { title }]) => (
          <h2
            key={key}
            onClick={() => router.push(`/?genre=${key}`)}
            className={`last:pr-24 cursor-pointer transition duration-100 
                    transform hover:scale-125 hover:text-white 
                    ${
                      router.query.genre
                        ? `${
                            router.query.genre ===
                            title.replace(/[^a-zA-Z]/g, "")
                              ? "text-red-500"
                              : ""
                          }`
                        : "first:text-red-500"
                    }
                    `}
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

export default Nav;
