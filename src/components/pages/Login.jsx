import { useState } from 'react';
import {
  PageLayout,
  Input,
  PasswordInput,
  Button,
  Spinner,
} from '@/components/common';
import styled from 'styled-components';
import { useEffect } from 'react';

const Form = styled.form`
  width: 100%;
  max-width: 400px;
  background: white;
  border: 1px solid #eee;
  padding: 16px;
  box-sizing: border-box;
  color: black;
  border-radius: 4px;
  margin: 0 auto;

  .alt-text {
    text-align: center;
    margin: 10px 0;
  }
  > ${Input} {
    margin-top: 20px;
  }
  ${Button}:first-of-type {
    margin-top: 40px;
  }
`;
let timeout;

const Login = () => {
  const [formFields, setFormFields] = useState({
    username: '',
    password: '',
  });
  const [loading, setLoading] = useState(false);
  const handleInputChange = e => {
    e.persist(); //保留引用避免事件對象被銷毀造成報錯
    const { name, value } = e.target;
    setFormFields(prev => ({ ...prev, [name]: value }));
  };
  const handleSubmit = e => {
    e.preventDefault();
    setLoading(true);
    timeout = setTimeout(() => {
      setLoading(false);
    }, 2000);
  };

  useEffect(() => {
    return () => {
      if (timeout) {
        clearTimeout;
      }
    };
  }, []);

  return (
    <PageLayout>
      <h1>登入</h1>
      <Form onSubmit={handleSubmit}>
        {loading ? (
          <Spinner />
        ) : (
          <>
            <span>請輸入帳號密碼</span>
            <Input
              type='text'
              placeholder='使用者名稱'
              name='username'
              value={formFields.username}
              onChange={handleInputChange}
            />
            <PasswordInput
              name='password'
              value={formFields.password}
              onChange={handleInputChange}
            />
          </>
        )}
        <Button type='submit' $large disabled={loading}>
          {loading ? '登入中' : '登入'}
        </Button>
        {!loading && (
          <>
            <div className='alt-text'>或</div>
            <Button type='button' $secondary='true'>
              註冊
            </Button>
          </>
        )}
      </Form>
    </PageLayout>
  );
};

export default Login;
