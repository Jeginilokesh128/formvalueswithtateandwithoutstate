

import './App.css'

function App() {


  return (
    <>

      <form onSubmit={(data1)=>{
        data1?.preventDefault()
        const formData = new FormData(data1.target); // event.target is the <form>
  const data = Object.fromEntries(formData);  // convert FormData to object
  console.log(data); // { username: "value", password: "value" }
       
        //  const data = Object.fromEntries(formData); // convert to object
    // console.log(data); // { username: "value", password: "value" }
        console.log(formData,"formdata")
        
      }}>
        <input type="text" name="username" placeholder='username'/>
        <input type="password" name="password" placeholder='password'/>
        <input type="submit"/>
      </form>
    </>
  )
}

export default App
