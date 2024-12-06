export interface Notification {
    id: string;
    title: string;
    message: string;
    type: string;
    userId: string;
    timestamp: string;
    metadata?: string;
    isRead: boolean;
}

export interface NotificationState {
    notifications: Notification[];
    unreadCount: number;
}
