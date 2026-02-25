

let currentdate = new Date();



let Time = ()=>{
  return <h3>This is the current time: {currentdate.toLocaleDateString()} - {currentdate.toLocaleTimeString()} </h3>
}
export default Time;