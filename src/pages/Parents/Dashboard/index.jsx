import React from 'react'

const ParentsDashboard = () => {
  return (

    <div className="container">
      <h1>Parents Dashboard</h1>
      <div className="row">
        <div className="col-md-6">
          <div className="card">
            <div className="card-header">Students</div>
            <div className="card-body">
              <p>View students</p>
            </div>
          </div>
          <div className="card">
            <div className="card-header">Payments</div>
            <div className="card-body">
              <p>View payments</p>
            </div>
          </div>
        </div>
        <div className="col-md-6">
          <div className="card">
            <div className="card-header">Attendance</div>
            <div className="card-body">
              <p>View attendance</p>
            </div>
          </div>
          <div className="card">
            <div className="card-header">Exams</div>
            <div className="card-body">
              <p>View exams</p>
            </div>
          </div>
        </div>
      </div>

    </div>
  )
}

export default ParentsDashboard;