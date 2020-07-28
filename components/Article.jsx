function Article(props) {
    
    const displayStyle = {
        position: "relative",
        display: "inline-block",
        width: "90vw",
        height: "auto",
        margin: "0 auto",
        padding: "0"
    }

    const contentContainerStyle = {
        display: "block",
        width: "100%",
        height: "auto",
        backgroundColor: "white",
        boxShadow: "0 4px 15px 0 rgba(0, 0, 0, 0.75)",
        borderRadius: "10px",
        margin: "0",
        padding: "0",
    }

    const contentHeaderStyle = {
        width: "auto",
        height: "auto",
        padding: "5%",
        borderTopLeftRadius: "10px",
        borderTopRightRadius: "10px",
        borderBottom: "none",
        backgroundColor: "#aacfd0",
        display: "flex",
        margin: "0",
        justifyContent: "center",
        alignItems: "center",
        fontSize: "calc(1rem + 6vmin)",
        textAlign: "center"
    }

    const contentTitleStyle = {
        width: "auto",
        height: "auto",
        padding: "5%",
        fontSize: "calc(1rem + 2vmin)",
        backgroundColor: "#f4f7f7",
        margin: "0",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        textAlign: "center"
    }

    const contentBodyStyle = {
        padding: "5%",
        margin: "0",
        width: "auto",
        height: "auto",
        fontSize: "calc(1rem + 0.5vmin)",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
    }

    return (
        <div style={displayStyle} className={props.contentClass}>
            <div style={{height: "10vmin"}}></div>
            <div style={contentContainerStyle} className={props.contentClass}>
                <h1 style={contentHeaderStyle} className={props.contentHeaderClass}>{props.header}</h1>
                <h2 style={contentTitleStyle} className={props.contentTitleClass}>{props.title}</h2>
                <p style={contentBodyStyle} className={props.bodyTextClass}>{props.content}</p>
            </div>
        </div>
    )
}

export default Article;