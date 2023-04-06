// 정보소개 페이지
const Info = () => {
    return (
        <>
            <div className="info-area">
                <div id="empty-area"/>
                <header id="info-header">
                    <h2>High quality shoes, Limited edition, Everything.</h2>
                    <p>We will do our best to provide the best.</p>
                </header>

                <img width='90%' alt="contact" src={process.env.PUBLIC_URL + "/info.png"} />
                <h2 id="info-footer">Look around!</h2>
            </div>
        </>
    )
}

export default Info;