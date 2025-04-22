import React from 'react'
import Footer from './Footer';
import withRouter from '@/routes/withRouter';
import Header from './Header';

const ParentsLayout = (props) => {
    return (
        <React.Fragment>
            <div className="flex flex-col w-full h-screen items-center ">
                <Header />
                <div className="flex-1 w-full px-4">
                    {props.children}
                </div>
                <Footer />
            </div>
        </React.Fragment>
    )
}

export default withRouter(ParentsLayout)