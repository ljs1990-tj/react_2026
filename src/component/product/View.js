import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

function ProductView(){
    let { productId } = useParams();
    let [info, setInfo] = useState({});

    function getProduct(){
        fetch("http://localhost:3010/product/"+productId)
            .then(res => res.json())
            .then(data => {
                setInfo(data.info);
            });
    }

    useEffect(()=>{
        getProduct();
    }, []);

    return <>
        {/* 제품번호, 제품명, 브랜드, 가격, 설명 출력*/}
        <div>제품번호 : {info.PRODUCT_ID}</div>
        <div>제품명 : {info.PRODUCT_NAME}</div>
        <div>브랜드 : {info.BRAND}</div>
        <div>가격 : {info.PRICE}</div>
        <div>설명 : {info.DESCRIPTION}</div>
    </>
}
export default ProductView;