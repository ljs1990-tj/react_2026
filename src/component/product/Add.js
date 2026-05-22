import { useRef } from "react";


function ProductAdd(){
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
            <button>등록!</button>
        </div>
    </>
}
export default ProductAdd;