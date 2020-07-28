function Product(props) {
    
    const displayStyle = {
        position: "relative",
        display: "inline-block",
        width: "80%",
        height: "auto",
        margin: "0 auto",
        padding: "0"
    }

    const contentContainerStyle = {
        display: "block",
        width: "100%",
        height: "auto",
        backgroundColor: "white",
        boxShadow: "0 4px 15px 0 rgba(0, 0, 0, 0.15)",
        borderRadius: "10px",
        margin: "auto",
        padding: "0",
    }

    const imageContainer = {
        width: "90%",
        height: "auto",
        padding: "5%",
        backgroundColor: "white",
        display: "flex",
        margin: "auto",
        justifyContent: "center",
        alignItems: "center",
        borderRadius: "10px"
    }

    const imageStyle = {
        width: "100%",
        height: "auto",
        objectFit: "scale-down",
        borderBottom: "none",
        backgroundColor: "white",
        display: "flex",
        margin: "0",
        justifyItems: "center",
        alignItems: "center",
        borderTopLeftRadius: "10px",
        borderTopRightRadius: "10px", 
    }

    const contentHeaderStyle = {
        width: "auto",
        height: "auto",
        padding: "5%",
        borderBottom: "none",
        backgroundColor: "#b88759",
        color: "white",
        display: "flex",
        margin: "0",
        justifyContent: "center",
        alignItems: "center",
        fontSize: "calc(1rem + 2vmin)",
        textAlign: "center"
    }

    const contentTitleStyle = {
        width: "auto",
        height: "auto",
        padding: "5%",
        fontSize: "calc(1rem + 1vmin)",
        backgroundColor: "#E6D9CC",
        margin: "0",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        textAlign: "center"
    }

    const contentBodyStyle = {
        padding: "10% 5% 5% 5%",
        margin: "0",
        width: "auto",
        height: "auto",
        fontSize: "calc(1rem + 0.5vmin)",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
    }

    const buttonContainerStyle = {
        padding: "5%",
        margin: "0",
        width: "auto",
        height: "auto",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        borderBottomLeftRadius: "10px",
        borderBottomRightRadius: "10px", 
    }

    const buttonStyle = {
        padding: "2.5%",
        margin: "0",
        width: "auto",
        height: "5vh",
        fontSize: "calc(1rem)",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: "#b69e88",
        borderRadius: "5px",
        border: "white",
    }

    return (
        <div style={displayStyle} className={props.contentClass}>
            <div style={{height: "15vmin"}}></div>
            <div style={contentContainerStyle} className={props.contentClass}>
                <div style={imageContainer}>
                  <img style={imageStyle} src={props.imgSrc}></img>
                </div>
                <h1 style={contentHeaderStyle} className={props.contentHeaderClass}>{props.header}</h1>
                <h2 style={contentTitleStyle} className={props.contentTitleClass}>{props.title}</h2>
                <p style={contentBodyStyle} className={props.bodyTextClass}>{props.content}</p>
                <div style={buttonContainerStyle}>
                  <button style={buttonStyle} onClick={props.onClick}>add to cart</button>
                </div>
            </div>
        </div>
    )
}



export default Product;