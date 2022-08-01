/* const items =[1, 3, 2 ,3, 2, 1, 3, 3];

const reduce = items.reduce((obj, item) => {
    if (!obj[item]) {
        obj[item] = 1;
    }else {
        obj[item] = obj[item] + 1;
    }
    return obj;
}, {});
console.log (reduce); */


const data = [
    {
      name: "Nicolas",
      level: "low",
    },
    {
      name: "Andrea",
      level: "medium",
    },
    {
      name: "Zulema",
      level: "hight",
    },
    {
      name: "Santiago",
      level: "low",
    },
    {
      name: "Valentina",
      level: "medium",
    },
    {
      name: "Lucia",
      level: "hight",
    },
  ];

  const levels = data
  .map (item => item.level)
  .reduce((obj, item) => {
    if (!obj[item]) {
        obj[item]= 1;
    }else {
        obj[item] = obj[item] +1;
    }
    return obj
  }, {} );

  console.log(levels)
  
  // data.forEach(item => {
  //   document.getElementById('reduce').innerHTML = `<li>${levels.low}</li>`;
  // });
  