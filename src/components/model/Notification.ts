export interface Notification {
    id: string;
    title: string;
    message: string;
    type: string;
    userId: string;
    timestamp: string;
    metadata?: string;
    read: boolean;
}

export interface NotificationState {
    notifications: Notification[];
    unreadCount: number;
}
