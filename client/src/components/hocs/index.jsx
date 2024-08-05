import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";

const withServerResponseHandler = (WrappedComponent) => {
  return (props) => {
    const navigate = useNavigate();
    const { error, newUser } = useSelector((state) => state.user);

      useEffect(() => {
      console.log(newUser)
      if (newUser) {
        navigate('/main');
      }
    }, [newUser, navigate]);

    return <WrappedComponent {...props} error={error} />;
  };
};

export default withServerResponseHandler;
