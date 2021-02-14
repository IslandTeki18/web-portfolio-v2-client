import Alert from "react-bootstrap/Alert";

const Message = ({ variant, children, show }) => {
  return (
    <Alert variant={variant} show={show}>
      {children}
    </Alert>
  );
};

Message.defaultProps = {
  variant: "info",
};

export default Message;
