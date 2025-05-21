import { useState } from "react";
import Blog from "./blog";
import withAdminLayout from "./withAdminLayout";

const Test = () => {
  return <div>test</div>;
};

const TestWithAdmin = withAdminLayout(Test);
const Home = () => {
  const [name, setName] = useState(1);
  return (
    <>
      <button onClick={() => setName((prev) => prev + 1)}>ashraf</button>
      {/* <TestWithAdmin /> */}
      <Blog firstName={"ashraf"} lastName="lastame" />
    </>
  );
};

export default Home;
