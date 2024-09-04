import ReactDOM from 'react-dom';

const Portal = ({ children }) => {
  return ReactDOM.createPortal(
    <div>{children}</div>,
    document.body
  );
};

export default Portal;