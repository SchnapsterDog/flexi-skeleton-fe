import data from '../../static/data/items' // import static data

const fetch = (mockData, time = 0) => {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve(mockData)
        }, time)
    })
}

export default {
    fetchData() {
        return fetch(data, 10) // wait 1s before returning items
    }
}