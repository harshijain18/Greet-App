import {Button} from './button';
import { Input } from './input';
import { Output } from './output';
import {useState} from 'react';


export function Greet(){
    const [firstName , setfirstName] = useState("");
    const [lastName , setlastName] = useState("");
    const [fullName , setfullName] = useState("");

const inputFname = (event) => {
    console.log(event)
   
        setfirstName(event.target.value)
    }
const inputLname = (evnt) => {
    
        setlastName(evnt.target.value)
    
}

const capital = (str) => 
    str.charAt(0).toUpperCase() +  str.substring(1).toLowerCase();

const FullName = () => {
    const Name = capital(firstName)+ " "+capital(lastName);
        setfullName(Name)
    
}
const toClear = () => {
   
        setfirstName("")
        setlastName("")
        setfullName("")
    
}

return (<>

<Output heading="GREET APP"/>
<Input val = {firstName} fn = {inputFname}placeholder="Enter First name" label="First Name"></Input>
<br></br>
<Input val = {lastName} fn = {inputLname}placeholder="Enter Last name" label= "Last Name"></Input>
<br></br>
<Button fn = {FullName} label = "GREET"/>
<Button fn = {toClear}label = "CLEAR ALL"/>
<br></br>
<Output heading={fullName}/>


</>
);
}