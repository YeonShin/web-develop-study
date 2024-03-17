import axios from "axios";
import { useState } from "react";

const MainPage = () => {
  const [ouid, setOuid] = useState([]);
  const [nickName, setNickName] = useState("");
  const API_KEY =
    "test_5092881508c92e8de394ecca775ddcdc9082b81dbcd138de1011bd980195fd6a86d8f0bb543a868ce6194e617b1046ef";

  const nameInputChangeHandler = (event) => {
    setNickName(event.target.value);
  }
  const submitHandler = (event) => {
    event.preventDefault();
    fetch(`https://open.api.nexon.com/fconline/v1/id?nickname=${nickName}`, {
      headers: {
        "x-nxopen-api-key": API_KEY,
      },
    })
    .then(response => response.json())
    .then(data => setOuid(data.ouid));  
    console.log(ouid);
  };

  return (
    <div>
      <form onSubmit={submitHandler}>
        <input type="text" placeholder="구단주명" onChange={nameInputChangeHandler} />
      </form>
    </div>
  );
};

export default MainPage;
