import React, { Component } from 'react'
import { Card, Button,Form, Input } from 'antd'
    const layout = {
        labelCol: { span: 2 },
        wrapperCol: { span: 22 },
    };
    const tailLayout = {
        wrapperCol: { offset: 2, span: 22 },
    };
    const ArticleEdit = () => {
        const onFinish = values => {
        console.log('Success:', values);
    };
    
    const onFinishFailed = errorInfo => {
        console.log('Failed:', errorInfo);
    };
  
    return (
      <Form
        {...layout}
        name="basic"
        initialValues={{ remember: true }}
        onFinish={onFinish}
        onFinishFailed={onFinishFailed}
      >
        <Form.Item
          label="标题"
          name="title"
          // rules={[{ required: true, message: '文章标题不能为空！' }]}
          rules={[
            {
              validator: (rule, value, callback) => {
                    console.log({rule, value, callback})
              }
            }
          ]}
        >
                <Input />
        </Form.Item>
        <Form.Item
          label="作者"
          name="author"
          rules={[{ required: true, message: '作者名字不能为空！' }]}
        >
                <Input />
        </Form.Item>
        <Form.Item
          label="阅读量"
          name="amount"
          rules={[{ required: true, message: '阅读量不能为空！' }]}
        >
                <Input />
        </Form.Item>
        <Form.Item
          label="创建时间"
          name="createAt"
          rules={[{ required: true, message: '创建时间不能为空！' }]}
        >
                <Input />
        </Form.Item>
        <Form.Item {...tailLayout}>
          <Button type="primary" htmlType="submit">
            保存
          </Button>
          <i>&nbsp;&nbsp;&nbsp;&nbsp;</i>
          <Button type="danger" >
                取消
          </Button>
        </Form.Item>
      </Form>
    );
  };
export default class Edit extends Component {
    
    render() {
        return (
                    <Card
                        title="编辑文章"
                        extra={<Button >返回列表</Button>}
                    >
                         <ArticleEdit />
                    </Card>
        )
    }
}
