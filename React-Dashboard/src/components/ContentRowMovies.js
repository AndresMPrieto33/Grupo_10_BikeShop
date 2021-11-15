import React from 'react';
import SmallCard from './SmallCard';
import NodeFetch from 'node-fetch';
import { useEffect, useState } from 'react';

function ContentRowMovies(){

    const [usuarios, setUsuarios] = useState();
    const [productos, setProductos] = useState();
    useEffect(() => {
        fetch(`http://localhost:3001/api/products/`)
        .then(res => res.json())
        .then(data => {
            setProductos(data.meta.totalResults)
        })
        fetch(`http://localhost:3001/api/users/`)
        .then(res => res.json())
        .then(data => {
            setUsuarios(data.meta.totalResults)
        })
       
    })


    let productosEnDB = {
        title: 'Productos en la DB',
        color: 'primary', 
        cuantity: productos,
        icon: 'fa-clipboard-list'
    }

   

    let UsuariosEnDB = {
        title:' Usuarios en la DB', 
        color:'success', 
        cuantity: usuarios,
        icon:'fa-award'
    }

    /* <!-- Actors quantity --> */

    let actorsQuantity = {
        title:'Categorias' ,
        color:'warning',
        cuantity:'4',
        icon:'fa-user-check'
    }

    let cartProps = [productosEnDB, UsuariosEnDB, actorsQuantity];


    return (
    
        <div className="row">
            
            {cartProps.map( (movie, i) => {

                return <SmallCard {...movie} key={i}/>
            
            })}

        </div>
    )
}

export default ContentRowMovies;