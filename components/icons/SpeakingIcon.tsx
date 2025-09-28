
import React from 'react';

const SpeakingIcon: React.FC<React.SVGProps<SVGSVGElement>> = (props) => (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" {...props}>
        <path d="M4.5 10.5C4.5 7.46243 6.96243 5 10 5C13.0376 5 15.5 7.46243 15.5 10.5V12.5C15.5 13.6046 14.6046 14.5 13.5 14.5H6.5C5.39543 14.5 4.5 13.6046 4.5 12.5V10.5Z" />
        <path d="M10 18.5C11.1046 18.5 12 17.6046 12 16.5V14.5H8V16.5C8 17.6046 8.89543 18.5 10 18.5Z" />
        <path d="M18 10.5C18.2761 10.5 18.5 10.7239 18.5 11V11.5C18.5 14.5376 15.9624 17 12.925 17H12V18.5H12.925C16.7909 18.5 20 15.3659 20 11.5V11C20 10.7239 19.7761 10.5 19.5 10.5H18Z" />
    </svg>
);

export default SpeakingIcon;
