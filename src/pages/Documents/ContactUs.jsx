import React from 'react'

const ContactUs = () => {
    return (
        <div className="flex flex-col items-center justify-center min-h-screen">
            <h2 className="text-2xl font-semibold text-gray-700 dark:text-gray-300">Contact Us</h2>
            <p className="text-gray-500 dark:text-gray-400 mt-2">Please contact me at{" "}
                <a href="mailto:surenhembram97@gmail.com" className="text-blue-500">
                    surenhembram97@gmail.com
                </a>
            </p>
        </div>

    )
}

export default ContactUs