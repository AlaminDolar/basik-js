const products = [
 {name:'apple watch ', price: 18000},
 {name:'samsung watch ', price: 13000},
 {name:'apple laptop ', price: 80000},
 {name:'samsung mobile ', price: 28000},
 {name:'lg aircular ', price: 120000},
 {name:'realme mobile ', price: 18000},
 {name:'mi mobile ', price: 18000},
 {name:'singer car ', price: 18000},
 {name:'apache rtr ', price: 18000},
 {name:'hp laptop ', price: 18000},
]

function searchProducts(products,searchText){
    const matched = [];
    for(const product of products){
        const name = product.name;
        if (name.indexOf(searchText) != -1){
            matched.push(product);
        }
    }
    return matched;
}

const matched = searchProducts(products,'laptop');
console.log(matched);
