import { useRef } from "react";
import { useNavigate } from "react-router-dom";


function ProductAdd(){
    let navigate = useNavigate();
    let id = useRef("");
    let name = useRef("");
    let brand = useRef("");
    let price = useRef("");
    let desc = useRef("");
    return <>
        <div>번호 : <input ref={id}></input></div>
        <div>제품명 : <input ref={name}></input></div>
        <div>브랜드 : <input ref={brand}></input></div>
        <div>가격 : <input ref={price}></input></div>
        <div>설명 : <input ref={desc}></input></div>
        <div>
            <button onClick={()=>{
                let product = {
                    id : id.current.value,
                    name : name.current.value,
                    brand : brand.current.value,
                    price : price.current.value,
                    desc : desc.current.value
                }
                fetch("http://localhost:3010/product", {
                    method : "POST",
                    headers : {
                        "Content-type" : "application/json"
                    },
                    body : JSON.stringify(product)
                })
                    .then(res => res.json())
                    .then(data => {
                        alert("저장 됨");
                        navigate("/product/list");
                    })

            }}>등록!</button>
        </div>
    </>
}
export default ProductAdd;