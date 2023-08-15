import useSWR from "swr";

const fetcher = (...args) => fetch(...args).then((res) => res.json());

const useProduct = (productName) => {
    const { data, error, isLoading } = useSWR(
        `http://localhost:3000/api/shop/${productName}`,
        fetcher
    );

    return {
        data,
        error,
        isLoading
    }

}

export default useProduct