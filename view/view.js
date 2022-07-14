import{ tblProductList} from'../control/element.js';
import getApiProducts from '../model/getApiProducts.js';

const productData=await getApiProducts();
console.log(productData);
let html='';
productData.forEach((element) => {
    html+=`
    <tr>
      <td>${element.id}</td>
      <td>${element.name}/td>
      <td>${element.price}</td>
      <td>
      <img src="${element.img}" alt="">
      </td>
      <td>${element.desc}</td>
      <td> 
      <button id="arrayMethod">sửa</button>
      <button id="arrayDelete">Xóa</button>
      </td>

    </tr>
    
    `;

});
tblProductList.innerHTML=html;
