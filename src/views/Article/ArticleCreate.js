import React, { Component, createRef } from 'react'
import { Card, Button, Form, Input, DatePicker } from 'antd'
import moment from 'moment'
import E from 'wangeditor'
const layout = {
  labelCol: { span: 4 },
  wrapperCol: { span: 16 },
};
const tailLayout = {
  wrapperCol: { offset: 4, span: 16 },
};
export default class ArticleCreate extends Component {
    
  constructor(props){
    super(props)
    this.articleId = this.props.match.params.id
    this.editorRef = createRef()
    this.formRef = createRef()
    this.state = {
      isLoading: false
    }
  }
   goBack = () => {
    this.props.history.goBack()
  }
   range = (start, end) => {
    const result = [];
    for (let i = start; i < end; i++) {
      result.push(i);
    }
    return result;
  }
  onFinish = values => {
    values.createAt = values.createAt.valueOf()
  };
   onFinishFailed = errorInfo => {
    console.log('Failed:', errorInfo);
  };
   disabledDate = (current) => {
    // Can not select days before today and today
    return current && current < moment().endOf('day');
  }
   disabledDateTime = () => {
    return {
      disabledHours: () => this.range(0, 24).splice(4, 20),
      disabledMinutes: () => this.range(30, 60),
      disabledSeconds: () => [55, 56],
    };
  }
  initEditor = () => {
    this.editor = new E(this.editorRef.current)
    this.editor.customConfig.onchange = (html) => {
        this.formRef.current.setFieldsValue({
          content: html
        })
    }
    this.editor.create()
  }
   componentDidMount = () => {
    this.initEditor()
  }
    render() {
        return (
            <Card
            title="新建文章"
            extra={<Button onClick={this.goBack}>返回文章列表</Button>}
          >
            
                <Form
                    {...layout}
                    name="basic"
                    ref={this.formRef}
                    initialValues={{ remember: true }}
                    onFinish={this.onFinish}
                    onFinishFailed={this.onFinishFailed}
                  >
                    <Form.Item
                      label="标题"
                      name="title"
                      rules={[
                        {
                          required: true,
                          message: '文章标题不能为空！'
                        }
    
                      ]}
                    >
                      <Input placeholder="标题" autoComplete="off" />
                    </Form.Item>
                    <Form.Item
                      label="作者"
                      name="author"
                      rules={[{ required: true, message: '作者名字不能为空！' }]}
                    >
                      <Input placeholder="admin" autoComplete="off" />
                    </Form.Item>
                    <Form.Item
                      label="阅读量"
                      name="amount"
                      rules={[{ required: true, message: '阅读量不能为空！' }]}
                    >
                      <Input placeholder="0" autoComplete="off" />
                    </Form.Item>
                    <Form.Item
                      label="发布时间"
                      name="createAt"
                      rules={[{ required: true, message: '创建时间不能为空！' }]}
                    >
                      <DatePicker
                        format="YYYY-MM-DD HH:mm:ss"
                        disabledDate={this.disabledDate}
                        disabledTime={this.disabledDateTime}
                        showTime={{ defaultValue: moment('00:00:00', 'HH:mm:ss') }}
                      />
                    </Form.Item>
                    <Form.Item
                      label="内容"
                      name="content"
                      rules={[{ required: true, message: '文章内容不能为空！' }]}
                    >
                      <div ref={this.editorRef} className="editContent"></div>
                    </Form.Item>
                    <Form.Item {...tailLayout}>
                      <Button type="primary" htmlType="submit">发布</Button>
                      <i>&nbsp;&nbsp;&nbsp;&nbsp;</i>
                      <Button type="danger" onClick={this.goBack} >取消</Button>
                    </Form.Item>
                  </Form>
          </Card>
        )
    }
}
