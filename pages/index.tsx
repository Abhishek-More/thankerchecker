import axios from "axios";
import { useState, useEffect } from "react";

const users = [
  "Ekdev",
  "Abhishek",
  "Li",
  "Ayo",
  "Anish",
  "Kirthi",
  "Ashrita",
  "Jaden",
  "Malavi",
  "Arya",
  "Jiyoon",
  "Mateo",
  "Anjali",
  "Keegan",
  "Big Harsh",
  "Naveen",
  "Gabe",
  "Nafi",
  "Lizzy",
  "Joshua",
  "Adnan",
  "Austin",
  "Rita",
  "Adam",
  "Nico",
];

export default function Home() {
  const [userInfo, setUserInfo] = useState<{ [key: string]: string }>({});

  useEffect(() => {
    let info: { [key: string]: string } = {};
    users.forEach((user) => {
      // GET request for remote image in node.js
      axios({
        method: "get",
        url: `https://th-thanks.vercel.app/user/getinfo/${user}`,
      }).then(function (response) {
        info[response.data.name] = response.data.postCount;
        setUserInfo(info);
      });
    });
    console.log(info);
  }, []);

  return (
    <div>
      <p>Name: Thank Yous Completed </p>
      {Object.entries(userInfo).map(([key]) => (
        <div key={key}>
          <p>
            {key}:{userInfo[key] || 0}
          </p>
        </div>
      ))}
    </div>
  );
}
