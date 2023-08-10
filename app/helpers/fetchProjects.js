async function fetchProjects() {
    const res = await fetch("/api/projects", { cache: 'no-store' })
    const data = await res.json()
    return data
}

export default fetchProjects