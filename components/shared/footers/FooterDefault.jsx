import React from 'react';
import FooterWidgets from './modules/FooterWidgets';
import FooterCopyright from './modules/FooterCopyright';

const FooterDefault = () => (
    <footer className="ps-footer">
        <div className="container">
            <FooterWidgets />
            <FooterCopyright />
        </div>
    </footer>
);

export default FooterDefault;
