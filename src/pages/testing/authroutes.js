import React, { useState } from "react"
import { Navigate} from "react-router-dom";

function AuthWelcome(){
  return(
    <div>
      <p>Hola, esto es una pagina de prueba</p>
    </div>
  )
}
export default function AuthTesting(){
  const [isAuth, setAuth]= useState(true)
  if(isAuth){
    return (<AuthWelcome/>)
  }else{
    return (<Navigate to="/"/>)
  }
}