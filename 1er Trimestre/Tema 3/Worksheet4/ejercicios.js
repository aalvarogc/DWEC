// PRODUCT CLASS
class Product {
	constructor(name, price) {
		this.name = name;
		this.price = price;
	}

	toString() {
		return this.name + " " + this.price + " euros";
	}
}

class ShoppingCart {
	constructor() {
		this.products = []; // empty at first
        this.products_mirror = this.products;//it should be updated with this.products, or?
        this.total_price = 0;
        this.total_price_mirror = this.total_price;
        this.no_discount_price = 0;
        this.discount = 0;
        this.global_count = {};
	}
    

    totalPrice(){
        this.products.forEach(product => {
            this.total_price += product.price;
        });
        if(this.products.length >= 5){
            this.total_price = this.total_price * 0.9;
        }
    }

	addProduct(product) {
        this.products.push(product);
        this.total_price += product.price;
        this.no_discount_price = this.total_price;

        console.log(this.total_price);
        
    }
    quantity_check() {
        let ten_perc = Math.round((this.total_price*10)/100);
        (this.products.length >= 5) ? (this.total_price -= ten_perc ) : this.total_price = this.no_discount_price;
        var count = {};
        var local_discount = 0;

        this.products.forEach(function(x){  
            if (count[x] === undefined){
                    count[x] = 1;
            }
            else{
                count[x] = count[x]+1
                if(count[x]%4 === 0){
                    local_discount += x.price  
                }            
            }
        });
        console.log(count);
        console.log("local_discount: " + local_discount);
        this.discount = local_discount;
        console.log("this.discount: "  + this.discount);
        this.total_price -= this.discount
        this.global_count = count
        console.log(this.global_count);

    }
    
    
    replace(productName, replacementProduct) {
        var array = this.products_mirror;
        console.log(array);
        var new_price = this.total_price
        console.log(new_price);
        var original_price_sum = 0; // this is catually useless
        var substitute_price_sum = 0;
        var check = false;
        console.log(array);
        array.forEach(function(prod, i){
            if (prod.name == productName){
                console.log(prod.price);
                original_price_sum += prod.price; //this is useless, the substitute price in the next loop is enough;
                console.log(original_price_sum);
                array.splice(i, 1, replacementProduct);
                console.log(prod.price)
                console.log(array);
                check = true
            }
        })
        console.log(check);
        console.log(array);
        console.log(original_price_sum);
        console.log(substitute_price_sum);

        array.forEach(function(prod, i){//THIS IS THE NEW ARRAY!!! RETURNS THE OLD PRICES + THE NEW!!!
            if(check = true){
                substitute_price_sum += prod.price;
            }
        })
        console.log(array);
        console.log("substitute_price_sum: " + substitute_price_sum);
        new_price = substitute_price_sum;
        this.products = array;
        this.total_price = new_price; 
        console.log(this.products);
    }


	toString() {
		return "cart with: " + this.products + "; Total price: " + this.total_price + " euros";
	}
}