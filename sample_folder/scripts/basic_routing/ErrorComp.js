import {useRouteError} from "react-router-dom";
const ErrorComp = ()=>{
    const errorObj = useRouteError();
    console.log(errorObj);
    return (
        <div>
            oooooooooooops an errrrrrrrrrrorrrrrrrrr ocrrrrrrrrrredddddd
        </div>
    )
};
export default ErrorComp;