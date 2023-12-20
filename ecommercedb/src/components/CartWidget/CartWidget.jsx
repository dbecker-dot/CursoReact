import styles from './CartWidget.module.css'
import cart from './assets/carro.svg'

const CartWidget = () => {
    return (
        <div className={styles.carro}> 
            <img src={cart} alt='cart-widget' width={45} height={45}/>
            0
        </div>
    )
}

export default CartWidget