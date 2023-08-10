import useSWR from "swr";

const fetcher = (...args) => fetch(...args).then((res) => res.json());

const useItem = (itemId) => {
    const { data, error, isLoading } = useSWR(
        `http://localhost:5173/api/shop/${itemId}`,
        fetcher
    );

    return {
        data,
        error,
        isLoading
    }

}

export default useItem