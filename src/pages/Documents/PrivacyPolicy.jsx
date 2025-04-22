import React from 'react';
import Footer from '@/layout/NoAuthLayout/Footer';

const PrivacyPolicy = () => {
    return (
        <React.Fragment>
            <div className="flex flex-col p-10 ">
                <h1 className="text-3xl font-bold underline">Privacy Policy</h1>

                <ul>
                    <li>
                        <h2 className="text-xl font-semibold mt-6">Information Collection</h2>
                        <p className="text-base mt-2">We collect information to provide better services to our users. This includes information you provide to us directly and information we collect automatically.</p>
                        <ul className="list-disc ml-6">
                            <li className="text-base mt-2">Direct Information: Information you provide when you create an account, fill out a form, or communicate with us.</li>
                            <li className="text-base mt-2">Automatic Information: Information collected through cookies, server logs, and other similar technologies.</li>
                        </ul>
                    </li>
                    <li>
                        <h2 className="text-xl font-semibold mt-6">Use of Information</h2>
                        <p className="text-base mt-2">We use the information we collect to provide, maintain, and improve our services, to develop new ones, and to protect our users.</p>
                        <ul className="list-disc ml-6">
                            <li className="text-base mt-2">Service Improvement: Enhancing the quality and functionality of our services.</li>
                            <li className="text-base mt-2">User Protection: Ensuring the safety and security of our users.</li>
                        </ul>
                    </li>
                    <li>
                        <h2 className="text-xl font-semibold mt-6">Information Sharing</h2>
                        <p className="text-base mt-2">We do not share personal information with companies, organizations, or individuals outside of our school unless one of the following circumstances applies:</p>
                        <ul className="list-disc ml-6">
                            <li className="text-base mt-2">With Your Consent: We will share personal information with companies, organizations, or individuals outside of our school when we have your consent to do so.</li>
                            <li className="text-base mt-2">For External Processing: We provide personal information to our affiliates or other trusted businesses or persons to process it for us, based on our instructions and in compliance with our Privacy Policy and any other appropriate confidentiality and security measures.</li>
                            <li className="text-base mt-2">For Legal Reasons: We will share personal information with companies, organizations, or individuals outside of our school if we have a good-faith belief that access, use, preservation, or disclosure of the information is reasonably necessary to meet any applicable law, regulation, legal process, or enforceable governmental request.</li>
                        </ul>
                    </li>
                    <li>
                        <h2 className="text-xl font-semibold mt-6">Data Security</h2>
                        <p className="text-base mt-2">We work hard to protect our users from unauthorized access to or unauthorized alteration, disclosure, or destruction of information we hold.</p>
                        <ul className="list-disc ml-6">
                            <li className="text-base mt-2">Security Measures: Implementing strong security measures to safeguard your data.</li>
                            <li className="text-base mt-2">Regular Audits: Conducting regular security audits to ensure data protection.</li>
                        </ul>
                    </li>
                    <li>
                        <h2 className="text-xl font-semibold mt-6">Changes to This Policy</h2>
                        <p className="text-base mt-2">Our Privacy Policy may change from time to time. We will post any privacy policy changes on this page and, if the changes are significant, we will provide a more prominent notice.</p>
                        <ul className="list-disc ml-6">
                            <li className="text-base mt-2">Notification: Notifying users of significant changes through prominent notices.</li>
                            <li className="text-base mt-2">Effective Date: Indicating the effective date of the updated policy.</li>
                        </ul>
                    </li>
                </ul>
            </div>
            <Footer />
        </React.Fragment>
    )
}

export default PrivacyPolicy