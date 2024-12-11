import React from 'react';
import Home from './Home';
import JobManagementDashboard from './JobManagementDashboard';

interface AdminProps {}

const Admin: React.FC<AdminProps> = ({}) => {
    return (
        <>
            <JobManagementDashboard />
        </>
    );
};

export default Admin;
