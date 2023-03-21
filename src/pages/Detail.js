/*eslint-disable*/
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

// 상품 상세 컴포넌트
const Detail = (props) => {
    // URL 파라미터에 입력한 값이 남음
    let {seq} = useParams(); // 값이 String인 것 주의..
    
    // 무료배송여부 state
    let [deliveryfree, setDeliveryfree] = useState(true);
    // 수량입력 state
    let [inputval, setInputval] = useState('');
    // 구매수량 state
    let [amount, setAmount] = useState(0);

    
    // 원본 state가 바뀔 수 도 있으니까
    // seq와 id가 같은 상품 찾기
    let prd = props.shoes.find((x) => x.id == seq);
    let formatPrice = "₩ "+ addComma(prd.price+"");


    // 주문버튼 method
    const order = () => {
        let order_amount = Number(inputval);

        // 0이 아닌 숫자일 때만 실행
        if (order_amount !== 0) {
            console.log("주문 수량(inputval): ",order_amount);
            
            setAmount(order_amount); // 여기서 amount 찍어보면 이전 값이 나옴, 렌더가 호출될 때 정의된 state값으로 고정되기 때문
            setInputval('');
        }
    }


    // [useEffect] 복잡한 로직, 서버 데이터 호출 작업, 타이머 등의 코드를 작성
    useEffect(() => {
        let a = setTimeout(() => {
            setDeliveryfree(false)
        }, 2000);

        return () => {
            clearTimeout(a)
        }
    }, []) // []로 작성 시 초기 mount 시에만 동작


    useEffect(() => {
        // 주문 들어가는 로직 넣으면 될 듯
        if (amount > 0) {
            console.log("주문 수량(amount): ",amount);
            alert(`${amount} Order completed`);

            
        }
    },[amount])


    useEffect(() => {
        if (isNaN(inputval) == true) {
            alert("Please enter only numbers")
            setInputval('');
        }
    }, [inputval]);
    

    return (
        <>
            <div className="container">
                {/* alert 모달 */}
                {
                    deliveryfree == true ? 
                    <div className="alert alert-warning mt-2">
                        Free shipping for purchases within 2 seconds ☺
                    </div>
                     : null
                }

                <div className="row">
                    <div className="col-md-6">
                        <img src={process.env.PUBLIC_URL + "/shoes/product"+(Number(seq)+1)+".png"} width="100%" />
                    </div>
                    <div className="col-md-6">
                        <h4 className="pt-5">{prd.title}</h4>
                        <p id="detail-content">{prd.content}</p>
                        <p id="detail-price">{formatPrice}</p>
                        <input placeholder="amount" id="amount-input" onChange={(e)=>setInputval(e.target.value)} value={inputval}/>
                        <button className="btn btn-danger" onClick={order}>Order</button>
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