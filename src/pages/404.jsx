import Error from '../images/404.png'
const style = {

    margin: "auto",
    padding: "10px",
    backgroundColor: '#000000',
    height: '500px',
}

export const Error404 = () => {
    return (
        <div style={style}>
            <img style={{
                width: "300px",
                marginTop: "10px",
            }} src={Error} alt="404" />




            <h2 style={{
                fontSize: "50px",
                fontWeight: "large",
                margin: "0",
                color: 'white'
            }}>404</h2>


            \
            <h2 style={{ margin: "0", color: 'white' }}>صفحه پیدا نشد</h2>


            <button id="backBtn" style={{
                backgroundColor: "#000000",
                width: "170px",
                height: "70px",
                border: "none",
                backgroundColor: 'blue',
                borderRadius: '10px',
                marginTop: '10px'
            }} ><a style={{ color: "white", paddingBottom: "130px" }} href='/'>برگشت به خانه</a></button>
        </div>
    )
}