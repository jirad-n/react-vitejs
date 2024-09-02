import React, {useState, useEffect} from "react";
import SearchBar from "./SearchBar";
import ProductList from "./ProductList";
import axios from 'axios'
import ProductPage from "./ProductPage";
import Header from "./Header";
import LoginForm from "./LoginForm";

function App() {

  const [page, setPage] = useState(1)

  return (
    <div className="app" style={{backgroundColor: 'gold'}}>
      <Header setPage={setPage}/>
      {page === 1 && <LoginForm/> }
      {page === 2 && <ProductPage/> }
      {console.log(page)}
    </div>
    
  )
}

export default App