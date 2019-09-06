import React, { Component } from 'react';

class Productos extends Component {
    state = {
        productos : [
            { id : 1, name : 'Camisa ReactJS', precio: 30},
            { id : 2, name : 'Camisa VueJS', precio: 30},
            { id : 3, name : 'Camisa Angular', precio: 30},
            { id : 4, name : 'Camisa Node.JS', precio: 30},
        ]
    }
    render() {

        const {productos} = this.state;
        console.log(productos);

        return ( 
            <h>Lista de Productos</h>
        );
    }
}

export default Productos;