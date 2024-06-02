import { useState } from "react"

function Shoppinglist(){

    const[mylist,setmylist] = useState(["Shirt","Pant","Denim"])

    const[item,setitem] = useState("")

    const handleChange = (e)=> {
      setitem(e.target.value)
    }
    
    const handleAdd = ()=> {
        setmylist([...mylist,item])
        setitem("")
    }

    return(
        <div>
          <input type="text" value={item} onChange={handleChange} name="" id=""  placeholder="Enter your item"/>
          <button onClick={handleAdd}>Add</button>
          { <ul>
            {
                mylist.map((item)=> {
                    return <li>{item}</li>
                })
            }
          </ul>}
        </div> 
    )
}

export default Shoppinglist