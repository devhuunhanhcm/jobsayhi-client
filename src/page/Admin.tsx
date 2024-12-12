import React from 'react';
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
