async function fetchProjects() {
    const res = await fetch("/api/projects")
    const data = await res.json()
    return data
}

export default fetchProjects