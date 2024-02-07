import React, { useState } from 'react';
import { PageLayout, Input } from '@/components/common';
import styled from 'styled-components';

const Form = styled.form`
  width: 100%;
  max-width: 400px;
  background: white;
  border: 1px solid #eee;
  padding: 16px;
  box-sizing: border-box;
  color: black;
  border-radius: 4px;
`;
const Login = () => {
  const [formFields, setFormFields] = useState({
    username: '',
    password: '',
  });
  const handleInputChange = e => {
    e.persist(); //保留引用避免事件對象被銷毀造成報錯
    const { name, value } = e.target;
    setFormFields(prev => ({ ...prev, [name]: value }));
  };
  return (
    <PageLayout>
      <h1>登入</h1>
      <Form>
        <Input
          type='text'
          placeholder='使用者名稱'
          name='username'
          value={formFields.username}
          onChange={handleInputChange}
        />
        <Input
          type='password'
          placeholder='密碼'
          name='password'
          value={formFields.password}
          onChange={handleInputChange}
        />
      </Form>
    </PageLayout>
  );
};

export default Login;
