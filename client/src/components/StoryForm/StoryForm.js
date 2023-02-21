import React from 'react'
import { Card, Form, Input, Typography, Button } from 'antd';
import { useDispatch } from 'react-redux';  
import FileBase64 from 'react-file-base64';
import styles from "./styles"
import { createStory } from '../../actions/storyActions';

const { Title } = Typography;

function StoryForm() {
  
  const dispatch = useDispatch();

  // useForm is a hook that returns a form instance
  const [form] = Form.useForm();

  const onSubmit = (formValues) => {
    console.log(formValues);
    dispatch(createStory(formValues));
    reset();
  };

  const reset = () => {
    form.resetFields();
    //setSelectedId(null);
  }

  return (
    <Card 
      style={styles.card}
      title={
        <Title level={4} style={styles.fromTitle}>
          Create a new story
        </Title>
      }
    >
      <Form
        form={form}
        labelCol={{ span: 8 }}
        wrapperCol={{ span: 16 }}
        layout="horizontal"
        size="small"
        onFinish={onSubmit}
      >
        <Form.Item name="username" label="Username" rules={[{ required: true }]}>
          <Input allowClear />
        </Form.Item>

        <Form.Item name="caption" label="Caption" rules={[{ required: true }]}>
          <Input.TextArea allowClear autoSize={{ minRows: 2, maxRows: 6}} />
        </Form.Item>

        <Form.Item name="tags" label="Tags">
          <Input.TextArea allowClear autoSize={{ minRows: 2, maxRows: 6}} />
        </Form.Item>

        <Form.Item name="image" label="Image" rules={[{ required: true }]}>
          <FileBase64
            type="file"
            multiple={false}
            onDone={(e) => {
              form.setFieldsValue({
                image: e.base64
              })
            }}
          />
        </Form.Item>

        <Form.Item wrapperCol={{ offset: 8, span: 16 }}>
          <Button type="primary" block htmlType="submit">
            Share
          </Button>
        </Form.Item>

      </Form>
    </Card>
  )
}

export default StoryForm