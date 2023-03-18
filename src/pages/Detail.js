/*eslint-disable*/
import { useParams } from "react-router-dom";

// 상품 상세 컴포넌트
const Detail = (props) => {
    // URL 파라미터에 입력한 값이 남음
    let {seq} = useParams(); // 값이 String인 것 주의..

    // 원본 state가 바뀔 수 도 있으니까
    // seq와 id가 같은 상품 찾기
    let prd = props.shoes.find((x) => x.id == seq);
    
    return (
        <>
            <div className="container">
                <div className="row">
                    <div className="col-md-6">
                        <img src={process.env.PUBLIC_URL + "/shoes/product"+(Number(seq)+1)+".png"} width="100%" />
                    </div>
                    <div className="col-md-6">
                        <h4 className="pt-5">{prd.title}</h4>
                        <p>{prd.content}</p>
                        <p>{prd.price}</p>
                        <button className="btn btn-danger">주문하기</button> 
                    </div>
                </div>
            </div> 
        </>
    )
}


export default Detail;