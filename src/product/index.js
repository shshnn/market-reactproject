import { useParams } from "react-router-dom/cjs/react-router-dom";
import axios from "axios";
import { useEffect,useState } from "react";
import "./index.css";
function ProductPage() {
    const {id}= useParams();
    const [product, setProduct] = useState(null);
    
    
    useEffect(function(){

 
    axios.get(`https://1357fe84-d97b-454d-9475-0ca1806a88e6.mock.pstmn.io/products/${id}`).then(function(result){
        
        setProduct(result.data);
        console.log(result)
        
    }).catch(function(error){
   
        console.log('2222');
             console.error(error);
    
    });
},[]);

if(product == null){
    return <h1>상품 정보를 받고 있습니다...</h1>
}
    return (
    <div>
        <div id="image-box">
        <img src={"/"+product.imageUrl} />
        </div>
        <div id="profile-box">
            <img src="/images/images/icons/avatar.png"/>
           <span>{product.seller}</span> 
        </div>
        <div id="contents-box">
            <div id="name">{product.name}</div>
            <div id="price">{product.price}원</div>
            <div id="createdAt">2023년 10월 30일</div>
            <div id="description">{product.description}</div>
        </div>
    </div>
    );
   }

   export default ProductPage;