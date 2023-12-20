import styles from './NavBar.module.css'
import Button from '../Button/Button'
import CartWidget from '../CartWidget/CartWidget'

const NavBar = () =>{
    return (
        <>
        <nav>
            <h1 className={styles.logo}>E-Commerce DB</h1>
            <section>
                <Button label={'Almacen'}/>
                <Button label={'Golocinas'}/>
                <Button label={'Quesos y Fiambres'}/>
                <Button label={'Frutas y Verduras'}/>
            </section>
        </nav>
        <CartWidget></CartWidget>
        </>
    )
}

export default NavBar