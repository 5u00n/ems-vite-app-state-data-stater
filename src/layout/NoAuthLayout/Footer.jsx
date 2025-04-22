import React from 'react'

const footer = () => {
return (
    <footer className=" text-white py-2 bg-transparent z-200 text-left w-full px-10">
        <div className="container text-xs ">
            <div className="footer-links space-x-4 underline">
                <a href="/about-us" className="footer-link hover:underline">About Us</a>
                <a href="/terms-conditions" className="footer-link hover:underline">General Terms & Conditions</a>
                <a href="/privacy-policy" className="footer-link hover:underline">Privacy Policy</a>
            </div>
        </div>
    </footer>
)
}

export default footer