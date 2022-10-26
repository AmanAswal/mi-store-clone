import React from "react";
import "../styles/PreNavbar.css";

const cartIcon = <svg xmlns="http://www.w3.org/2000/svg" height="20" width="20"><path d="M5.833 17.042q-.416 0-.687-.271-.271-.271-.271-.688 0-.416.271-.687.271-.271.687-.271.417 0 .688.271.271.271.271.687 0 .417-.271.688-.271.271-.688.271Zm8.334 0q-.417 0-.688-.271-.271-.271-.271-.688 0-.416.271-.687.271-.271.688-.271.416 0 .687.271.271.271.271.687 0 .417-.271.688-.271.271-.687.271ZM4.979 4.958 7 9.625h5.875q.187 0 .333-.094.146-.093.25-.26l1.563-3.729q.125-.23.021-.407-.104-.177-.354-.177Zm-.146-.416h10q.375 0 .542.25.167.25.042.541l-1.563 4.084q-.125.271-.364.448-.24.177-.552.177H6.604l-1 1.75q-.166.25-.01.541.156.292.468.292h9.063v.417H6.083q-.625 0-.895-.48-.271-.479.041-.979l1.25-2.125-2.812-6.5H2.083v-.416h1.896ZM7 9.625h6.271Z"/></svg>

const PreNavbar = () => {
    return (
        <div className="preNav">
            <div>
                <a href="https://www.mi.com/in/">XIAOMI INDIA</a> <span>|</span>
                <a href="https://in.event.mi.com/in/install-mi-store" target="_blank" rel="noreferrer">
                    GET MI STORE APP
                </a>{" "}
                <span>|</span>
                <a href="https://www.mi.com/in/service/help/#category_id=1&pagenum=1&channel=1" target="_blank" rel="noreferrer">
                    ONLINE HELP
                </a>{" "}
                <span>|</span>
                <a href="https://www.mi.com/in/service/authorized_stores/" target="_blank" rel="noreferrer">
                    RETAIL STORE ﹀
                </a>
            </div>

            <div>
                <a href="https://store.mi.com/in/site/login" target="_blank" rel="noreferrer">SIGN IN</a> <span>|</span>
                <a href="https://account.xiaomi.com/pass/register?callback=https%3A%2F%2Fstore.mi.com%2Fin%2Flogin%2Fcallback%3Ffollowup%3Dhttps%253A%252F%252Fwww.mi.com%252Fin%26sign%3DNGQyZTY1M2VjNGNjYTc5NzFlZDc1YmY2ZmM2NDFiYWMwNTU5YzUyNQ%2C%2C&sid=i18n_in_pc_pro&_locale=en_IN" target="_blank" rel="noreferrer">
                    SIGN UP
                </a>{" "}
                <span>|</span>
                <a className="icon" href="https://store.mi.com/in/site/login" target="_blank" rel="noreferrer">{cartIcon}CART (0)</a>
            </div>
        </div>
    );
};

export default PreNavbar;
