import React from 'react';
import Footer from '@/layout/NoAuthLayout/Footer';

const TermsConditions = () => {
  return (
    <React.Fragment>
      <div className="flex flex-col p-10 items-center">
        <h1 className="text-4xl font-bold">Terms & Conditions</h1>
        <ul className="text-sm mt-4">
          <li className="mb-2">
            <strong>1. Admission Policy</strong>
            <ul className="ml-4 mt-1">
              <li>1.1 Admission is based on merit and availability of seats.</li>
              <li>1.2 All required documents must be submitted during the admission process.</li>
            </ul>
          </li>
          <li className="mb-2">
            <strong>2. Attendance</strong>
            <ul className="ml-4 mt-1">
              <li>2.1 Students must maintain a minimum of 75% attendance.</li>
              <li>2.2 Leave of absence must be supported by a valid reason and prior approval.</li>
            </ul>
          </li>
          <li className="mb-2">
            <strong>3. Code of Conduct</strong>
            <ul className="ml-4 mt-1">
              <li>3.1 Students must adhere to the school's code of conduct at all times.</li>
              <li>3.2 Any form of bullying or harassment is strictly prohibited.</li>
            </ul>
          </li>
          <li className="mb-2">
            <strong>4. Uniform</strong>
            <ul className="ml-4 mt-1">
              <li>4.1 Students must wear the prescribed school uniform.</li>
              <li>4.2 Uniforms must be clean and well-maintained.</li>
            </ul>
          </li>
          <li className="mb-2">
            <strong>5. Fees</strong>
            <ul className="ml-4 mt-1">
              <li>5.1 Fees must be paid by the due date.</li>
              <li>5.2 Late payment of fees may attract a penalty.</li>
            </ul>
          </li>
          <li className="mb-2">
            <strong>6. Examinations</strong>
            <ul className="ml-4 mt-1">
              <li>6.1 Students must appear for all scheduled examinations.</li>
              <li>6.2 Any form of malpractice during examinations is prohibited.</li>
            </ul>
          </li>
          <li className="mb-2">
            <strong>7. Health and Safety</strong>
            <ul className="ml-4 mt-1">
              <li>7.1 Students must follow all health and safety guidelines.</li>
              <li>7.2 Any health issues must be reported to the school authorities.</li>
            </ul>
          </li>

          <li className="mb-2">
            <strong>8. Library</strong>
            <ul className="ml-4 mt-1">
              <li>8.1 Students must maintain silence in the library.</li>
              <li>8.2 Books must be returned by the due date.</li>
              <li>8.3 Any damage to library books will incur a fine.</li>
            </ul>
          </li>
          <li className="mb-2">
            <strong>9. Transportation</strong>
            <ul className="ml-4 mt-1">
              <li>9.1 Students must follow the rules while using school transportation.</li>
              <li>9.2 Any misconduct on the bus will lead to disciplinary action.</li>
            </ul>
          </li>
          <li className="mb-2">
            <strong>10. Extracurricular Activities</strong>
            <ul className="ml-4 mt-1">
              <li>10.1 Participation in extracurricular activities is encouraged.</li>
              <li>10.2 Students must seek prior approval for any external activities.</li>
            </ul>
          </li>
          <li className="mb-2">
            <strong>11. Parent-Teacher Meetings</strong>
            <ul className="ml-4 mt-1">
              <li>11.1 Parents are encouraged to attend all scheduled meetings.</li>
              <li>11.2 Any concerns should be discussed during these meetings.</li>
            </ul>
          </li>
          <li className="mb-2">
            <strong>12. Digital Conduct</strong>
            <ul className="ml-4 mt-1">
              <li>12.1 Students must use digital devices responsibly.</li>
              <li>12.2 Any form of cyberbullying is strictly prohibited.</li>
            </ul>
          </li>
        </ul>
      </div>
      <Footer/>
    </React.Fragment>
  )
}

export default TermsConditions;