import { useState } from "react";
import CartContext from "./cart-context";


const CartProvider = (props) => {
    const [items, setItems] = useState([]);
    const [quantity, setQuantity] = useState(0);
    
    const newArray = [...items];
    console.log(newArray);


       
    

    const totalQuantityHandler = (quantity) => {
        setQuantity(quantity);
    };

    const removeItemsFromCartHandler = (id) =>{
        newArray.forEach((index) => {
        if(id===index.id){
            newArray.splice(index,1);
        }
        })
        setItems(newArray)
    }

    const cartFetchedItems = (cartLength, cartData) => {
        console.log(`cart fetched items`, cartLength, cartData);
    }

    const cartItems = {
        items: items,
        quantity: quantity,
        totalQuantity: totalQuantityHandler,
        price: items.reduce((currNum, item) => {
            return (currNum += item.price * item.quantity)
            }, 0),
        
        
    }; 

    return(
        <CartContext.Provider value={cartItems}>
            {props.children}
        </CartContext.Provider>
    );
};

export default CartProvider;
