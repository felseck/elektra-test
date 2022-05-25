import React, { useState, useEffect, useContext, useCallback } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import { useSelector, useDispatch } from "react-redux";
import { getProducts } from "../requests/request.products.get";
import { deleteProduct } from "../requests/request.product.delete";
import Errors from "../components/component.errors"


function Products(props, context) {


  const products = useSelector((state) => state.products);


  const dispatch = useDispatch();

  /*const getProducts = useCallback(() => {

    axios.get(
      `${API_URL}/products`, {
      params: {
        //id : 12345
      }
    })
      .then(response => {
        setProducts(response.data);
      })
      .catch(error => {
        setError(error);
      });

  }, [API_URL])*/

  useEffect(() => {

    //getProducts();

    dispatch(getProducts())

  }, [dispatch])


  return (
    <div>

      <Errors />

      <h1>Productos</h1>

      <Link to={`/product/create`} className="btn btn-success" >Agregar nuevo producto</Link>


      <div className="table-responsive">

        <table className="table">
          <thead>
            <tr>
              <th scope="col">#</th>
              <th scope="col">Nombre</th>
              <th scope="col">Costo</th>
              <th scope="col">Precio</th>
              <th scope="col">Sku</th>
              <th scope="col">Categoria</th>
              <th scope="col">Acciones</th>
            </tr>
          </thead>
          <tbody>

            {products.data.map((product, index) => {
              return (
                <tr key={`${index}_${product.id}`}>
                  <th scope="row">{product.id}</th>
                  <td>{product.name}</td>
                  <td>${product.cost}</td>
                  <td>${product.price}</td>
                  <td>{product.sku}</td>
                  <td>{product.category ? product.category.name : ''}</td>
                  <td>

                    <div className="btn-group" role="group" aria-label="Acciones">
                      <Link to={`/product/details/${product.id}`} className="btn btn-info" >Detalles</Link>
                      <Link to={`/product/update/${product.id}`} className="btn btn-primary" >Editar</Link>
                      <button type="button" className="btn btn-danger" onClick={(e) => dispatch(deleteProduct(product.id))}>Eliminar</button>
                    </div>

                  </td>
                </tr>
              )
            })}

          </tbody>
        </table>

      </div>
    </div>
  )

}

export default Products;

