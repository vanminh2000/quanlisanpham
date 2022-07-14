import {URL} from'../control/URL.js'

const getApiProducts= async()=>{
    try{
        const response=await fetch(URL);
        console.log(response);
        if(!response.ok){
            throw new Error('something wrong');
        }
        const  productData=await response.json();
        return productData;
    }catch(error){
        console.log(error);
    }
}
export default getApiProducts