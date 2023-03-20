/*eslint-disable*/
import { Outlet } from 'react-router-dom';
import styled from 'styled-components';
import { useNavigate } from 'react-router-dom';

// styled-components 사용
let Btn = styled.button`
    background : ${ props => props.bg };
    color : ${ props => props.bg == "#abccff30" ? "#1d519f" : "black"};
    padding : 10px 20px;
    margin : 3px;
    display : inline-block;
    border-radius : 5px;
    border : 0px;
    width : 40%;
`

// 쇼핑몰 정보 페이지
const About = (props) => {
    let navigate = useNavigate();

    return (
        <>
            {/* <h1>Info</h1> */}
            <div className='about-area'>
                <Btn bg={"#abccff30"} onClick={()=> navigate('/about/info')}>Info</Btn>
                <Btn bg={"#abccff30"} onClick={()=> navigate('/about/contact')}>Contact</Btn>
            </div>
            {/* Outlet 위치에 하위 컴포넌트(페이지) 보임 */}
            <div className='about-area'>
                <Outlet></Outlet>
            </div>
        </>
    )
}

export default About;