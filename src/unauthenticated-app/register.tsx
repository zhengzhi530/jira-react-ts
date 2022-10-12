import { login ,register } from "auth-provider";
import { useAuth } from "context/auth-context";
import React, { FormEvent } from "react";

const apiUrl = process.env.REACT_APP_API_URL;

export const RegisterScreen =() => {

  //使用自定义hooks
  const {register, user} =useAuth()

  const handlerSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const username = (event.currentTarget.elements[0] as HTMLInputElement)
      .value;
    const password = (event.currentTarget.elements[0] as HTMLInputElement)
      .value;
      register({ username, password });
  };

  return (
    <div>
      <form onSubmit={handlerSubmit}>
        <div>
          <label htmlFor="username">用户名</label>
          <input type="text" id="username" />
        </div>
        <div>
          <label htmlFor="password">密码</label>
          <input type="password" id="password" />
        </div>
        <button type="submit">注册</button>
      </form>
    </div>
  )
}
