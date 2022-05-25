import React, { useState, useEffect, useCallback, useContext } from "react";

import axios from "axios";
import { GlobalContext } from '../contexts/context.global'

import {
   useParams
} from "react-router-dom";

import { useSelector, useDispatch } from "react-redux";
import { add } from "../actions/actions.cart.ts";



function ProductDetails(props) {

   let { id } = useParams();

   const cart = useSelector((state) => state.cart);
   const { API_URL } = useContext(GlobalContext);

   const dispatch = useDispatch();

   const [product, setProduct] = useState({});
   const [error, setError] = useState(null);



   const getProduct = useCallback(() => {

      axios.get(
         `${API_URL}/products/${id}`, {
         params: {

         }
      })
         .then(response => {
            setProduct(response.data);
         })
         .catch(error => {
            setError(error);
         });

   }, [id, API_URL])



   useEffect(() => {

      getProduct();

   }, [getProduct])


   if (error) {
      alert(error);
      setError(null);
   }


   // getProduct();

   return (
      <div>
         <h1>Detalles</h1>
         <div className="card">
            <div className="card-body">
               <h5 className="card-title">{product.name}</h5>
               <h6 className="card-subtitle mb-2 text-muted">${product.price}</h6>
               <p className="card-text">
                  Categoria:{product.category ? product.category.name : ''}
               </p>
               <div className="">
                  <h3>Especificaciones:</h3>
                  <ul>
                     {product.specs ? product.specs.map((spec, index) => {
                        return (
                           <li key={`specs_${index}`}>
                              {spec.spec.name}
                              <ul>
                                 {spec.attributes ? spec.attributes.map((attribute, index_) => {
                                    return (
                                       <li key={`attributes_${index_}`}>
                                          {attribute.attribute.name}
                                       </li>
                                    )
                                 }) : ''}
                              </ul>
                           </li>
                        )
                     }) : ''}
                  </ul>
               </div>

               {/* add(product,3)  argumentos 1 = objeto del producto, argumento 2 = cantidad de productos */}
               <button className="btn btn-success" onClick={() => dispatch(add(product, 1))}>Agregar al carrito {cart.length}</button>

            </div>
         </div>
      </div>
   )

}

export default ProductDetails;

