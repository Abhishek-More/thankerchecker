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

export default function Home({ info }: any) {
  return (
    <div>
      <p>Name: Thank Yous Completed </p>
      <p>---------------------------</p>
      {Object.entries(info).map(([key]) => (
        <div key={key}>
          <p>
            {key}:{info[key] || 0}
          </p>
        </div>
      ))}
    </div>
  );
}

export const getServerSideProps = async () => {
  let info: { [key: string]: string } = {};
  for (const user of users) {
    let res = await axios({
      method: "get",
      url: `https://th-thanks.vercel.app/user/getinfo/${user}`,
    });
    info[res.data.name] = res.data.postCount;
    console.log(info);
  }
  console.log("HELLO");
  return { props: { info } };
};
