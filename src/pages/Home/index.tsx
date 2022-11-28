import React from 'react'
import Header from '../../components/Header'
import "./style.css";

function index() {
  return (
    <>
        <Header/>
        <div>
            <div className="home-header">
                <span>My Books</span>
            </div>   
        </div>  
    </>
  )
}

export default index