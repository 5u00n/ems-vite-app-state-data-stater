# EMS (Education Management System)

> A full-featured, modular, real-time school ERP built with React, Firebase, Zustand, and Tailwind CSS.

## 🧩 Overview

**EMS (Education Management System)** is designed to **digitize and streamline** all aspects of school operations — from academic records and attendance to admissions, fees, user management, and notifications — with **modular architecture**, **real-time data updates**, and **offline support**.

Whether you're an **administrator**, a **teacher**, a **student**, or a **parent**, EMS tailors the experience to your role with dedicated dashboards and permissions.

## 🏗️ Architecture & Philosophy

EMS follows a **hybrid modular architecture** where each module (like attendance, fees, admissions) is managed independently in both the **Firebase Realtime Database** and **Zustand slices**, making it:

- **Scalable**: Add more modules or plug in alternate databases like MongoDB or PocketBase.
- **Maintainable**: Feature separation ensures code is clean and collaborative.
- **Flexible**: Session-specific data allows storing historical academic data easily.

> 🔒 Security: Firebase rules restrict access per user role, ensuring data privacy.

## 👨‍🏫 Supported User Roles & Their Features

| Role | Features |
| --- | --- |
| **Admin** | Create sessions, manage users, assign roles, view reports, full control |
| **Principal** | View full academic data, routines, analytics |
| **Teachers** | Mark attendance, manage routines, subjects, homework, exams |
| **Students** | View personal profile, attendance, results, calendar |
| **Parents** | Track child’s progress, attendance, pay fees, get notifications |
| **Accountant** | Manage fee collections, dues, and reports |
| **Staff** | Handle admissions, enquiries, basic reporting |

Each role gets a dedicated **layout and dashboard** with features filtered based on permissions.

## ⚙️ Core Modules (with Technical Highlights)

### 1. 🔐 Authentication

- Firebase Email/Password Login
- Google Popup Login
- Zustand-powered `authSlice` for login state
- Auth persistence with offline awareness

### 2. 🏫 School & Academic Management

- Manage schools, classes, sections, subjects
- Assign class teachers and subject-teachers
- Academic year-based modular storage

### 3. 📋 Attendance System

- Mark daily attendance by class
- Track absentees, generate reports
- Realtime DB powered + local cache for offline marking

### 4. 🎒 Admission Management

- Enquiries → Admission Drafts → Finalized Admissions
- Session-specific structure
- Auto-assign unique IDs for each admission

### 5. 💰 Fees Management

- Define fee structures per class
- Track paid, due, and pending amounts
- Installment handling and due notifications

### 6. 📅 Exam & Routine Management

- Schedule exams and regular class routines
- Role-based views (Teachers vs Students)
- Integrated with academic sessions

### 7. 📄 Results & Report Cards

- Store marks per exam and subject
- Auto-generate result views
- Ready for future PDF report card generation

### 8. 🔔 Notifications

- Stored under each user in Firebase
- Triggered on fees, announcements, events
- Supports real-time updates and local display

### 9. 📆 Calendar

- Academic events like holidays, exams, parent-teacher meetings
- Class-specific or school-wide

### 10. 📤 PDF Export Utility

- Custom utility to export DOM elements to multi-page PDFs
- Styled output ready for report cards or fee receipts

## 🌐 Realtime + Offline Support

EMS is designed to **work seamlessly with or without internet**:

- Zustand with `persist` stores data offline
- Auto-switch UI to "read-only" when offline
- Data synced to Firebase once connection restores

>This ensures **non-stop workflow**, especially useful in areas with spotty internet.

## 🛠️ Dev & Tech Stack

| Tech | Use |
| --- | --- |
| **React** | UI components and routes |
| **Vite** | Blazing fast build and hot reload |
| **Firebase** | Auth, Realtime Database, Storage, Hosting |
| **Zustand** | State management with modular slices |
| **Tailwind CSS** | Utility-first styling for responsive UI |
| **ShadCN UI** | Prebuilt, elegant components (cards, inputs, modals, etc.) |
| **Lucide Icons** | Modern SVG icons |

## 🧠 Improvements Over Traditional Systems

| Feature | Others | EMS |
| --- | --- | --- |
| Data Modularity | ❌ Single blob | ✅ Per-module, per-session |
| Offline Support | ❌ No | ✅ LocalStorage fallback with sync |
| Real-Time Sync | ❌ Manual refresh | ✅ Firebase-powered instant updates |
| Role-based Layouts | ❌ Same dashboard for all | ✅ Custom layout for each role |
| Academic Year Separation | ❌ No versioning | ✅ Clear year-wise separation |
| Enquiry > Admission Pipeline | ❌ Not streamlined | ✅ Built-in 3-phase admission system |
| Clean Modern UI | ❌ Outdated designs | ✅ Responsive, utility-first, modern |
| Notifications | ❌ Manual alerts | ✅ Auto-triggered real-time notifications |
| Built-in PDF Export | ❌ Need external tools | ✅ Native styled exports |

## 📊 Sample Firebase Structure (Hybrid Format)

```json
json
CopyEdit
{
  "schools": {
    "schoolId": {
      "classes": {},
      "subjects": {},
      "users": {
        "teachers": {},
        "students": {},
        ...
      },
      "academicYears": {
        "2024-25": {
          "attendance": {},
          "fees": {},
          "exams": {},
          "results": {},
          "routines": {},
          "calendar": {},
          "notifications": {}
        }
      },
      "admissions": {
        "newAdmissions": {},
        "admissionDrafts": {},
        "enquiries": {}
      }
    }
  },
  "users": {
    "userId": {
      "name": "John Doe",
      "role": "teacher",
      "profileImage": "...",
      ...
    }
  },
  "schoolPublic": {
    "schoolId": {
      "name": "XYZ Public School",
      "address": "...",
      ...
    }
  }
}

```

### Teachers Data Structure

```json
          teacherId1: {
              name: "Ananya Rao",
              role: "teacher",
              subjects: {
                subjectId1: {
                  classId: "classId1",
                  name: "Math",
                  section: "A"
                },
                subjectId2: {
                  classId: "classId2",
                  name: "Science",
                  section: "B"
                }
              },
              classes: {
                classId1: {
                  name: "X",
                  section: "A"
                },
                classId2: {
                  name: "IX",
                  section: "B"
                }
              },
              selectedClass: "classId1",
              selectedSection: "A" ,
              isClassTeacher: true,
              classTeacherOf: {
                classId: "III",
                section: "C"
              },
              contact: "9876543210",
              profileImage: "url"
            }

```

## Students Data Structure

For your school ERP application, you’ll want a well-organized student structure to efficiently store and manage student-related data. Given your current setup with Firebase Realtime Database and the roles and functionalities you're implementing, here's a suggested student data structure:

### Suggested Student Structure for the Application

```yaml
students
│
├── studentId1
│    ├── personalInfo
│    │    ├── name: "John Doe"
│    │    ├── dob: "2005-05-15"
│    │    ├── gender: "Male"
│    │    ├── contact: "1234567890"
│    │    ├── address: "123 School Street"
│    │    └── profileImage: "url_to_image"
│    ├── classInfo
│    │    ├── classId: "classId1"  # Link to class details
│    │    ├── section: "A"
│    │    ├── academicYear: "2024-2025"
│    │    └── previousClasses: # To keep track of past classes
│    │         ├── academicYear1: {classId: "classId2", section: "B"}
│    │         └── academicYear2: {classId: "classId3", section: "C"}
│    ├── guardianInfo
│    │    ├── fatherName: "Peter Doe"
│    │    ├── motherName: "Anna Doe"
│    │    ├── parentContact: "0987654321"
│    │    └── address: "123 School Street"
│    ├── academicPerformance
│    │    ├── exams
│    │    │    ├── examId1: {marks: 85, grade: "A"}
│    │    │    ├── examId2: {marks: 75, grade: "B"}
│    │    │    └── ...
│    │    ├── attendance
│    │    │    ├── month1: {total: 20, present: 18}
│    │    │    ├── month2: {total: 20, present: 19}
│    │    │    └── ...
│    │    ├── fees
│    │    │    ├── totalFees: 5000
│    │    │    ├── paid: 3000
│    │    │    ├── due: 2000
│    │    │    └── paymentHistory:
│    │    │         ├── paymentId1: {amount: 3000, date: "2025-01-01"}
│    │    │         └── ...
│    ├── schoolActivities
│    │    ├── extracurricular
│    │    │    ├── activityId1: {name: "Football", role: "Player"}
│    │    │    ├── activityId2: {name: "Drama", role: "Actor"}
│    │    │    └── ...
│    │    ├── awards
│    │    │    ├── awardId1: {title: "Best Student", year: "2024"}
│    │    │    └── ...
│    ├── healthInfo
│    │    ├── allergies: "Peanuts"
│    │    ├── specialNeeds: "Dyslexia"
│    │    └── medicalNotes: "Requires vision correction."
│    ├── behaviorInfo
│    │    ├── disciplineRecord:
│    │    │    ├── incidentId1: {date: "2025-03-01", description: "Late to class", action: "Warning"}
│    │    │    └── ...
│    ├── notifications
│    │    ├── notificationId1: {title: "Homework Due", message: "Math homework due tomorrow."}
│    │    └── ...
│    ├── lastUpdated: "2025-04-22"
└── ...

```

### Breakdown of Key Sections in the Student Structure

1. **personalInfo**:
    - Includes essential personal details like name, date of birth, gender, contact, and profile image.
2. **classInfo**:
    - Stores the current class and section of the student. It also keeps track of previous classes and academic years for record-keeping.
3. **guardianInfo**:
    - Stores parent or guardian details, including names and contact information, which can be used for communication and emergencies.
4. **academicPerformance**:
    - Keeps track of exam scores, grades, and attendance records. This will help in generating reports and analyzing student performance.
    - The `fees` section includes fee-related data like total fees, amount paid, and due amount.
5. **schoolActivities**:
    - Keeps record of extracurricular activities and awards or achievements. This section helps in tracking the student’s involvement outside academics.
6. **healthInfo**:
    - Includes relevant medical information such as allergies, special needs, or any medical notes. This is important for managing the health and safety of students.
7. **behaviorInfo**:
    - Contains records of behavioral incidents, including any disciplinary actions taken. This can help in monitoring the student’s conduct and interventions.
8. **notifications**:
    - Stores notifications related to assignments, events, or reminders for the student.
9. **lastUpdated**:
    - Timestamp of the last time the student's data was updated. This can help in tracking data freshness.

### Advantages of This Structure

- **Scalability**: You can easily expand the data structure by adding more fields as required by your application, such as adding sections for grades, attendance per term, etc.
- **Separation of Concerns**: The structure logically separates different types of information, making it easier to manage and query data.
- **Flexibility**: You can easily add or modify records within each section (e.g., adding more awards or changing the class of a student).
- **Clear Relationships**: The structure maintains clear relationships between students, their guardians, classes, and academic performance, making it easy to build relationships between different modules in your app (like exams, attendance, and fees).

>This structure is designed to be flexible enough to accommodate all the major features of your application, while still being simple enough to maintain. If you need further customization, feel free to adjust the fields to match your exact needs.

## firebase rules

```json
// Users node
    "users": {
      "$uid": {
        // Allow users to read and write their own data
        ".read": "auth != null && auth.uid === $uid",
        ".write": "auth != null && auth.uid === $uid"
      },
      // Allow admins and superadmins to manage all user data
      ".read": "auth != null && (root.child('users').child(auth.uid).child('type').val() === 'admin' || root.child('users').child(auth.uid).child('type').val() === 'superadmin')",
      ".write": "auth != null && root.child('users').child(auth.uid).child('type').val() === 'superadmin'"
    },

    // Restricted access for temporary Gmail users and full access for domain users
    "restricted_data": {
      "$dataId": {
        ".read": "auth != null && (auth.token.email.endsWith('@edeninternational.edu.in') || (auth.token.email.endsWith('gmail.com') && root.child('users').child(auth.uid).child('access_expiry').val() > now))",
        ".write": "auth != null && auth.token.email.endsWith('@edeninternational.edu.in')"
      }
    },

    // Default rules for all other data
    ".read": "auth != null",
    ".write": "auth != null && root.child('users').child(auth.uid).child('type').val() === 'superadmin'"

```

## 📌 Unique Highlights

- 📁 **Academic Year Isolation**: Easily manage multiple years without mixing data.
- 💾 **Offline-first Strategy**: Supports schools in remote or rural areas.
- 🧪 **Fully Modular Zustand Slices**: Easy to extend, debug, and maintain.
- 🔄 **Smart Role Switching**: Admins can simulate any role without logging out.
- 📚 **Homework Integration**: Teachers can assign and track holiday work.
- 🎓 **Post-Exam Readiness**: Summer homework preloads next-class chapters.

## 🚧 Planned Features (Coming Soon)

- 📱 Full PWA support
- 🔍 Global Search
- 📬 Email & SMS Alerts via Firebase Extensions
- 🧾 PDF Report Card Generator with Templates
- 🛎️ Daily Push Notifications on Dashboard
- 🧠 AI-generated Student Performance Insights

## Features

- **Data Management**: Store and manage school data securely using Firebase.
- **Authentication**: Secure user authentication with Firebase Auth.
- **API Integration**: Seamless integration with Firebase APIs.
- **Styling**: Modern and responsive UI using Tailwind CSS and ShadCN.
- **State Management**: Efficient state management with Zustand.
- **Icons**: Simple Slate Icons From [Lucide React Icons](https://lucide.dev/icons/)

## Getting Started

To get started with the EMS application, follow these steps:

1. **Clone the repository**:

    ```bash
    git clone <https://github.io/5u00n/ems-vite-app-state-data-stater.git>
    cd ems-vite-app-state-data-stater
    ```

2. **Install dependencies**:

    ```bash
    npm install
    ```

3. **Start the development server**:

    ```bash
     npm run dev
    ```

## Contributing

Contributions are welcome! Please read the [contributing guidelines](/CONTRIBUTING.md) for more information.

## License

This project is licensed under the MIT License. See the [LICENSE](/LICENSE) file for details.

## Acknowledgement

We would like to thank the following resources and libraries that made this project possible:

- [React](https://reactjs.org/)
- [Vite](https://vitejs.dev/)
- [Firebase](https://firebase.google.com/)
- [Tailwind CSS](https://tailwindcss.com/)
- [ShadCN](https://shadcn.dev/)
- [Zustand](https://zustand.surge.sh/)
- [Lucide React Icons](https://lucide.dev/icons/)
- [Aceternity Background Animation](https://ui.aceternity.com/components/background-gradient-animation)

Special thanks to the open-source community for their invaluable contributions and support.
