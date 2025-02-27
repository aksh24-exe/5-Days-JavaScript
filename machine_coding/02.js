/*  Function Expression*/
const ptaNhi = (fn, delay) => {   
    let myId = null
    return (...args)=>{
        setTimeout(()=>{
            fn(...args)        
        },delay)
    }
}