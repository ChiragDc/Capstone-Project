
export class User {
    id!: number;
    username!: string;
    password!: string;
    admin!: boolean;
    email!: string;

}
export interface Cart {
    id: number;
    name: string;
    price: number;
    quantity: number;
    pictureUrl: string;
}
export interface Category {
    id: number;
    name: string;
}
export interface Comment {
    id: number;
    addedAt: any;
    addedBy: string;
    message: string;
    title: string;
}

export interface Order {
    
    id: number;
    dateCreated: any;
    status: any;
}
export class ProductOrder {
    id!: number;
    product: Product;
    quantity: number = 1;
    constructor(product: Product, quantity: number) {
        this.product = product;
        this.quantity = quantity;
    }
}
export class ProductOrders {
    productOrders: ProductOrder[] = [];
}
export interface Product {
    id: number;
    description: string;
    name: string;
    pictureUrl: string;
    price: number;
}
export interface Tag {
    id: number;
    name: string;
    products: any;
}
export class Item {
    name!: string;
    value!: string;
    price!: number;
}
export class UpdateProduct {
    id!: number;
    name!: string;
    description!: string;
    price!: number;
    pictureUrl!: string;
}
export const ITEMS: Item[] = [
    {
        name: 'Normal Delivery ',
        value: 'item_1',
        price: 40,
    },
    {
        name: 'Expresss ',
        value: 'item_2',
        price: 100,
    },
   
];
export class Bank {
    bname!: string;
    burl!: string;
    
}
export const BANKS: Bank[] = [
    {
        bname: 'HDFC',
        burl: 'https://images.livemint.com/img/2021/03/30/600x338/HDFC_Bank_1617090965442_1617090969649.png'
        
    },
    {
        bname: 'Axis ',
        burl: 'https://economictimes.indiatimes.com/thumb/msid-74774477,width-1200,height-900,resizemode-4,imgsize-119770/axis-bank-agencies.jpg',
        
    },
    {
        bname: 'SBI ',
        burl: 'http://www.logo-designer.co/wp-content/uploads/2017/04/2017-Design-Stack-new-logo-design-State-Bank-of-India.png'
        
    },
    {
        bname: 'Canara Bank ',
        burl: 'https://www.businessinsider.in/photo/74075522/steps-to-check-canara-bank-account-balance.jpg',
        
    }
   
];
