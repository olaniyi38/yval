import useSWR from "swr";

const fetcher = (...args) => fetch(...args).then((res) => res.json());

const useProduct = (productName) => {
    const { data, error, isLoading } = useSWR(
        `http:/127.0.0.1:5173/api/shop/${productName}`,
        fetcher
    );

    return {
        data,
        error,
        isLoading
    }

}

export default useProduct