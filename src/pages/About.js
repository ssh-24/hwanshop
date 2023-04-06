/*eslint-disable*/
import { Outlet } from 'react-router-dom';
import styled from 'styled-components';
import { useNavigate } from 'react-router-dom';
import { useEffect, useState } from 'react';

// styled-components 사용
let Btn = styled.button`
    background : ${ props => props.bg };
    color : ${ props => props.bg == "#1F2326" ? "#FFFFFF" : "black"};
    padding : 10px 20px;
    margin : 3px;
    display : inline-block;
    border-radius : 5px;
    border : 1px solid white;
    width : 40%;
    &:hover {
        background: #007bff;
        -webkit-transform: scale(1.01);
        transform: scale(1.01);
        transition: 0.2s;
      }
`

// 쇼핑몰 정보 페이지
const About = (props) => {
    let navigate = useNavigate();

    let [fade, setFade] = useState('');
    let [tab, setTab] = useState('');

    // Tab 전환 애니메이션
    useEffect(()=>{
        let a = setTimeout(() => {setFade('transition-end')},50)
        return () => {
            clearTimeout(a)
            setFade('')
        }
    },[tab])

    return (
        <>
            <div className='about-area'>
                <Btn bg={"#1F2326"} onClick={()=> { setTab(0); navigate('/about/info')}}>Info</Btn>
                <Btn bg={"#1F2326"} onClick={()=> { setTab(1); navigate('/about/contact')}}>Contact</Btn>
            </div>
            {/* Outlet 위치에 하위 컴포넌트(페이지) 보임 */}
            <div className={`about-area transition-start ${fade}`}>
                <Outlet></Outlet>
            </div>
        </>
    )
}

export default About;