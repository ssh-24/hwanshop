import { Table } from 'react-bootstrap'
import { useSelector } from "react-redux"


// 장바구니 페이지
const Cart = () => {
    // Redux Store 에서 State 가져오기
    let cart = useSelector((state) => state.cart )
    let stock = useSelector((state) => state.stock )
    console.log("장바구니",cart);
    console.log("재고",stock);

    return (
        <>
            <Table>
                <thead>
                    <tr>
                    <th>#</th>
                    <th>상품명</th>
                    <th>수량</th>
                    <th>변경하기</th>
                    </tr>
                </thead>
                {
                    cart.map((a,i)=> {
                        return (
                        <tbody key={i}>
                            <tr>
                            <td>{i+1}</td>
                            <td>{a.name}</td>
                            <td>{a.count}</td>
                            <td>안녕</td>
                            </tr>
                        </tbody>
                        )
                    })
                }
            </Table> 
        </>
    )
}

export default Cart;