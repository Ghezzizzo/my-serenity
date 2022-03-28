import {getData} from '../js/utils'
import { useState, useEffect } from "react"

function Allusers() {
    const [users, setUsers] = useState([])
    useEffect(() => {
        
        const getUsers = async () => {
            const data = await getData("users")
            setUsers(data.docs.map(( (doc) => ({ ...doc.data(), id: doc.id}))))
        } 
        
        getUsers();
      
    }, [])
    
  return (
    <div>
        {
            users.map((usr) => {
                return <div key={usr.id} >
                    <p>name: {usr.name}</p>
                    <p>email: {usr.email}</p>
                </div>
            })
        }
    </div>
  )
}

export default Allusers