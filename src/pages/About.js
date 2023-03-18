/*eslint-disable*/
import { Outlet } from 'react-router-dom';

// 쇼핑몰정보 페이지
const About = (props) => {
    return (
        <>
            <h3>Info</h3>
            {/* Outlet 위치에 하위 컴포넌트(페이지?) 보임 */}
            <Outlet></Outlet>
        </>
    )
}

export default About;