import { useState, useEffect } from "react";

const getMatches = (query) =>
  typeof window !== "undefined" && window.matchMedia(query).matches;

const useMediaQuery = (query) => {
  const [matches, setMatches] = useState(() => getMatches(query));

  useEffect(() => {
    const media = window.matchMedia(query);
    const listener = () => setMatches(media.matches);
    listener();
    media.addEventListener("change", listener);
    return () => media.removeEventListener("change", listener);
  }, [query]);

  return matches;
}

export {
  useMediaQuery,
};
