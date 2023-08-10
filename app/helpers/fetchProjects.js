async function fetchProjects() {
    const res = await fetch("http://127.0.0.1:5173/api/projects")
    const data = await res.json()
    return data
}

export default fetchProjects