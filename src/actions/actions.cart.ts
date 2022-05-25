
export const add = (item:object,qty:number) => {
  
    return {
      'type': "ADD",
      'item':item,
      'qty':qty
    };
    
  };


  export const clear = () => {
  
    return {
      'type': "CLEAR",
    };
    
  };
  
 
 