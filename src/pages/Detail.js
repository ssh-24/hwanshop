/*eslint-disable*/
import { useParams } from "react-router-dom";

// 상품 상세 컴포넌트
const Detail = (props) => {
    // URL 파라미터에 입력한 값이 남음
    let {seq} = useParams(); // 값이 String인 것 주의..

    // 원본 state가 바뀔 수 도 있으니까
    // seq와 id가 같은 상품 찾기
    let prd = props.shoes.find((x) => x.id == seq);
    let formatPrice = "₩ "+ addComma(prd.price+"");
    
    return (
        <>
            <div className="container">
                <div className="row">
                    <div className="col-md-6">
                        <img src={process.env.PUBLIC_URL + "/shoes/product"+(Number(seq)+1)+".png"} width="100%" />
                    </div>
                    <div className="col-md-6">
                        <h4 className="pt-5">{prd.title}</h4>
                        <p id="detail-content">{prd.content}</p>
                        <p id="detail-price">{formatPrice}</p>
                        <button className="btn btn-danger">주문하기</button> 
                    </div>
                </div>
            </div> 
        </>
    )
}


// 숫자값에 세자리 콤마(,) 추가하는 메서드 
const addComma = (value, defaultStr = '') => {
    // null 체크, 값이 없으면 두번째 parameter 값을 반환 (default 값 : '')
    if(value == null || value.length == 0 || value == undefined) {
        return defaultStr;
    }

    let integerAndDecimal = value.split('.'); // 소숫점 . 을 기점으로 나눠준다
    let integer = integerAndDecimal[0]; // 정수부
    let decimal = integerAndDecimal.length > 1 ? '.' + integerAndDecimal[1] : ''; // 소수부가 있을 때 .xxx형식으로 표현, 없으면 공백
    
    let rgx = /(\d+)(\d{3})/; // 세자리 숫자에 한자리 숫자가 더해진 정규표현식을 정의
    while (rgx.test(integer)) { // test() : 정규 표현식 패턴을 검색하여 매칭결과를 Boolean으로 반환
        integer = integer.replace(rgx, '$1' + ',' + '$2'); // 세자리마다 콤마를 추가한다
    }
    // let result = integer+decimal; // 소숫점이 필요하다면 붙여주면 된다
    let result = integer; // 정수값만을 반환
    return result ;
}


export default Detail;