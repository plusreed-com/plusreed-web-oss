import React from 'react';
import { css } from '@emotion/core';

interface IProps {
    uid: number
}

// TODO: This needs styling to make it look decent on the dark background.
const AbuseIPDBBadge: React.SFC<IProps> = (props) => {
    return (
        <a
            href={`https://www.abuseipdb.com/user/${props.uid}`}
            title="AbuseIPDB is an IP address blacklist for webmasters and sysadmins to report IP addresses engaging in abusive behavior on their networks"
        >
            <img 
                src={`https://www.abuseipdb.com/contributor/${props.uid}.svg`}
                alt="AbuseIPDB Contributor Badge"
                css={css`
                    width: 200px;
                    fill: white;
                `}
            />
        </a>
    )
}

export default AbuseIPDBBadge;