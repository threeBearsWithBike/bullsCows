import { Context } from "../store/context";
import { useContext } from "react";

const Result = () => {
    const {state} = useContext(Context);
    return (
        <div>
            Bulls-{state.bulls}, Cows-{state.cows}
        </div>
    )
}

export default Result;