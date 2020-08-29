import React from 'react'

const ProductTable = (props) =>{
    return(
        <>
    <table>
        <tr>
            <td>NAME</td>
            <td>CATERGOY</td>
            <td>PRICE</td>
        </tr>

{

    props.products.map(item=>(
        <tr>
            <td>{item.name}</td>
            <td>{item.price}</td>
            <td>{item.category}</td>
        </tr>

    ))
}    </table>



        </>
      
    )}

ProductTable.propTypes = {
        name: PropTypes.string,
        Price: PropTypes.number,
    }

export default ProductTable