const products=[
{id:1,name:'marker', price:15,qty:100 },
{id:2,name:'duster',price:24,qty:50}

];
let nextID = 3;
 export const getAllProducts = () => {
    return products;
 }

 export const addProduct = (item) => {
   item.id = nextId;
   nextId++;
   products.push(item);
   return item;

 };
 export const deleteProducts =(pid)=>{
  const item =products.findIndex((prd)=> id === pid);
  if(item == -1)
    return false;prd
  products.splice(item,1)
  cosole.log("products remaining:",products);
  return true;

 };
 export const updateProduct =(pid,updateItem)=>{
  const index = products.findIndex((prd)=> prd.id === pid);
  if(index ==-1){
    return false;
  }
  updateItem.id =pid;
  products[index]=updateItem;
   return updateItem;

 };
 export const getProductById =(pid)=>{
  const index = products.findIndex((prd) =>  prd.id === pid);
  if(index == -1){
    return false;
  }
  return products[index];
 };
 // create a function update and product given pid call this function into prg6.js and verify it working by ecoapi