import { useMemo, useState } from "react";
import NotificationComp from "./notificationComp";

const notificationsList = [
  { id: 1, message: "New comment on your post", read: false },
  { id: 2, message: "Your password was changed successfully", read: true },
  { id: 3, message: "You have a new follower: JohnDoe", read: false },
  { id: 4, message: "Reminder: Team meeting at 3 PM", read: true },
  { id: 5, message: "System update available", read: false },
  { id: 6, message: "Message from HR: New policy update", read: true },
  { id: 7, message: "Payment received from Client A", read: false },
  { id: 8, message: "Your subscription will expire soon", read: true },
  { id: 9, message: "New task assigned: Bug #123", read: false },
  { id: 10, message: "Welcome to the platform!", read: true },
];

const Notification = () => {
  const [notifications, setNotifications] = useState(notificationsList);
  const [showState, setShowState] = useState("showAll");

  const filteredNotifications = useMemo(() => {
    if (showState === "showAll") {
      return notifications;
    } else {
      return notifications.filter((notificationItem) => !notificationItem.read);
    }
  }, [showState, notifications]);

  const onReadClick = (notificationItem) => {
    const updatedNotificationList = notifications.map((notificationListItem) =>
      notificationItem.id === notificationListItem?.id
        ? { ...notificationListItem, read: true }
        : notificationListItem
    );
    setNotifications(updatedNotificationList);
  };
  return (
    <div>
      <button onClick={() => setShowState("showAll")}>ShowAll</button>
      <button onClick={() => setShowState("showUnread")}>ShowUnread</button>
      <NotificationComp
        notifications={filteredNotifications}
        onReadClick={onReadClick}
      />
    </div>
  );
};

export default Notification;
