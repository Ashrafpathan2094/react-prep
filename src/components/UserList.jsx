const UserList = ({ UserList }) => {
  return (
    <>
      {UserList.map((item, index) => (
        <div key={item?.id}>{item?.name}</div>
      ))}
    </>
  );
};

export default UserList;
