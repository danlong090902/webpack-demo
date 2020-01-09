function component() {
    const element = document.createElement('div');


    // element.innerHTML = 'hello,handsome boy/beautiful girls';
    element.id = 'root';


    return element;
}

document.body.appendChild(component());

import React from 'react'
import { render } from 'react-dom';
import './index.less';

class Hello extends React.Component {
    render() {
        return (
            <p>hello react！</p>
    )
    }
}
render(
<Hello/>,
    document.getElementById('root')
);

