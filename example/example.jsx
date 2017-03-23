import React from 'react';
import ReactDOM from 'react-dom';
import Loading from '../src/Loading'

ReactDOM.render(<div>
    <Loading visible={true} />
    <h1>
        Example Page
    </h1>
    <div>
        This is an example for loading component.
    </div>
</div>, document.getElementById('mainContainer'));