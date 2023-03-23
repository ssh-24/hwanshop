/*eslint-disable*/
import { useNavigate } from 'react-router-dom';

// 상품 컴포넌트
const Product = (props) => {
    // 페이지 이동 함수
    let navigate = useNavigate();

    let formatPrice = "₩ "+ addComma(props.data.price+"");
    let seq = props.data.id; //얘를 어떻게 Detail로 넘기지?? => URL 파라미터

    return (
        <>
            <div className="col-md-4" id="prd-container">
                <img src={process.env.PUBLIC_URL + "/shoes/product"+(props.seq+1)+".png"} alt="product" id="prd-img" 
                    onClick={()=>{
                        // 클릭 시 상세페이지
                        navigate('/detail/'+seq)
                }}/>
                <h5 id="prd-title"
                    onClick={()=>{
                        // 클릭 시 상세페이지
                        navigate('/detail/'+seq)
                }}>{props.data.title}</h5>
                <p id="prd-price">{formatPrice}</p>
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


export default Product;