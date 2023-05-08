import './App.css';
import { useEffect, useState } from 'react';
function App() {
const [name, setName] = useState([]);

useEffect(()=>{
  names()
},[]);

const names=async()=>{
  const responce=await fetch("https://reqres.in/api/users?page=1");
  setName(await responce.json());
}
return (
<div className="App">
   {name.data?.map((d)=>{
    return(
     <div className='info'>
       <div className='details'>
       <div><img src={d.avatar}></img></div>
       <div>S.No: {d.id}</div>
       <div>Name: {d.first_name} {d.last_name}</div>
       <div>Email: {d.email}</div>
       </div>
     </div>
    )
   })}

</div>
);
}
export default App;
