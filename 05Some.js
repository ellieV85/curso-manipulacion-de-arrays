const orders=[
    {
        customerName:"Nicolas",
        total:60,
        delivered:true,
    },
    {
        customerName:"Zulema",
        total:120,
        delivered:true,
    },
    {
        customerName:"Santiago",
        total:180,
        delivered:false,
    },
    {
        customerName:"Valentina",
        total:240,
        delivered:true,
    },
];

const bill = document.getElementById('bill');

const delivered = orders.some(item => item.delivered ? '' : 'false');
if (!delivered) {
    bill.innerHTML += `<p>Todas las ordenes han sido entregadas</p>`
}else{
    const notDelivered = orders.filter (item => item.delivered ? '' : 'false');

    notDelivered.forEach(order => {
        bill.innerHTML += `<li class = 'bill--individual'> 
        <p class='titulo'> Recibo de compra para ${order.customerName}, ojalá disfrutes tu árticulo. </p>
        <input id= 'delivered' type= 'checkbox' ${order.delivered ? 'checked' : ''}/> <span> Tu orden fué entregada con éxito.</span>
                                <p> El costo de tu compra es de: <span class='numeros'>$${order.total}</span> </p>
                                
                            </li>`
    });
    addEventListener()
}



// Ejercicio con librerias
const dates = [
    {
      startDate: new Date(2021, 1, 1, 10),
      endDate: new Date(2021, 1, 1, 11),
      title: "Cita de trabajo",
    },
    {
      startDate: new Date(2021, 1, 1, 15),
      endDate: new Date(2021, 1, 1, 15, 30),
      title: "Cita con mi jefe",
    },
    {
      startDate: new Date(2021, 1, 1, 20),
      endDate: new Date(2021, 1, 1, 21),
      title: "Cena",
    },
  ];
const newAppointmet = {
    startDate : new Date(2021,1,1,19),
    endDate: new Date(2021, 1, 1, 20, 30)
}
const areIntervalsOverlapping = require('date-fns/areIntervalsOverlapping');

const isOverLap = (newDate) => {
    return dates.some(date => {
        return areIntervalsOverlapping(
            {start: date.startDate, end: date.endDate},
            {start: newDate.startDate, end: newDate.endDate},
        )
    })
}

console.log( 'No puedes hacer esta cita',isOverLap(newAppointmet));