import { useEffect, useState } from "react";

function ProductList(){
    let [list, setList] = useState([]);

    function getList(){
        fetch("http://localhost:3010/product")
            .then(res => res.json())
            .then(data => {
                setList(data.list);
            });
    }
    useEffect(()=>{
        getList();
    }, [])

    return <>
        <h2>제품 목록!</h2>
        <hr></hr>
        <div>
            <table>
                <tr>
                    <th>번호</th>
                    <th>제품명</th>
                    <th>브랜드</th>
                    <th>가격</th>
                </tr>
                {list.map(item => {
                    return <tr>
                        <td>{item.PRODUCT_ID}</td>
                        <td>{item.PRODUCT_NAME}</td>
                        <td>{item.BRAND}</td>
                        <td>{item.PRICE}</td>
                    </tr>
                })}
            </table>
        </div>
    </>
}

export default ProductList;