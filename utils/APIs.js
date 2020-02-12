export async function getPosts() {
    return await fetch('https://staging.allfin.com/wordpress/wp-json/wp/v2/posts?page=1&per_page=5', {
        method: 'GET',
        headers: {
            Accept: 'application/json',
            'Content-Type': 'application/json'
        }
    })
}