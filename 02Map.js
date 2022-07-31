 // Ejercicio de ordenes de compra 
 const bill = document.getElementById('bill');
 
 const orders=[
    {
        customerName:"Nicolas",
        total:60,
        delivered:true,
    },
    {
        customerName:"Zulema",
        total:120,
        delivered:false,
    },
    {
        customerName:"Santiago",
        total:180,
        delivered:true,
    },
    {
        customerName:"Valentina",
        total:240,
        delivered:true,
    },
];

const taxes = orders.map (item => {
    return {
        ...item,
        tax : item.total * 0.19
    }
});

const finalTotal = taxes.map (item =>{
    return {
        ...item,
        pagar : item.total + item.tax
    }
})


finalTotal.forEach(order => {
    bill.innerHTML += `<li class = 'bill--individual'> 
    <p class='titulo'> Recibo de compra para ${order.customerName}, ojalá disfrutes tu árticulo. </p>
    <input type= 'checkbox' ${order.delivered ? 'checked' : ''}/> <span> Tu orden fué entregada con éxito.</span>
                            <p> El costo de tu compra es de: <span class='numeros'>$${order.total}</span> </p>
                            <p class='impuestos'> Impuestos del 19% $${order.tax}</p>
                            <p> Tu total a pagar es de: <span class='numeros'>$${order.pagar}</span> </p>
                        </li>`
});



