import { useContext, useState } from 'react';
import CartContext from '../store/cart-context';
import Button from '../UI/Button';
import classes from'./Cart.module.css';
import CartCloseButton from './CartCloseButton';
import Modal from '../UI/Modal';
import CartItems from "./CartItems";


const Cart = (props) => {
    const cartCtx = useContext(CartContext);
    const [list, setList] = useState([]);
    const [price, setPrice] = useState(0);

    
    const cartItemsList = list.map((item) => (
        <ul key={props.id} id={props.id} className={classes.ul}>
            <CartItems product={item} />
        </ul>
    ));
    const purchaseHandler = () => {
        alert('Thanks for the purchase');
        setList([])
    }
    
return(
    <Modal onClose={props.onClose}>
      <CartCloseButton className={classes.close} onClose={props.onClose} />
        <div className={classes.total}>
        <h2>Cart</h2>
        <div className={classes.wrapper}>
          <span className={classes.item}>ITEM</span>
          <span className={classes.price}>PRICE</span>
          <span className={classes.quantity}>QUANTITY</span>
          </div>
        <div>
            {cartItemsList}
            <span className={classes['cart-total']}>
                <span>${price}</span>
                <strong>Total</strong>
            </span>
        </div>
        <Button onClick={purchaseHandler}>Purchase</Button>
        </div>
    </Modal>
    );
};

export default Cart;