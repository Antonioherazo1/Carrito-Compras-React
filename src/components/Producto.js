import { Component } from "react";
import Button from './Button'

const styles = {
    producto: {
        border: 'solid 1px #eee',
        boxShadow: '0 5px 5px rgb(0, 0, 0, 0.1)',
        with: '30%',
        padding: '10px 15px',
        boderRadius: '5px'
    },
    img: {
        with: '100%'
    }
}
class Producto extends Component {
    render() {

        const { producto, agregarAlCarro } = this.props
        return (
            <div style={styles.producto}>
                <img style={styles.img} alt={producto.name} src={producto.img} />
                <h3>{producto.name}</h3>
                <p>{producto.price}</p>
                <Button onClick={() => agregarAlCarro(producto)}>
                    Agregar al Carro
                </Button>
            </div>
        )

    }
}


export default Producto 