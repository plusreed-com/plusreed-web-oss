import React, { Component } from 'react';
import { css } from '@emotion/core';
import {
    Spin
} from './styles';

interface IProps {
    image: any
}

class FursonaPicture extends Component<IProps> {
    render() {
        return (
            <img
                css={css`
                    width: 128px;
                    height: 128px;
                    margin-left: 30px;
                    margin-top: 30px;
                    margin-bottom: -10px;
                    background: url(${this.props.image});
                    border-radius: 50%;
                    &:hover {
                        animation: ${Spin} 0.75s ease-in-out;
                    }
                `}
                src={this.props.image}
                draggable={false} 
            />
        )
    }
}

export default FursonaPicture;