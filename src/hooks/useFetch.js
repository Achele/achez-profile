import { useEffect } from "react";
import { useState } from "react";
import { useErrorBoundary } from "react-error-boundary";
// import { useErrorHandler } from "react-error-boundary";

export default function useFetch(url) {
  const handleError = useErrorBoundary;
  const [loading, setLoading] = useState(false);

  const [data, setData] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      setLoading(true);
      try {
        const res = await fetch(url);
        const movie = await res.json();
        setLoading(false);
        setData(movie);
      } catch (error) {
        setLoading(false);
        handleError(error);
      }
    };
    fetchData();
  }, [handleError, url]);
  return { loading, data };
}
