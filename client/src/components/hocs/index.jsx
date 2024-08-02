import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";

const withServerResponseHandler = (WrappedComponent) => {
  return (props) => {
    const navigate = useNavigate();
    const { error, response } = useSelector((state) => state.user);

      useEffect(() => {
      console.log(response)
      if (response) {
        navigate('/main');
      }
    }, [response, navigate]);

    return <WrappedComponent {...props} error={error} />;
  };
};

export default withServerResponseHandler;
