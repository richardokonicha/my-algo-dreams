import swell from 'swell-js';


let SWELL_STORE_ID = "rich"
let SWELL_PUBLIC_KEY = "pk_uLWWFtKEwvudnkhEto9cG5AVtphUm3tK"
let SWELL_STORE_URL = 'https://rich.swell.store'


SWELL_STORE_ID='test'
SWELL_PUBLIC_KEY='pk_6ijHiN0em8tOdfzDbauUs7XQwypLmhm4'
SWELL_STORE_URL='http://test.swell.test:4001'


// const options = {
//     useCamelCase: // true | false (default is false)
// };

swell.init(SWELL_STORE_ID, SWELL_PUBLIC_KEY)

async function getAll() {
    // const result = await swell.products.list({
    //     // category: 'Subtropical Glass',
    //     limit: 100,
    //     page: 1
    // })


    const result = await swell.content.get('pages', "home")

    return result
}

// /settings/store / editor
async function getAllSettings() {
    const result = await swell.settings.stores.list()
    return result
}

getAll().then(result => {
    console.log(result)
    // for (let i = 0; i < result.results.length; i++) {
    //     console.log(result.results[i].name)
    // }
})


    // async function getSettings() {
    //     const result = await swell.settings.get()
    //     return result
    // }

// getSettings().then((result) => {
//     return console.log(result)
// })