

const allData = async () => {
    const result = await getData()
    const result2 = await getData2()
    console.log(result, result2)
    return result 
}


const getData = () => { 
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve('data you won')
        }, 3000)
    })
}


const getData2 = () => { 
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve('data you won2')
        }, 1000)
    })
}


const data = allData()
console.log(data)