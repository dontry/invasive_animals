import React, { Fragment } from 'react';
import NavAppBar from "../components/NavAppBar";
import PageContainer from '../components/PageContainer';
import ReportForm from "../components/ReportForm";


const Report = () => {
    return (
        <Fragment>
            <NavAppBar title="Report" />
            <PageContainer>
               <ReportForm /> 
            </PageContainer>
        </Fragment>
    )
}

export default Report;