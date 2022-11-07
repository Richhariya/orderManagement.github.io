const createOrderCard = (orderId) => {
    let colDiv = document.createElement('div')
    let cardDiv = document.createElement('div')
    let cardHeaderDiv = document.createElement('div')
    let cardBodyDiv = document.createElement('div')
    let cardTitle = document.createElement('h5')
    let cardtextP = document.createElement('p')
    let orderStatusSpan = document.createElement('span')
    let cardFooter = document.createElement('div')
    
    
    
    colDiv.classList = 'col-md-3'
    cardDiv.classList = 'card text-center'
    cardHeaderDiv.classList = 'card-header'
    cardBodyDiv.classList = 'card-body'
    cardTitle.classList = 'card-title'
    cardtextP.classList = 'card-text'
    orderStatusSpan.classList = 'badge bg-success'
    orderStatusSpan.id = orderId
    cardFooter.classList = 'card-footer'
    
    cardHeaderDiv.innerHTML = `Order No. : <b> ${orderId} </b>`
    //cardTitle.innerText = `${Math.ceil(Math.random()*42+10)}`
    cardtextP.innerHTML = `Large Pizza - ${Math.ceil(Math.random()*3)} Nos <br> Medium Pizza - ${Math.ceil(Math.random()*3)} Nos<hr>
    <br> <b>Total Amount<b> : <b> $ ${Math.ceil(Math.random()*42+10)}<b><hr>`
                           
    
    orderStatusSpan.innerText = 'Order Placed'
    cardFooter.innerText = new Date().toLocaleDateString("en-US",{
       year:"numeric",
       month:"long",
       day:"numeric",
       hour: "2-digit",
       minute: "2-digit",
       second:"2-digit"
       
    })
    
    
    
    cardDiv.appendChild(cardHeaderDiv)
    cardDiv.appendChild(cardBodyDiv)
    cardBodyDiv.appendChild(cardTitle)
    cardBodyDiv.appendChild(cardtextP)
    cardBodyDiv.appendChild(orderStatusSpan)
    colDiv.appendChild(cardDiv)
    cardDiv.appendChild(cardFooter)
    
    document.getElementById("order-cards-wrapper").appendChild(colDiv)
    } 

