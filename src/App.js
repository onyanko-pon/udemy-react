import React from "react";

function User(props) {
  return (<p>I am {props.name} and {props.age} years old.</p>)
}

User.defaultProps = {
  age: 1,
  name: "Noname"
}

function App() {
  const profiles = [
    {name: "Taro", age: 10},
    {name: "Hanako", age: 5},
    {}
  ]

  return (
    <React.Fragment>
      {
        profiles.map((profile, index) => {
            return <User key={index} name={profile.name} age={profile.age} />
        })
      }
    </React.Fragment>
  );
}

export default App;