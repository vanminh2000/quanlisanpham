

const getApiProducts= async()=>{
    try{
        const respone=await fetch(URL);
        console.log(respone);
        if(!respone.ok){
            throw new Error('somthing wrong');
        }
        const  productData=await respone.json();
        return productData;
    }catch(error){
        console.log(error);
    }
}