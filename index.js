const ingredientes = [
  "harina",
  "levadura",
  "aceite",
  "sal",
  "salsa",
  "jamón",
  "muzzarella",
  "orégano",
  "aceitunas",
  "morrón",
];

const pares = [],
  impares = [];

const paresImpares = (arr) => {
  if (!arr.length) {
    console.log("Lista vacía");
    return;
  }
  for (let i = 0; i < arr.length; i++) {
    arr[i].length % 2 ? impares.push(arr[i]) : pares.push(arr[i]);
  }
  console.log(`Los ingredientes impares son: ${impares}`);
  console.log(`Los ingredientes pares son: ${pares}`);
};

paresImpares(ingredientes);
