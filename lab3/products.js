const products=[
{id:1,name:'marker', price:15,qty:100 },
{id:2,name:'duster',price:24,qty:50}

];
let nextID = 3;

 export const getAllProducts = () => {
    return products;
 }

 export const addProduct = (item) =>{
    item.id = nextID;
    nextId++;
    products.push(item);
    return item;
};