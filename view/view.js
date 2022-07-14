import{ tblProductList} from'../control/element.js';
import getApiProducts from '../model/getApiProduct.js';

const productData=await getApiProducts();
console.log(productData);
let html='';
productData.forEach((element) => {
    html+=`
    <tr>
      <td>${element.id}</td>
      <td>${element.name}/td>
      <td>${element.price}</td>
      <td>${element.image}</td>
      <td>${element.description}</td>
      <td>${element.id}</td>
    </tr>
    
    `;

});
tblProductList.innerHTML=html;
