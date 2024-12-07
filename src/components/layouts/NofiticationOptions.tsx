import React from 'react';
import { Dropdown } from 'react-bootstrap';
import { BsThreeDotsVertical, BsCheck, BsTrash } from 'react-icons/bs';
import { Notification } from '../model/Notification';

interface NotificationOptionsProps {
    notification: Notification;
    markAsRead: (id: string, e: React.MouseEvent<HTMLDivElement>) => void;
    deleteNotification: (id: string, e: React.MouseEvent<HTMLDivElement>) => void;
}

// Custom toggle component to prevent event bubbling
const CustomToggle = React.forwardRef<HTMLButtonElement, any>(({ onClick }, ref) => (
    <button
        ref={ref}
        className="btn p-0 border-0 shadow-none position-relative"
        onClick={(e) => {
            e.stopPropagation();
            onClick(e);
        }}
    >
        <BsThreeDotsVertical size={20} />
    </button>
));

CustomToggle.displayName = 'CustomToggle';

const NotificationOptions: React.FC<NotificationOptionsProps> = ({ notification, markAsRead, deleteNotification }) => {
    return (
        <Dropdown className="notification-options">
            <Dropdown.Toggle as={CustomToggle} />

            <Dropdown.Menu align="end">
                {!notification.read && (
                    <Dropdown.Item
                        onClick={(e) => {
                            e.stopPropagation();
                            markAsRead(notification.id, e as any);
                        }}
                        className="text-primary d-flex align-items-center"
                    >
                        <BsCheck className="me-2" />
                        Đánh dấu đã đọc
                    </Dropdown.Item>
                )}
                <Dropdown.Item
                    onClick={(e) => {
                        e.stopPropagation();
                        deleteNotification(notification.id, e as any);
                    }}
                    className="text-danger d-flex align-items-center"
                >
                    <BsTrash className="me-2" />
                    Xóa thông báo
                </Dropdown.Item>
            </Dropdown.Menu>
        </Dropdown>
    );
};

export default NotificationOptions;
