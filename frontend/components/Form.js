import axios from 'axios';
import React,{useState} from 'react';



export default function Form(props) {
    const {yapilacaklar, setYapilacaklar,todosGet} = props
    const [yeni, setYeni] = useState("");
    const [postBasari, setPostBasari] = useState("");
    const todosPost = (_yeni) => {
        axios.post("http://localhost:9000/api/todos",{isim:_yeni,tamamlandi:false})
        .then(res => {
            //201 Oluşturuldu cevabı ve yeni todoyu içeren bir payload döndürür
            if(res.status===201) {
                setPostBasari(`${_yeni} Basariyla Eklendi`);
                todosGet();
            }
            else setPostBasari(`${_yeni} Eklenmesi Basarisiz`);
        })
    }
    const handleSubmit = ( e ) => {
        e.preventDefault();
        todosPost(yeni);
        setYeni("");
    };

    const handleChange = ( e ) => {
        setYeni(e.target.value);
    };

    return (
      <div>
        <p>{postBasari}</p>
          <form onSubmit={handleSubmit}>
            <input type="text" name='yeni' value={yeni} placeholder='Yapilcak Girin' onChange={handleChange}/>
            <input type="submit" value="Yapilacak Ekle" disabled= {yeni.length===0 && true}/>
        </form>
      </div>
    )
}
