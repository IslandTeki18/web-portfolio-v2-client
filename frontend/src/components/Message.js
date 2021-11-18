import Alert from "react-bootstrap/Alert";

const Message = ({ variant, children, isDismissible }) => {
    return (
        <div
            className={`alert${variant ? ` alert-${variant}` : ""}${
                isDismissible && " alert-warning alert-dismissible fade show"
            }`}
        >
            {children}
        </div>
    );
};

Message.defaultProps = {
    variant: "info",
};

export default Message;
