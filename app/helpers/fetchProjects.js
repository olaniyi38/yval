async function fetchProjects() {
    try {
        const res = await fetch(process.env.NEXT_PUBLIC_API_URl + '/api/projects', { cache: "no-store" });

        if (!res.ok) {
            throw new Error('Failed to fetch data');
        }

        return res.json();
    } catch (err) {
        console.log(err);
    }
}

export default fetchProjects