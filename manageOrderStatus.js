const manageOrderStatus = async (orderId) => {
    const chefReceivedTheorder = () => {
        return new Promise((resolve,reject) => {
             setTimeout(() => {
                document.getElementById(orderId).innerText = "chef Received the order"
                resolve()
             },2000)
        })
    }

    const pizzaSauceAdded = () => {
        return new Promise((resolve,reject) => {
            setTimeout(() => {
                document.getElementById(orderId).innerText = ("Pizza Sauce Added")
                resolve()
            },1000)
        })
    }
    

    const FirstLayerOfCheezeAdded = () => {
        return new Promise((resolve,reject) => {
            setTimeout(() => {
                document.getElementById(orderId).innerText = "First layer of cheeze added"
                resolve()
            },3000)
        })
    }

    const ToppingsAdded = () => {
        return new Promise((resolve,reject) => {
            setTimeout(() => {
                document.getElementById(orderId).innerText = "Toppings Added"
                resolve()
            },4000)
        })
    }
    
    const SecendLayerOfCheezeAdded = () => {
        return new Promise((resolve,reject) => {
            setTimeout(() => {
                document.getElementById(orderId).innerText = "Second layer of cheeze added"
                resolve()
            },5000)
        })
    }

    const pizzaBacked = () => {
        return new Promise((resolve,reject) => {
            setTimeout(() => {
                document.getElementById(orderId).innerText = "Pizza Baked!"
                resolve()
            },5000)
        })
    }

    const oreganoAdded = () => {
        return new Promise((resolve,reject) => {
            setTimeout(() => {
                document.getElementById(orderId).innerText = "Oregano Added "
                resolve()
            },8000)
        })
    }
    
    const packageReceivedAtCounter = () => {
        return new Promise((resolve,reject) => {
            setTimeout(() => {
                document.getElementById(orderId).innerText = "package Received"
                resolve()
            },3000)
        })
    }
    

        try{
           
           await chefReceivedTheorder()
           await  pizzaSauceAdded()
           await  FirstLayerOfCheezeAdded()
           await ToppingsAdded()
           await pizzaBacked()
           await oreganoAdded()
           await packageReceivedAtCounter()
           document.getElementById(orderId).innerText = 'the order ready'
        }catch(error){
           console.log(error)
        }
    

}