export const productsData = async () => { 
 const res = await fetch('https://summer-essential-store.vercel.app/products.json');
const products = await res.json();
return products 
}