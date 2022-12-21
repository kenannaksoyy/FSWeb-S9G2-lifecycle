import React,{useState,useEffect} from 'react';
import axios from "axios";
import Form from "./Form";
import TodoList from './TodoList';



export default function App () {

  const [yapilacaklar, setYapilacaklar] = useState([]);
  const [cek, setCek] = useState(false);
  const todosGet = () => {
    axios
    .get("http://localhost:9000/api/todos")
    .then(res => {
        setYapilacaklar(res.data.data);
    })
    }

    useEffect(() => {
        todosGet();
    }, [cek]);

    const [gizle, setGizle] = useState(false);

    const yapilanlariKaldir = () => {
        let arr = [];
        yapilacaklar.forEach( y => {
            if(y.tamamlandi === false ){
                arr.push(y);
            }
          });
          
          setYapilacaklar(arr);
          console.log(yapilacaklar);
    }
  
    console.log(yapilacaklar);
    return (
      <div>
        <TodoList yapilacaklar={yapilacaklar} setYapilacaklar={setYapilacaklar} gizle={gizle} todosGet={todosGet}/>
        <Form yapilacaklar={yapilacaklar} setYapilacaklar={setYapilacaklar} todosGet={todosGet} />
        <button value="gizle" onClick={()=>setGizle(!gizle)}>
          {
            !(gizle) ? "Yapilanlari Gizle" : "Yapilanlari Goster"
          }
        </button>
        <button value="cek" onClick={()=>setCek(!cek)}>Yapilacaklar Refresh</button>
        <button value="kaldir" onClick={()=>yapilanlariKaldir()}>Yapilanlari Kaldir</button>

      </div>
    )
}
