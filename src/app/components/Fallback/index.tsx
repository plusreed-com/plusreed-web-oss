import React from 'react';
import Loading from '../../assets/images/loading.svg';
import {
    CenterScreen,
    LoadingCircle
} from '../../styles';

const Fallback = () => (
    <div css={CenterScreen}>
        <img
            css={LoadingCircle} 
            src={Loading}
        />
    </div>
);

export default Fallback;