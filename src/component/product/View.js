import { useParams } from "react-router-dom";

function ProductView(){
    let { productId } = useParams();
    console.log(productId);
    return <>
        {/* 제목번호, 제품명, 브랜드, 가격, 설명 출력*/}
    </>
}
export default ProductView;