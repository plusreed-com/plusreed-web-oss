import React, { Component } from 'react'
import {
    Fursona
} from './styles';

interface IProps { // hehe IProps more like IHops hehehehehehehehe
    image: any
}

class FursonaPicture extends Component<IProps> {
    render() {
        return (
            <img css={Fursona} src={this.props.image} draggable={false} />
        )
    }
}

export default FursonaPicture;