import React, {useState, useEffect} from 'react'
import SearchBar from './SearchBar'
import axios from 'axios'
import ProductList from './ProductList'


function ProductPage() {

  const [products, setProducts] = useState()
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState(null)
  const [filterText, setFilterText] = useState('')


  useEffect( () => {
    const fetchData = async () => {
        try{
            // const res = await fetch(`https://dummyjson.com/products/search?q=${filterText}`)
            // const data = await res.json()
            // setProducts(data.products)
            const res = await axios.get(`https://dummyjson.com/products/search?q=${filterText}`)
            console.log(res)
            setProducts(res.data.products)
        }catch(err){
            setError(err)
        }finally{
            setLoading(false)
        }
    }
    fetchData()
    }, [filterText])

if (loading){
    return <div>Loading...</div>
    }
    
if (error){
return <div>Error: (error.message)</div>
}

    return (
    <div className="product-page">
        <h1>Product Search</h1>
        <SearchBar setFilterText={setFilterText} />
        <hr />

        <ProductList products={products}/>
    </div>
    )
}

export default ProductPage
