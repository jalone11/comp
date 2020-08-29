import React from 'react';
import ProductTable from './Component/ProductTable';


const products = [{name:'tv',price:'500',category:'electronics'},
{name:'tshirt',price:'500',category:'clothes'}]

const App = (props) => {

  return (
    <>
<ProductTable products={products}/>
    </>
      
  );
}

export default App;