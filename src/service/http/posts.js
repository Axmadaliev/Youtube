async function fetchAllPosts() {
    const response = await fetch('https://jsonplaceholder.typicode.com/posts')
    if (!response.ok) throw new Error(response.status)
    const res = await response.json()
    return res
}
//
export { fetchAllPosts }