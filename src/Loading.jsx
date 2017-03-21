import React from 'react';

class Loading extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        let {prefixCls} = this.props;
        if(!!!prefixCls){
            prefixCls = 'fy';
        }
        return (
            <div className={`${prefixCls}_loading`}>
                <div className={`${prefixCls}_loading_flag`}></div>
            </div>
        );
    }
}

export default Loading;
