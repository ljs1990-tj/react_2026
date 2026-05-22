import { useRef, useEffect } from "react";
import { useParams } from "react-router-dom";

function ProductEdit(){
    let {productId} = useParams();
    let id = useRef("")
    let name = useRef("");
    let brand = useRef("");
    let price = useRef("");
    let desc = useRef("");
    function getProduct(){
            fetch("http://localhost:3010/product/"+productId)
                .then(res => res.json())
                .then(data => {
                    id.current.value = data.info.PRODUCT_ID;
                    name.current.value = data.info.PRODUCT_NAME;
                    brand.current.value = data.info.BRAND;
                    price.current.value = data.info.PRICE;
                    desc.current.value = data.info.DESCRIPTION;
                });
        }
    useEffect(()=>{
        getProduct();
    }, []);

    return <>
        <div>번호 : <input ref={id}></input></div>
        <div>제품명 : <input ref={name}></input></div>
        <div>브랜드 : <input ref={brand}></input></div>
        <div>가격 : <input ref={price}></input></div>
        <div>설명 : <input ref={desc}></input></div>
    </>
}
export default ProductEdit;