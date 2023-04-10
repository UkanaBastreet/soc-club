import { useLocalStorage } from "@/../ukana-kit/dist";
import React, { useEffect, useState } from "react";

interface UserT {
  name: string;
  email: string;
}

const UsersPage = () => {
  const [users, setUser] = useState<UserT[]>([]);
  let token: string | null;
  if (typeof window !== "undefined") {
    // eslint-disable-next-line react-hooks/rules-of-hooks
    token = localStorage.getItem("token");
  }
  useEffect(() => {
    async function fetching() {
      const res = await fetch(
        "https://soc-club-ukanabastreet.vercel.app/users",
        {
          headers: {
            Authorization: JSON.stringify(token),
          },
        }
      )
        .then((res) => res.json())
        .catch(console.log);
      console.log("res", res);
      setUser(res);
    }
    fetching();
    console.log(users);
  }, []);

  return (
    <div>
      <h1>Users:</h1>
      {users && users.length !== 0 ? (
        users.map((user, id) => (
          <div
            style={{
              border: "1px solid gray",
              margin: "10px",
              borderRadius: "5px",
              padding: "15px 10px",
            }}
            key={id}
          >
            <span>
              name:<b>{user?.name}</b>
            </span>
            <hr />
            <span>
              email:<b>{user?.email}</b>
            </span>
          </div>
        ))
      ) : (
        <h3>Empty...</h3>
      )}
    </div>
  );
};
export default UsersPage;
