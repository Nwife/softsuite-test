import { useDispatch } from "react-redux";
import { setIsLoading, getElements, setError } from "../../redux/reducers/elementReducer";

//services
import elementServices from "../services/element";



export function FetchElements() {
    const dispatch = useDispatch();

    return async () => {
        try{
            dispatch(setIsLoading(true));

            const res = await elementServices.getElements();

            if(res.data.status === "OK"){
                dispatch(setIsLoading(false))
                dispatch(getElements(res.data.data))
            }else{
                dispatch(setError("An error occured"))
            }
        }catch(err){
            console.log(err);
            dispatch(setIsLoading(false))
        }
    };

}