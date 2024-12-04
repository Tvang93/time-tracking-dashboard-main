function getData(){
    return fetch('../data/data.json')
    .then(response => response.json)
    .then(data =>{
        return data.timeframes
    })
}

export {getData}