async function fetchAllTodos() {
    const response = await fetch('https://jsonplaceholder.typicode.com/photos')
    console.log(response);
    if (!response.ok) throw new Error(response.status)
    const res = await response.json()
    return res
}
//
export { fetchAllTodos }