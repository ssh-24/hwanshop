// 상품 컴포넌트
const Product = (props) => {

    console.log(props);
    console.log("이미지 URL : ","/shoes/product"+props.data[props.seq].id+".png");

    return (
        <>
            <div className="col-md-4">
                <img src={process.env.PUBLIC_URL + "/shoes/product"+props.data[props.seq].id+".png"} width='85%' height='70%'/>
                <h4>{props.data[props.seq].title}</h4>
                <p>{props.data[props.seq].price}</p>
            </div>
        </>
    )
}

export default Product;