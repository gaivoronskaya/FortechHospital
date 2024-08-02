import { MessageError } from "./style";

const Message = ({ message }) => {
  return <MessageError className="message-error">{message}</MessageError>;
};

export default Message;
