const standard = {
    "price": 3.33,
    "sale": true,
    "salePrice": 3.33,
    "prices": [
        {
            "price": 1.11,
            "quantityMin": 5,
            "quantityMax": 10
        },
        {
            "price": 2.22,
            "quantityMin": 3,
            "quantityMax": 5
        }
    ], "origPrice": 5
}





// function getStandardPrice() {
//     const quantity = this.quantity
//     const result = this.options.standard.prices.find(item => {
//         return item.quantityMin <= quantity && item.quantityMax >= quantity
//     })
//     return (result ? result.price : this.options.standard.salePrice)
// }
//     < !--{{
//     formatMoney(
//         options.standard.sale
//             ? standardVariation.salePrice
//             : standardVariation.price,
//         currency
//     )
//         ? product.purchaseOption.standard.salePrice

//             }} -->
// < !--             
//             const getPrice = () => {
//     const quantity = 4
//     const result = standard.prices.find(item => {
//         return item.quantityMin <= quantity && item.quantityMax >= quantity
//     })
//     return (result ? result.price : standard.salePrice)
// } -->

//                < !--{{
//     product.purchaseOptions.standard.sale
//     ? product.purchaseOptions.standard.salePrice
//     : product.purchaseOptions.standard.price
// }} -->
//             < !--{{ formatMoney(getPrice(), currency) }} -->

const product = {
    "purchaseOptions": {
        "standard": {
            "price": 3.33,
            "sale": true,
            "salePrice": 3.33,
            "prices": [
                {
                    "price": 1.11,
                    "quantityMin": 5,
                    "quantityMax": 10
                },
                {
                    "price": 2.22,
                    "quantityMin": 3,
                    "quantityMax": 5
                }
            ],
            "origPrice": 5
        },
        "subscription": {
            "plans": [
                {
                    "name": "Daily",
                    "description": "For Every Day",
                    "billingSchedule": {
                        "interval": "daily",
                        "intervalCount": 1,
                        "trialDays": 0,
                        "limit": null
                    }, "price": 19.9, "id": "620475a1d85c5101328fe327"
                },
                {
                    "name": "Monthly",
                    "description": "For Every Month",
                    "billingSchedule": {
                        "interval": "monthly",
                        "intervalCount": 1,
                        "trialDays": 0,
                        "limit": 10
                    },
                    "price": 18.9,
                    "id": "6210f6b9e71f24013213607d"
                },
                {
                    "name": "Yearly",
                    "description": "For Every Year",
                    "billingSchedule": {
                        "interval": "yearly",
                        "intervalCount": 1,
                        "trialDays": 0,
                        "limit": null
                    },
                    "price": 17.9,
                    "id": "6210f6b9e71f24013213607e"
                },
                {
                    "name": "Weekly",
                    "description": "For Every Week",
                    "billingSchedule": {
                        "interval": "weekly",
                        "intervalCount": 1,
                        "trialDays": 0,
                        "limit": null
                    },
                    "price": 19,
                    "id": "6210f6b9e71f24013213607f"
                },
                {
                    "name": "Weekly",
                    "description": "For Every Two Weeks",
                    "billingSchedule": {
                        "interval": "weekly",
                        "intervalCount": 2,
                        "trialDays": 0,
                        "limit": null
                    },
                    "price": 19,
                    "id": "6210f6fe6050eb0132cbf12a"
                },
                {
                    "name": "Monthly",
                    "description": "For Every Two Months",
                    "billingSchedule": {
                        "interval": "monthly",
                        "intervalCount": 2,
                        "trialDays": 0,
                        "limit": null
                    },
                    "price": 18,
                    "id": "6212decbf90fce01321688d6"
                },
                {
                    "name": "Yearly",
                    "description": "For Every Two Months",
                    "billingSchedule": {
                        "interval": "yearly",
                        "intervalCount": 2,
                        "trialDays": 0,
                        "limit": null
                    },
                    "price": 17.9,
                    "id": "6212decbf90fce01321688d7"
                },
                {
                    "name": "Daily",
                    "description": "For Every Two Days",
                    "billingSchedule": {
                        "interval": "daily",
                        "intervalCount": 2,
                        "trialDays": 0,
                        "limit": null
                    },
                    "price": 19,
                    "id": "6212deff3a26e301325f68b5"
                }]
        }
    },

    "variants": {
        "result": [
            {
                "id": "621e313d213eaf013dd4a2f2",
                "currency": "USD",
                "name": "White",
                "optionValueIds": ["621e313bc7c4cb4d12f17f04"],
                "origPrice": 7,
                "price": 5,
                "prices": [
                    {
                        "price": 3,
                        "quantityMin": 19,
                        "quantityMax": null
                    },
                    {
                        "price": 4,
                        "quantityMin": 5,
                        "quantityMax": 20
                    }
                ],
                "purchaseOptions": {
                    "standard": {
                        "price": 5,
                        "sale": true,
                        "salePrice": 5,
                        "origPrice": 7,
                        "prices": [
                            {
                                "price": 3,
                                "quantityMin": 19,
                                "quantityMax": null
                            },
                            {
                                "price": 4,
                                "quantityMin": 5,
                                "quantityMax": 20
                            }
                        ]
                    }
                }
            },
            {
                "id": "621e313d213eaf013dd4a2f1",
                "currency": "USD",
                "name": "Blue",
                "optionValueIds": ["621e313bc7c4cb4d12f17f03"],
                "origPrice": 5,
                "price": 3.33,
                "prices": [
                    {
                        "price": 1.11,
                        "quantityMin": 5,
                        "quantityMax": 10
                    },
                    {
                        "price": 2.22,
                        "quantityMin": 3,
                        "quantityMax": 5
                    }]
            },
            {
                "id": "621e313d213eaf013dd4a2f0",
                "currency": "USD",
                "name": "Reb",
                "optionValueIds": ["621e313bc7c4cb4d12f17f02"],
                "origPrice": 5,
                "price": 3.33,
                "prices": [
                    {
                        "price": 1.11,
                        "quantityMin": 5,
                        "quantityMax": 10
                    },
                    {
                        "price": 2.22,
                        "quantityMin": 3,
                        "quantityMax": 5
                    }
                ]
            }
        ]
    }


}




const getPrice = () => {
    const quantity = 1


    const variant = "Blue"
    // const variant = null

    let result


    if (variant) {
        let variantValue = product.variants.result.find(item => {
            return item.name == variant
        })

        result = variantValue.purchaseOptions.standard.prices.find(item => {
            return item.quantityMin <= quantity && item.quantityMax >= quantity
        })
        return result
        // return (result ? result.price : variantValue.purchaseOptions.standard.salePrice)


    } else {
        result = product.purchaseOptions.standard.prices.find(item => {
            return item.quantityMin <= quantity && item.quantityMax >= quantity
        })
        return (result ? result.price : product.purchaseOptions.standard.salePrice)
    }




    return result

    // return (result ? result.price : standard.salePrice)
}

console.log(getPrice())
