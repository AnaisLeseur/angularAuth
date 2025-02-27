import { Injectable } from "@angular/core";
import { Product } from "./product";
@Injectable()

export class Cart {
    public lines:CartLine[] = [];
    public itemsCount:number = 0;
    public cartPrice:number = 0;

    addLine( product:Product, quantity:number = 1) {
        let line = this.lines.find(line => line.product.id == product.id);
        if (line != undefined ) {
            line.quantity += quantity;
        } else {
            this.lines.push(new CartLine(product, quantity));
        }
        this.recalculate();
    }
    updateQuantity(product:Product, quantity: number) {
        let line = this.lines.find(line => line.product.id == product.id);
        if (line != undefined) {
            line.quantity = Number(quantity);
        }
        this.recalculate();
    }
    removeLine( id:number ) {
        let index = this.lines.findIndex(line => line.product.id == id )
        this.lines.splice(index, 1);
        this.recalculate();
    }
    clear() {
        this.lines = [];
        this.itemsCount = 0;
        this.cartPrice = 0;
    }

    private recalculate() {
        this.itemsCount = 0;
        this.cartPrice = 0;
        this.lines.forEach(el => {
            this.itemsCount += el.quantity;
            this.cartPrice += (el.quantity * el.product.price!);
        })
    }
}

export class CartLine {
    constructor( 
        public product:Product, 
        public quantity:number
    ) {}
    
    get lineTotal() {
        if (this.product && this.product.price) {
            return this.quantity * this.product.price;
        }
        return 0;
    }
}