import React from 'react'
import'./ListItems.css'

function ListItems(props) {
    const items=props.items
    const ListItems=items.map(item=>{
        return <div className='list' key={item.key}>
            <p>
                <input type='text' id={item.key} value={item.text}
                onChange={(e)=>{
                    props.setUpdate(e.target.value,item.key)
                }}/>
            <img src='https://image.flaticon.com/icons/png/512/2919/2919992.png' className='delicon' 
            onClick={()=>props.deleteItem(item.key)}></img>
            </p>
        </div>
    })
    return (
        <div>
            {ListItems}
        </div>
    )
}

export default ListItems
