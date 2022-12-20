import Products from "./Products";
import classes from "./AvailableProducts.module.css";
import { Fragment, useContext } from "react";
import CartContext from "../store/cart-context";


const AvailableProducts = (props) => {
    const cartCntx = useContext(CartContext);

    const productsArr = [
        {
            id: 'a1',
            title: 'Colors',
            price: 100,
            imageUrl: 'https://prasadyash2411.github.io/ecom-website/img/Album%201.png',
        },
        {
            id: 'a2',
            title: 'Black and white Colors',
            price: 50,
            imageUrl: 'https://prasadyash2411.github.io/ecom-website/img/Album%202.png',
        },
        {
            id: 'a3',
            title: 'Yellow and Black Colors',
            price: 70,
            imageUrl: 'https://prasadyash2411.github.io/ecom-website/img/Album%203.png',
        },
        {
            id: 'a4',
            title: 'Blue Color',
            price: 100,
            imageUrl: 'https://prasadyash2411.github.io/ecom-website/img/Album%204.png',
        }
    ];

    const newEmailId = localStorage.getItem('email')
        

    const productList = productsArr.map((item) => (
        <ul key={item.id}>
          <Products data={item} />
        </ul>
      ));
      

    return(
        <Fragment>
            <div className={classes.container}>
                {productList}
            </div>
        </Fragment>

    )
};

export default AvailableProducts;