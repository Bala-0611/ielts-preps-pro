
import React from 'react';

const MockTestIcon: React.FC<React.SVGProps<SVGSVGElement>> = (props) => (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" {...props}>
        <path fillRule="evenodd" d="M4 2a2 2 0 00-2 2v11a2 2 0 002 2h2.172a2 2 0 011.414.586l1.707 1.707a1 1 0 001.414 0l1.707-1.707a2 2 0 011.414-.586H16a2 2 0 002-2V4a2 2 0 00-2-2H4zm4.5 5a.5.5 0 000 1h3a.5.5 0 000-1h-3zM8 9a.5.5 0 01.5.5v3a.5.5 0 01-1 0v-3A.5.5 0 018 9zm2.293 2.293a.5.5 0 00-.707 0l-1.5 1.5a.5.5 0 00.707.707l1.5-1.5a.5.5 0 000-.707z" clipRule="evenodd" />
        <path d="M19.5 7.5a2.5 2.5 0 11-5 0 2.5 2.5 0 015 0zm-2.5 4a4 4 0 100-8 4 4 0 000 8z" />
    </svg>
);

export default MockTestIcon;
