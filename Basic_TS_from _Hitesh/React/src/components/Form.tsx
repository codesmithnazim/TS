import React, { useState, type ReactEventHandler } from "react";
interface formData {
  onSubmit(user : {name: string, email: string, passwordKey: number} ): void;
}

function Form({ onSubmit }: formData) {
  const [userInfo, setUserInfo] = useState({
    name: "",
    email: "",
    passwordKey: 0o0000,
  });
  function submitHandler(e: React.SubmitEvent) {
    e.preventDefault();
    onSubmit({name :userInfo.name,email: userInfo.email,passwordKey: userInfo.passwordKey})
  }
  return (
    <div>
      <form onSubmit={submitHandler}>
        <label htmlFor="">
          {" "}
          name :
          <input type="text" value={userInfo.name} onChange={(e:React.ChangeEvent<HTMLInputElement>)=>(setUserInfo(userInfo=> ({...userInfo, name : e.target.value})))} />
        </label>
        <label htmlFor="">
          {" "}
          email :
          <input type="text" value={userInfo.email}  onChange={(e:React.ChangeEvent<HTMLInputElement>)=> (setUserInfo(userInfo=> ({...userInfo, email : e.target.value})))}/>
        </label>
        <label htmlFor="">
          {" "}
          passwordKey :
          <input type="password" value={userInfo.passwordKey} onChange={(e:React.ChangeEvent<HTMLInputElement>)=> (setUserInfo(userInfo=> ({...userInfo, passwordKey : Number( e.target.value)})))}/>
        </label>
        <button type="submit">log-in</button>
      </form>
    </div>
  );
}

export default Form;
