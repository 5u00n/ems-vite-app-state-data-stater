import Logout from "@/pages/Authentication/Logout";
import Login from "@/pages/Authentication/Login";
import ForgotPassword from "@/pages/Authentication/ForgotPassword";
import RandomList from "@/pages/samples/RandomList";
import AboutUs from "@/pages/Documents/AboutUs";
import TermsConditions from "@/pages/Documents/TermsConditions";
import PrivacyPolicy from "@/pages/Documents/PrivacyPolicy";
import ContactUs from "@/pages/Documents/ContactUs";
import FAQ from "@/pages/Documents/FAQ";
import Blog from "@/pages/Documents/Blog";
import Careers from "@/pages/Documents/Careers";
import Loading from "@/pages/Utilities/Loading";

// Parents Layout
import ParentsDashboard from "@/pages/Parents/Dashboard";
import AdmissionTemp from "@/pages/Admission/AdmissionTemp";


// Teachers Layout
import TeachersDashboard from "@/pages/Teachers/Dashboard";

const publicRoutes = [
    { path: '/', component: <Login /> },
    { path: '/login', component: <Login /> },
    { path: '/loading', component: <Loading /> },
    { path: "/logout", component: <Logout /> },
    { path: "/forgot-password", component: <ForgotPassword /> },
    { path: "/about-us", component: <AboutUs /> },
    { path: "/terms-conditions", component: <TermsConditions /> },
    { path: "/privacy-policy", component: <PrivacyPolicy /> },
    { path: "/contact-us", component: <ContactUs /> },
    { path: "/faq", component: <FAQ /> },
    { path: "/blog", component: <Blog /> },
    { path: "/careers", component: <Careers /> },
    { path: "/admission", component: <AdmissionTemp /> },
];

const parentsRoutes = [
    { path: '/parents', component: <ParentsDashboard /> },
    { path: "/parents/dashboard", component: <ParentsDashboard /> },
    { path: "/student-list", component: <RandomList /> },
];

const teachersRoutes = [
    { path: '/teachers', component: <TeachersDashboard /> },
    { path: '/teachers/dashboard', component: <TeachersDashboard /> },
];



export { publicRoutes, parentsRoutes };
