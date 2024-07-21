import React from 'react';
import { textConstant } from '@/components/data/constants';
import ChatBot from './ChatBot/ChatBot';

const Footer = () => {
    return (
        <>
        <div className="fixed z-10 overflow-y-auto">
            <ChatBot />
        </div>
            <footer className="app_footer">
                <p className="footer_text">© 
                    <a 
                        className="contact_link"
                        href="https://github.com/irfansk/"
                        target="_blank" rel="noopener noreferrer"
                    > { textConstant.name + " " } 
                    </a>
                    2024. All Rights Reserved.
                </p>
            </footer>
        </>
    )
};

export default Footer;