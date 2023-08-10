import useSWR from 'swr'

const fetcher = (...args) => fetch(...args).then((res) => res.json());

const useProjects = async (id) => {
    const { data, isLoading, error } = useSWR(`http://localhost:5173/api/projects/${id}`, fetcher)

    return {
        data,
        isLoading,
        error
    }
}

export default useProjects