import React from "react";
import "./App.css";

function App() {
  const initialUserInfo = {
    name: "",
    email: "",
    num: "",
    school: "",
    degree: "",
    date: "",
    company: "",
    position: "",
    duties: "",
    dateStart: "",
    dateEnd: "",
  };

  const [userInfo, setUserInfo] = React.useState(initialUserInfo);

  const handleInfo = (info) => {
    setUserInfo(info);
  };

  return (
    <div className="heading">
      <h1>CV Project</h1>
      <div className="App">
        <GenInfo onInfo={handleInfo} />
        <DisplayInfo onDisp={userInfo} />
      </div>
    </div>
  );
}

const GenInfo = (props) => {
  const initialInfo = {
    name: "",
    email: "",
    num: "",
    school: "",
    degree: "",
    date: "",
    company: "",
    position: "",
    duties: "",
    dateStart: "",
    dateEnd: "",
  };

  const validStyle = {
    border: "1px solid black",
  };

  const invalidStyle = {
    border: "2px dashed red",
  };

  const [userInfo, setUserInfo] = React.useState(initialInfo);

  const [nameStyle, setNameStyle] = React.useState(validStyle);
  const [emailStyle, setEmailStyle] = React.useState(validStyle);
  const [numStyle, setNumStyle] = React.useState(validStyle);
  const [schoolStyle, setSchoolStyle] = React.useState(validStyle);
  const [degreeStyle, setDegreeStyle] = React.useState(validStyle);
  const [dateStyle, setDateStyle] = React.useState(validStyle);
  const [companyStyle, setCompanyStyle] = React.useState(validStyle);
  const [positionStyle, setPositionStyle] = React.useState(validStyle);
  const [dutiesStyle, setDutiesStyle] = React.useState(validStyle);
  const [dateStartStyle, setDateStartStyle] = React.useState(validStyle);
  const [dateEndStyle, setDateEndStyle] = React.useState(validStyle);

  const handleSubmit = () => {
    if (userInfo.name === "") {
      setNameStyle(invalidStyle);
    } else {
      setNameStyle(validStyle);
    }

    if (
      userInfo.email === "" ||
      !(userInfo.email.includes("@") || userInfo.email.includes(".com"))
    ) {
      setEmailStyle(invalidStyle);
    } else {
      setEmailStyle(validStyle);
    }

    if (userInfo.num === "" || userInfo.num.length <= 9) {
      setNumStyle(invalidStyle);
    } else {
      setNumStyle(validStyle);
    }

    if (userInfo.school === "") {
      setSchoolStyle(invalidStyle);
    } else {
      setSchoolStyle(validStyle);
    }

    if (userInfo.degree === "") {
      setDegreeStyle(invalidStyle);
    } else {
      setDegreeStyle(validStyle);
    }

    if (userInfo.date === "") {
      setDateStyle(invalidStyle);
    } else {
      setDateStyle(validStyle);
    }

    if (userInfo.company === "") {
      setCompanyStyle(invalidStyle);
    } else {
      setCompanyStyle(validStyle);
    }

    if (userInfo.position === "") {
      setPositionStyle(invalidStyle);
    } else {
      setPositionStyle(validStyle);
    }

    if (userInfo.duties === "") {
      setDutiesStyle(invalidStyle);
    } else {
      setDutiesStyle(validStyle);
    }

    if (userInfo.dateStart === "") {
      setDateStartStyle(invalidStyle);
    } else {
      setDateStartStyle(validStyle);
    }

    if (userInfo.dateEnd === "") {
      setDateEndStyle(invalidStyle);
    } else {
      setDateEndStyle(validStyle);
    }

    const passUpData = userInfo;
    props.onInfo(passUpData);
    // if (nameStyle === validStyle && emailStyle === validStyle && numStyle === validStyle && schoolStyle === validStyle && degreeStyle === dateStyle && companyStyle === positionStyle && dutiesStyle === validStyle && dateStartStyle === validStyle && dateEndStyle === validStyle) {
    //   console.log("huzzah")
    //   const passUpData = userInfo;
    //   props.onInfo(passUpData);
    // }
  };

  return (
    <div className="info">
      <form>
        <p>
          <strong>Personal Information: </strong>
        </p>
        <input
          type="text"
          placeholder="Name"
          onChange={(event) =>
            setUserInfo({ ...userInfo, name: event.target.value })
          }
          style={nameStyle}
        ></input> &nbsp;
        <input
          type="email"
          placeholder="Email"
          onChange={(event) =>
            setUserInfo({ ...userInfo, email: event.target.value })
          }
          style={emailStyle}
        ></input>
        <input
          type="text"
          placeholder="Phone Number"
          onChange={(event) =>
            setUserInfo({ ...userInfo, num: event.target.value })
          }
          style={numStyle}
        ></input>
        <br />
        <p>
          <strong>Education: </strong>
        </p>
        <input
          type="text"
          placeholder="School"
          onChange={(event) =>
            setUserInfo({ ...userInfo, school: event.target.value })
          }
          style={schoolStyle}
        ></input> &nbsp;
        <input
          type="text"
          placeholder="Degree"
          onChange={(event) =>
            setUserInfo({ ...userInfo, degree: event.target.value })
          }
          style={degreeStyle}
        ></input>
        <input
          type="month"
          placeholder="Date Completed (yyyy)"
          onChange={(event) =>
            setUserInfo({ ...userInfo, date: event.target.value })
          }
          style={dateStyle}
        ></input>
        <br />
        <p>
          <strong>Professional Experience: </strong>
        </p>
        <input
          type="text"
          placeholder="Company"
          onChange={(event) =>
            setUserInfo({ ...userInfo, company: event.target.value })
          }
          style={companyStyle}
        ></input> &nbsp;
        <input
          type="text"
          placeholder="Position"
          onChange={(event) =>
            setUserInfo({ ...userInfo, position: event.target.value })
          }
          style={positionStyle}
        ></input>
        <br />
        <textarea
          type="text"
          className="duties"
          placeholder="Job Duties"
          onChange={(event) =>
            setUserInfo({ ...userInfo, duties: event.target.value })
          }
          style={dutiesStyle}
        ></textarea>
        <br />
        <input
          type="month"
          placeholder="Date Started"
          onChange={(event) =>
            setUserInfo({ ...userInfo, dateStart: event.target.value })
          }
          style={dateStartStyle}
        ></input> &nbsp;
        <input
          type="month"
          placeholder="Date Ended"
          onChange={(event) =>
            setUserInfo({ ...userInfo, dateEnd: event.target.value })
          }
          style={dateEndStyle}
        ></input>
      </form>
      <button className="submit" onClick={() => handleSubmit()}>
        Submit
      </button>
    </div>
  );
};

const DisplayInfo = (props) => {
  return (
    <div className="display">
      <h1>{props.onDisp.name}</h1>
      <p>
        {props.onDisp.email} {props.onDisp.num}
      </p>
      <br />
      <p>
        Education: {props.onDisp.school} - {props.onDisp.degree} -{" "}
        {props.onDisp.date}
      </p>
      <br />
      <p>
        Experience: {props.onDisp.company} - {props.onDisp.position}
        {props.onDisp.dateStart + " - " + props.onDisp.dateEnd}
      </p>
      <p>{props.onDisp.duties}</p>
    </div>
  );
};

export default App;

// const validStyle = {
//   border: "2px solid black",
// };
// const invalidStyle = {
//   border: "2px dashed red",
// };

// const onSubmit = () => {
//   if (userInfo.name.length >= 2) {
//     setNameStyle(validStyle);
//   } else {
//     alert("Please fill out the name field correctly");
//     setNameStyle(invalidStyle);
//   }

//   if (userInfo.email.includes("@") && userInfo.email.includes(".com")) {
//     setEmailStyle(validStyle);
//   } else {
//     alert("Please fill out the email field correctly");
//     setEmailStyle(invalidStyle);
//   }

//   if (userInfo.num.length >= 10) {
//     setNumStyle(validStyle);
//   } else {
//     alert("Please fill out the number field correctly");
//     setNumStyle(invalidStyle);
//   }
// };
