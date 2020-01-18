let minhaPromise = () => {
    return new Promise((resolve, reject) => {
        let xhr = new XMLHttpRequest()

        xhr.open('GET', 'https://api.github.com/users/ZoroStraw')
        xhr.send(null)

        xhr.onreadystatechange = function () {
            if (xhr.readyState === 4) {
                if (xhr.status === 200) {
                    resolve(JSON.parse(xhr.responseText))
                }
                else {

                    reject(`${xhr.status}: ${xhr.responseText}`)
                }
            }
        }
    })
}

minhaPromise()
    .then(function (response) {
        console.log(response)
    })
    .catch(function (error) {
        console.log(error)
    })
