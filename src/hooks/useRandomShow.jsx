import { useCallback, useState } from "react";

const useRandomShow = (shows) => {
  const [randomShow, setRandomShow] = useState(null);
  const getRandomShow = useCallback(()=>{
    if(shows)
    {
      const randomIndex = Math.floor(Math.random() * shows.length);
      const selectedShow = shows[randomIndex];
      setRandomShow(selectedShow);
    }else{
      setRandomShow(null);
    }
  }, [shows])
  return{ randomShow, getRandomShow };
}

export default useRandomShow;