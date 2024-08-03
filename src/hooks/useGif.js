import axios from "axios";
import { useEffect, useState, useCallback } from "react";

export default function useGif(tag) {
  const API_KEY = process.env.REACT_APP_GIPHY_API_KEY;
  
  const [gif, setGif] = useState('');
  const [loading, setLoading] = useState(false);

  const url = `https://api.giphy.com/v1/gifs/random?api_key=${API_KEY}&tag=${tag}`;

  const fetchData = useCallback(async (tag) => {
    setLoading(true);
    try {
      const { data } = await axios.get(tag ? `${url}&tag=${tag}` : url);
      const imageSource = data.data.images.downsized_large.url;
      setGif(imageSource);
    } catch (error) {
      console.error("Error fetching gif:", error);
    } finally {
      setLoading(false);
    }
  }, [url]);

  useEffect(() => {
    fetchData(tag);
  }, [fetchData, tag]);

  return { gif, fetchData, loading };
}
