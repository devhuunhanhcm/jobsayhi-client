import axiosInstance from '@/api/AxiosInstance';

const DashboardDataService = {
    getDashboardData: async (startDate: string, endDate: string) => {
        try {
            const response = await axiosInstance.get(`${import.meta.env.VITE_API_URL}/dashboard/data`, {
                params: {
                    startDate,
                    endDate,
                },
            });
            return response.data;
        } catch (error) {
            console.error('Lỗi khi lấy dữ liệu bảng điều khiển:', error);
            throw error;
        }
    },

    exportToPDF: async (startDate: string, endDate: string) => {
        try {
            const response = await axiosInstance.get('/dashboard/export/pdf', {
                params: { startDate, endDate },
                responseType: 'blob',
            });

            const url = window.URL.createObjectURL(new Blob([response.data]));
            const link = document.createElement('a');
            link.href = url;
            link.setAttribute('download', `dashboard_${startDate}_${endDate}.pdf`);
            document.body.appendChild(link);
            link.click();
            link.remove();
        } catch (error) {
            console.error('Xuất PDF thất bại:', error);
            alert('Xuất PDF thất bại');
        }
    },

    exportToExcel: async (startDate: string, endDate: string) => {
        try {
            const response = await axiosInstance.get('/dashboard/export/excel', {
                params: { startDate, endDate },
                responseType: 'blob',
            });

            const url = window.URL.createObjectURL(new Blob([response.data]));
            const link = document.createElement('a');
            link.href = url;
            link.setAttribute('download', `dashboard_${startDate}_${endDate}.xlsx`);
            document.body.appendChild(link);
            link.click();
            link.remove();
        } catch (error) {
            console.error('Xuất Excel thất bại:', error);
            alert('Xuất Excel thất bại');
        }
    },
};

export default DashboardDataService;
