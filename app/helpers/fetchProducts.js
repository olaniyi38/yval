async function fetchProducts() {
    const res = await fetch("http://localhost:5173/api/projects/")
    const data = await res.json()
    return data
}

export default fetchProducts