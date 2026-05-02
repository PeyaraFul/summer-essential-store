export const productsData = async () => { 
 const res = await fetch('https://summer-essential-store-1iaz.vercel.app/products.json');
const products = await res.json();
return products 
}