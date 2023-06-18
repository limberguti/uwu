import React, { useState } from 'react';
import bg2 from './images/bg2.png';
import './style.css';
import Card from './Card';
import axios from 'axios';

const Main = () => {
    const [search,setSearch] = useState('');
    const [bookData,setData] = useState([]);
    const searchBook = (e)=>{
        if(e.key === 'Enter'){
            axios.get('https://www.googleapis.com/books/v1/volumes?q='+search+'&key=AIzaSyBXA2_96YLM17Du2EVJ_LoupOLQv4aECDg'+'&maxResults=40').then(res=>setData(res.data.items)).catch(err=>console.log(err))
        }
    }
    return (
        <>
            <div className='header'>
                <div className='row1'>
                    <h1>LIBROS</h1>
                </div>
                <div className='row2'>
                    <h2>Buscar libro</h2>
                    <div className='search'>
                        <input type='text' placeholder='Ingresar nombre del libro' value={search} onChange={e=>setSearch(e.target.value)} onKeyDown={searchBook}/>
                        <button>BUSCAR</button>
                    </div>
                    <img src={bg2}/>
                </div>
            </div>
            <div className='container'>
                {
                    <Card book={bookData}/>
                }
            </div>
        </>
    );
}

export default Main;
