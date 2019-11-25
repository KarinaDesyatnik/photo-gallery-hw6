
export default class GalleryService {

    getPhotos = async(page, id) => {
        const typeUrl = id? `collections/${id}/` : "";
        return await new Promise ( (resolve) => {
            setTimeout( async() => {
                const res =  await fetch(`https://api.unsplash.com/${typeUrl}photos?page=${page}&per_page=20`, {
                    method: "get",
                    headers: {
                        "Authorization": "Client-ID 074edaaa9f58f24c866a8b05b38897955099fcfb41029b2c68d392dc4c170343"
                    }
                });
                const result = await res.json();
                resolve(result)
            }, 0)
        })
    }

    getRandomPhoto = async() => {
        const res =  await fetch(`https://api.unsplash.com/photos/random`, {
            method: "get",
            headers: {
                "Authorization": "Client-ID 074edaaa9f58f24c866a8b05b38897955099fcfb41029b2c68d392dc4c170343"
            }
        });
        const result = await res.json();
        return result
    }

    getOnePhoto = async(id) => {
        const res =  await fetch(`https://api.unsplash.com/photos/${id}`, {
            method: "get",
            headers: {
                "Authorization": "Client-ID 074edaaa9f58f24c866a8b05b38897955099fcfb41029b2c68d392dc4c170343"
            }
        });
        const result = await res.json();
        return result
    }
    getSearch = async (value, page) => {
        const response = await fetch(
            `https://api.unsplash.com/search/photos?query=${value}&page=${page}&per_page=20`,
            {
                method: 'get',
                headers: {
                    'Authorization': 'Client-ID 074edaaa9f58f24c866a8b05b38897955099fcfb41029b2c68d392dc4c170343'
                }
            });
        return await response.json();
    };

}
