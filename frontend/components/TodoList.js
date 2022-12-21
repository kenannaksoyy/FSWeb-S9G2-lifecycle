import React from 'react'
import Todo from "./Todo"

export default function TodoList(props) {
  const {yapilacaklar,setYapilacaklar, gizle, todosGet} = props
    return (
      <div>
        <ul>
        {
          yapilacaklar.map(yapilacak => (
            <Todo yapilacak={yapilacak} yapilacaklar={yapilacaklar} setYapilacaklar={setYapilacaklar} gizle={gizle} todosGet={todosGet}/>
          ))
        }
        </ul>

      </div>
    )
}
