import React, { useState, useEffect, useRef } from 'react';
import { Dropdown, Badge } from 'react-bootstrap';
import { Client } from '@stomp/stompjs';
import { formatDistanceToNow } from 'date-fns';
import { vi } from 'date-fns/locale';
import { BsBellFill } from 'react-icons/bs';
import { Notification, NotificationState } from '../model/Notification';
import { useAppSelector } from '@/redux/hooks';
import axiosInstance from '@/api/AxiosInstance';
import SockJS from 'sockjs-client';
import { HiOutlineBellAlert } from 'react-icons/hi2';

export default function NotificationDropdown() {
    const [state, setState] = useState<NotificationState>({
        notifications: [],
        unreadCount: 0,
    });
    const stompClientRef = useRef<Client | null>(null);
    const userId = useAppSelector((state) => state.user.id);

    useEffect(() => {
        const connectWebSocket = () => {
            try {
                const socket = new SockJS(`http://localhost:8080/ws`);
                const client = new Client({
                    webSocketFactory: () => socket,
                    debug: console.log,
                    reconnectDelay: 5000,
                    heartbeatIncoming: 4000,
                    heartbeatOutgoing: 4000,
                });

                client.onConnect = () => {
                    console.log('Connected to WebSocket');
                    client.subscribe(`/topic/notification/${userId}`, (message) => {
                        const newNotification = JSON.parse(message.body);
                        handleNewNotification(newNotification);
                    });
                };

                client.onStompError = (frame) => {
                    console.error('STOMP error:', frame);
                };

                client.activate();
                stompClientRef.current = client;
            } catch (error) {
                console.error('WebSocket connection error:', error);
                setTimeout(connectWebSocket, 5000);
            }
        };

        if (userId && userId.length > 0) {
            fetchNotifications();
            connectWebSocket();
        }

        return () => {
            if (stompClientRef.current) {
                stompClientRef.current.deactivate();
            }
        };
    }, [userId]);

    const fetchNotifications = async () => {
        try {
            const response = await axiosInstance.get(`${import.meta.env.VITE_API_URL}/notification/user/${userId}`);
            const data = response.data.content;
            setState({
                notifications: data,
                unreadCount: data.filter((n: Notification) => !n.isRead).length,
            });
        } catch (error) {
            console.error('Error fetching notifications:', error);
        }
    };

    const handleNewNotification = (notification: Notification) => {
        setState((prev) => ({
            notifications: [notification, ...prev.notifications],
            unreadCount: prev.unreadCount + 1,
        }));
    };

    const handleNotificationClick = (notification: Notification) => {
        markAsRead(notification.id);

        if (notification.metadata) {
            const metadata = JSON.parse(notification.metadata);
            if (metadata.view === 'applications') {
                window.location.href = `/applications/${metadata.jobId}`;
            }
        }
    };

    const markAsRead = async (notificationId: string) => {
        try {
            await axiosInstance.put(`/api/notifications/${notificationId}/read`);
            setState((prev) => ({
                notifications: prev.notifications.map((n) => (n.id === notificationId ? { ...n, isRead: true } : n)),
                unreadCount: prev.unreadCount - 1,
            }));
        } catch (error) {
            console.error('Error marking notification as read:', error);
        }
    };

    const markAllAsRead = async () => {
        try {
            await axiosInstance.put('/api/notifications/mark-all-read');
            setState((prev) => ({
                notifications: prev.notifications.map((n) => ({ ...n, isRead: true })),
                unreadCount: 0,
            }));
        } catch (error) {
            console.error('Error marking all notifications as read:', error);
        }
    };

    return (
        <Dropdown className="noti" align="end">
            <Dropdown.Toggle variant="link" className="p-0 position-relative">
                <HiOutlineBellAlert size={22} />
                {state.unreadCount > 0 && (
                    <Badge pill bg="danger" className="position-absolute top-0 start-100 translate-middle">
                        {state.unreadCount}
                    </Badge>
                )}
            </Dropdown.Toggle>

            <Dropdown.Menu className="notification-dropdown-menu">
                <div className="d-flex justify-content-between align-items-center px-3 py-2 border-bottom">
                    <h6 className="m-0">Thông báo</h6>
                    {state.unreadCount > 0 && (
                        <button onClick={markAllAsRead} className="btn btn-link btn-sm p-0">
                            Đánh dấu đã đọc tất cả
                        </button>
                    )}
                </div>

                <div className="notification-list" style={{ maxHeight: '400px', overflowY: 'auto' }}>
                    {state.notifications.length === 0 ? (
                        <div className="text-center text-muted py-3">Không có thông báo nào</div>
                    ) : (
                        state.notifications.map((notification) => (
                            <Dropdown.Item
                                key={notification.id}
                                onClick={() => handleNotificationClick(notification)}
                                className={`d-flex flex-column p-3 ${!notification.isRead ? 'bg-light' : ''}`}
                            >
                                <div className="d-flex justify-content-between w-100">
                                    <strong>{notification.title}</strong>
                                    <small className="text-muted">
                                        {formatDistanceToNow(new Date(notification.timestamp), {
                                            addSuffix: true,
                                            locale: vi,
                                        })}
                                    </small>
                                </div>
                                <p className="mb-0 text-muted">{notification.message}</p>
                            </Dropdown.Item>
                        ))
                    )}
                </div>
            </Dropdown.Menu>
        </Dropdown>
    );
}
