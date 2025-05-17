const NotificationComp = ({ notifications, onReadClick }) => {
  console.log("🚀 ~ NotificationComp ~ notifications:", notifications)
  return (
    <>
      {notifications.map((item, index) => (
        <div key={item?.id} className="flex justify-end">
          {item?.message}

          {!item?.read && <button onClick={() => onReadClick(item)}>Read</button>}
        </div>
      ))}
    </>
  );
};

export default NotificationComp;
