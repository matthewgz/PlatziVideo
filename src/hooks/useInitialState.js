import { useEffect, useState } from "react";

const useInitialState = API => {
  const [videos, setVideos] = useState({
    mylist: [],
    trends: [],
    originals: []
  });

  useEffect(() => {
    fetch(API)
      .then(response => response.json())
      .then(data => setVideos(data));
    return () => {};
  }, []);

  return { videos };
};

export default useInitialState;
