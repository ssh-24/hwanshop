/*eslint-disable*/
import { Table } from 'react-bootstrap'
import { useDispatch, useSelector } from "react-redux"
import { addCount, subCount } from '../store/cartSlice'
import { addStock, subStock } from '../store/stockSlice'

// 장바구니 페이지
const Cart = () => {
    // Redux Store 에서 State 가져오기
    let cart = useSelector((state) => state.cart )
    let stock = useSelector((state) => state.stock )
    let user = useSelector((state) => state.user )

    let dispatch = useDispatch()

    return (
        <>
            <Table>
                <thead>
                    <tr>
                    <th>#</th>
                    <th>Product</th>
                    <th>Amount</th>
                    <th>Add</th>
                    <th>Sub</th>
                    </tr>
                </thead>
                {
                    cart.map((a,i)=> {
                        if (a.count === 0) return;
                        return (
                        <tbody key={i}>
                            <tr>
                            <td>{i+1}</td>
                            <td>{a.name}</td>
                            <td>{a.count}</td>
                            <td width={'7%'}><button className='btn btn-primary pt-1 pb-1' onClick={()=>{
                                // 재고 없으면 메세지 처리
                                if (stock[a.id].count <= 0) {
                                    alert("There is no stock left.")
                                    return;
                                }
                                dispatch(subStock(a.id))
                                dispatch(addCount(a.id))
                            }}>+</button></td>
                            <td width={'7%'}><button className='btn btn-danger pt-1 pb-1' onClick={()=>{
                                // 마지막 상품이면 메세지 처리
                                if (cart[a.id].count <= 1) {
                                    alert("It will be deleted from your shopping cart.")
                                }
                                dispatch(addStock(a.id))
                                dispatch(subCount(a.id))
                            }}>-</button></td>
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