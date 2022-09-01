import { useDispatch, useSelector } from 'react-redux';
import { UPDATE_COLOR } from './Redux/actions';
import { Provider } from 'react-redux';
import store from './Redux/store';
function ReduxConsumer() {
    const dispatch = useDispatch();
    const state = useSelector((state) => state);
    const { redux } = state;

    const handleColorChange = ({ target: { value } }) => {
        dispatch({
            type: UPDATE_COLOR,
            redux: value
        });
    }
    return (

        <div style={{ display: 'grid', justifyItems: 'center' }}>
            <h2>Redux</h2>
            <div>
                <h3>Color</h3>
                <input
                    type="color"
                    id="head"
                    name="head"
                    value={redux}
                    onChange={handleColorChange} />
            </div>
        </div>

    )
}
export default function Redux() {
    return (
        <Provider store={store}>
            <ReduxConsumer />
        </Provider>
    )
}