import React from 'react';
import NodeFetch from 'node-fetch';
// import axios from 'axios';
import { useEffect, useState } from 'react';

function LastProductinDB(){
    const [lastProduct, setLastProduct] = useState([]);
    const [lastProductImage, setLastProductImage] = useState();

    useEffect(()=>{

        fetch('http://localhost:3001/api/products/')
        .then(res => res.json())
        .then(data => {
            let lastProductDB = data.data
            setLastProduct(lastProductDB[lastProductDB.length -1].description)
        })

        fetch('http://localhost:3001/api/users/')
        .then(res => res.json())
        .then(data => {
            let lastProductDB = data.data
            setLastProductImage(lastProductDB[lastProductDB.length -1].image)
        })
    }, [])




    return(
        <div className="col-lg-6 mb-4">
            <div className="card shadow mb-4">
                <div className="card-header py-3">
                    <h5 className="m-0 font-weight-bold text-gray-800">Último producto ingresado</h5>
                </div>
                <div className="card-body">
                    <div className="text-center">
                        <img className="img-fluid px-3 px-sm-4 mt-3 mb-4" style={{width: 40 +'rem'}} src={`http://localhost:3001/images/products/${lastProductImage}`} alt={`${lastProductImage}`}/>
                    </div>
                    <p>{`${lastProduct}`}</p>
                    <a className="btn btn-danger" target="_blank" rel="nofollow" href="/">Ver detalle del producto</a>
                </div>
            </div>
        </div>
    )
}

export default LastProductinDB;
