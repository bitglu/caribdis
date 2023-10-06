'use client'
import { CompaniesInterface } from "@/ts/interfaces/companies.interface";
import {
  Button,
  Space,
  Descriptions,
  Cascader,
  Checkbox,
  DatePicker,
  Form,
  Input,
  InputNumber,
  Radio,
  Select,
  Slider,
  Switch,
  TreeSelect,
  Upload,
} from 'antd';
import { useState } from 'react'

export default function CreateCompanieComponent(){
  const [hola, setHola ] = useState('hola')
  const [form] = Form.useForm()
  const onFinish = (values: any) => {
    console.log(values);
    
  }
  return( 
  <section>
    <div style={{padding: 24, minHeight:380}}>
      <Space>
        <Descriptions title="Create Company" />
      </Space>
      <section style={{marginTop: 20}}>
        <Form
        form={form}
        style={{ maxWidth: 600 }}
        onFinish={onFinish}

        >
          <Form.Item name="name" label="Name" >
            <Input/>
          </Form.Item>

          <Form.Item name="email" label="Email" >
            <Input/>
          </Form.Item>

          <Form.Item name="phone" label="Phone" >
            <Input/>
          </Form.Item>

          <Form.Item >
            <Button type="primary" htmlType="submit">
            Submit
            </Button>
          </Form.Item>
        </Form>        
      </section>

    </div>
  </section>
  )
}
