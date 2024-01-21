import { getVerificationCode, registorUser } from '@/services/user';
import { UserRequest } from '@/services/user/interface';
import { ProCard, ProForm, ProFormText } from '@ant-design/pro-components';
import { App, Button, Col, Row } from 'antd';
import type { CSSProperties } from 'react';
import React from 'react';

type LoginType = 'phone' | 'account';

const iconStyles: CSSProperties = {
  color: 'rgba(0, 0, 0, 0.2)',
  fontSize: '18px',
  verticalAlign: 'middle',
  cursor: 'pointer',
};

const Registor: React.FC = () => {
  const { message } = App.useApp();
  const [form] = ProForm.useForm();
  const getCaptchaCode = async () => {
    const email = form.getFieldValue('email');
    if (!email) {
      return message.error('请填入您获取验证码的邮箱地址');
    }

    const {} = await getVerificationCode({ address: email });
  };
  return (
    <ProCard>
      <Row>
        <Col offset={7} style={{ marginTop: 100 }}>
          <ProCard
            bordered
            hoverable
            style={{ width: 800 }}
            title={'会议室预定-注册账号'}
          >
            <ProForm<UserRequest.RegistorUser>
              title="会议室预定-注册账号"
              form={form}
              onFinish={async (value) => {
                await registorUser(value);
                message.success('注册成功');
              }}
            >
              <ProFormText
                label="用户名"
                name={'username'}
                rules={[{ required: true }]}
              />
              <ProFormText
                label="昵称"
                name={'nickName'}
                rules={[{ required: true }]}
              />
              <ProFormText.Password
                label="密码"
                name={'password'}
                rules={[{ required: true }]}
              />
              <ProFormText
                label="邮箱"
                name={'email'}
                rules={[{ required: true }]}
              />
              <ProFormText
                label="验证码"
                name={'captcha'}
                rules={[{ required: true }]}
                addonAfter={
                  <Button type="primary" onClick={getCaptchaCode}>
                    发送验证码
                  </Button>
                }
              />
            </ProForm>
          </ProCard>
        </Col>
      </Row>
    </ProCard>
  );
};

export default Registor;
