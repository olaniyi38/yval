import useSWR from "swr";

const fetcher = (...args) => fetch(...args).then((res) => res.json());

const useProduct = (productName) => {
    const { data, error, isLoading } = useSWR(
        process.env.NEXT_PUBLIC_API_URl + `/api/shop/${productName}`,
        fetcher
    );

    return {
        data,
        error,
        isLoading
    }

}

export default useProduct