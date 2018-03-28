import React, { Fragment } from 'react';
import NavAppBar from "../components/NavAppBar";
import PageContainer from '../components/PageContainer';
import ReportForm from "../components/ReportForm";
import ReportFormContainer from "../containers/ReportFormContainer";


const style = {
    width: "60vw",
    padding: "1rem 2rem"
}

const Report = () => {
    return (
        <Fragment>
            <PageContainer style={style}>
               <ReportFormContainer /> 
            </PageContainer>
        </Fragment>
    )
}

export default Report;