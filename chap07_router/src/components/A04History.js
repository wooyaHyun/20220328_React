
import React from 'react';
import { useHistory } from 'react-router';

const A02ProductComponent = (props) => {

    // const { history } = props;
    const history = useHistory();
    
    const back = () => history.goBack();
    const forward = () => history.goForword();
    const home = () => history.push('/');
    const goURL = (url) => history.push(url);

    return (
        <div>
            <h5>Product Component</h5>
            <div>This is Product Component</div>
            <br />

            <div>
                <button onClick={back}>BACK</button>
                <button onClick={forward}>FORWARD</button>
                <button onClick={home}>HOME</button>
                <button onClick={() => goURL("/A03Currency")}>PARAMETER</button>
            </div>
        </div>
    )
}
export default A02ProductComponent;