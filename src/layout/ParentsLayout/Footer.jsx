import React from 'react'

const Footer = () => {
    return (
        <footer className=" text-white py-2 bg-transparent z-200 flex flex-col md:flex-row w-full px-5">
            <div className=" text-xs grow h-full text-center mb-2 md:mb-0 md:text-left ">
                <div className="footer-links space-x-4 ">

                    <a href="/about-us" className="footer-link underline">About Us</a>
                    <a href="/terms-conditions" className="footer-link underline">General Terms & Conditions</a>
                    <a href="/privacy-policy" className="footer-link underline">Privacy Policy</a>
                </div>

                <div className="footer-links space-x-4">
                    <a href="/contact-us" className="footer-link underline">Contact Us</a>
                    <a href="/faq" className="footer-link underline">FAQ</a>
                    <a href="/blog" className="footer-link underline">Blog</a>
                    <a href="/careers" className="footer-link underline">Careers</a>
                </div>
            </div>

            <div className="text-xs text-center md:text-right flex-none">
                <p className=" text-xs">© {new Date().getFullYear()} EduSoftHub. Crafted with ❤️
                    by {" "}
                    <a href="https://github.com/5u00n" className='underline'>{"5u00n"}</a>
                </p>
            </div>
        </footer>
    )
}

export default Footer;