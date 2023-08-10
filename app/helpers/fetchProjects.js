async function fetchProjects() {
    try {
        const res = await fetch('http://127.0.0.1:5173/api/projects', { cache: "no-store" });

        if (!res.ok) {
            throw new Error('Failed to fetch data');
        }

        return res.json();
    } catch (err) {
        console.log(err);
    }
}

export default fetchProjects