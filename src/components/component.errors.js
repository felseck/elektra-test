import React from "react";
import { useSelector} from "react-redux";

function Errors() { 

    const errors = useSelector((state) => state.errors);

    return (
       
       <ul>
         {errors.map((error,key)=>{
          return( <li key={key}>
              {error.message}
           </li>
          )
         })}
       </ul>
    )

}

export default Errors;

