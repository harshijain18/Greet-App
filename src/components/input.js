export const Input = ({placeholder , label , fn , val}) => {

   return (<div >
   <label>{label} </label>
   <input  value ={val} onChange = {fn} type="text" placeholder={placeholder} ></input>
   </div>);
}