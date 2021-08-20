const products = [
    {name:'apple watch ', price: 18000},
    {name:'samsung watch ', price: 13000},
    {name:'apple laptop ', price: 80000},
    {name:'samsung mobile ', price: 28000},
    {name:'lg aircular ', price: 100},
    {name:'realme mobile ', price: 18000},
    {name:'mi mobile ', price: 18000},
    {name:'singer car ', price: 18000},
    {name:'apache rtr ', price: 18000},
    {name:'hp laptop ', price: 18000},
   ]

   for(const product of products){
    if (product.price < 1000){
        break;
    }
     console.log(product);



   }