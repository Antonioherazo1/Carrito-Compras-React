import { Component } from 'react'

const styles = {
    button: {
        backgroundColor: '#0A283E',
        color: '#fff',
        border: 'none',
        borderRadius: '5px',
        cursor: 'pointer',
        padding: '15px 20px',

    }

}

class Button extends Component {
    render() {
        return (
            <button style={styles.button} {...this.props} />
        )
    }
}


export default Button 