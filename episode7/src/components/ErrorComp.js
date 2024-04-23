import {useRouteError} from "react-router-dom";
const ErrorComp = ()=>{
    let err = useRouteError();
    console.log(err); // gives us a detailed error object
    return (
        <div>
            ooooooops an error occurred
        </div>
    );
};
export default ErrorComp;