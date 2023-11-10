import { bindActionCreators } from "@reduxjs/toolkit";
import { useDispatch, useSelector } from "react-redux";
import Actions from "../../store/action.redux";


export const useActions:any = () => {
    const dispatch = useDispatch();
    return bindActionCreators(Actions, dispatch);
}

export const useTypeSelector = useSelector;