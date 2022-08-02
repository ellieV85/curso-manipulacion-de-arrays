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
        delivered:false,
    },
];

// const taxes = orders.push(item => {
//     return {
//         ...item,
//         tax: item.total * 0.19,
//     }
// });

// const finalOrders = taxes.map(item => {
//     return {
//         ...item,
//         pagar: item.total + item.tax
//     }
// });

const deliveredBill = document.querySelector('#deliveredBill');
const notDeliveredBill = document.querySelector('#not-deliveredBill');
const deliveredText = document.querySelector('#deliveredText');
const notDeliveredText = document.querySelector('#not-deliveredText');



const delivered = orders.filter (item => item.delivered ? 'true': '');
const notDelivered = orders.filter (item => item.delivered ? '' : 'false');


    if (delivered) {
        deliveredText.innerText = `Estas ordenes ya han sido entregadas:`
        delivered.forEach(order => {
            deliveredBill.innerHTML += `<li class = 'deliveredBill--individual'> 
            <p class='titulo'> Recibo de compra para ${order.customerName}, ojalá disfrutes tu árticulo. </p>
            <input type= 'checkbox' name='checkbox' ${order.delivered ? 'checked' : ''}/> <span> Tu orden fué entregada con éxito.</span>
            <p> El costo de tu compra es de: <span class='numeros'>$${order.total}</span> </p>`
        });
    }if (notDelivered) {
        notDeliveredText.innerText = `Estas ordenes no han sido entregadas:`
        notDelivered.forEach(order => {
            notDeliveredBill.innerHTML += `<li class = 'not-deliveredBill--individual'> 
            <p class='titulo'> Recibo de compra para ${order.customerName}, ojalá disfrutes tu árticulo. </p>
            <input name = 'checkbox'type= 'checkbox' ${order.delivered ? 'checked' : ''}/> <span> Tu orden fué entregada con éxito.</span>
            <p> El costo de tu compra es de: <span class='numeros'>$${order.total}</span> </p>
            </li>`
        });
    }
    
// let checkbox = document.querySelector('input[name=checkbox]');
//     console.log(checkbox);

//     checkbox.addEventListener('change', function() {
//         if (this.checked) {
//           console.log("Checkbox is checked..");
//         } else {
//           console.log("Checkbox is not checked..");
//         }
//       });

// Select all checkboxes with the name 'settings' using querySelectorAll.
const checkboxes = document.querySelectorAll('input[name=checkbox]');
console.log(checkboxes)
let enabledSettings = []

// Use Array.forEach to add an event listener to each checkbox.
checkboxes.forEach(checkbox => {
  checkbox.addEventListener('change', function() {
    enabledSettings = 
      Array.from(checkboxes) // Convert checkboxes to an array to use filter and map.
      .filter(i => i.checked) // Use Array.filter to remove unchecked checkboxes.
      .map(i => i.value) // Use Array.map to extract only the checkbox values from the array of objects.
      
    console.log(enabledSettings);
  })
});


    







