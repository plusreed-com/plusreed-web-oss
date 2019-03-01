import React from 'react';
import { DevStripes } from './styles';

interface IProps {
    text: string
};

const DevBar: React.FunctionComponent<IProps> = (props) => {
    return (
        <div css={DevStripes}>
            {props.text}
        </div>
    )
};

export default DevBar;