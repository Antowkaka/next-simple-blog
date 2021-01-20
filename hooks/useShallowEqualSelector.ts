import { useSelector, shallowEqual } from 'react-redux';
import { RootState } from "../store/rootReducer";

export default function useShallowEqualSelector(selector: any): RootState {
    return useSelector(selector, shallowEqual);
}