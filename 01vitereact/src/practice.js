const coding = ["js","ruby","php","cpp","c++"]
const values = coding.forEach ( (item) => {
    // console.log(item);
 const  newcoding = coding.filter((coding)=>{
    return  coding.length>4
 })
    
} )
console.log(values);
