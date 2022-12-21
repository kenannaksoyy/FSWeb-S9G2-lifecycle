import React from 'react'
import axios from 'axios';

export default function Todo(props) {
  const {yapilacak,yapilacaklar,setYapilacaklar, gizle} = props
  
  const todosPatch = () => {
        axios
        .patch(`http://localhost:9000/api/todos/${yapilacak.id}`, {
        tamamlandi: !(yapilacak.tamamlandi),
        })
        .then(() => {
            let arr= yapilacaklar.map( y => {
                if(y.id === yapilacak.id ){
                y.tamamlandi=!(y.tamamlandi);
                return y;
                }
                return y;
            });
            setYapilacaklar(arr);
        }); 
    }
  const handleClick = () => {
    todosPatch(); 
    };
  
    return (
      <div>
        {
          !(gizle && yapilacak.tamamlandi) && 
          <li 
          key={yapilacak.id} 
          onClick={handleClick}>{yapilacak.isim} {yapilacak.tamamlandi && "Ok"}</li>
        }   
      </div>
    );
}
