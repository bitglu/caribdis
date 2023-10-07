'use client'
import { CompaniesInterface } from "@/ts/interfaces/companies.interface";
import {
  Button,
  Space,
  Descriptions,
  Form,
  Input,
} from 'antd';
import { useEffect, useState } from 'react'

export default function CreateCompanieComponent(){
  const [data, setData ] = useState<CompaniesInterface>()
  const [form] = Form.useForm()
  const onFinish = (values: CompaniesInterface) => {
    const date = new Date();
    values.created_at = date
    values.id = 123
    values.status = 'pending'
    setData(values)    
  }
  useEffect(()=>{
    console.log('send to supabase', data);
  },[data])
  
  return( 
  <section>
    <div style={{padding: 24, minHeight:380}}>
      <Space>
        <Descriptions title="Create company" />
      </Space>
      <section style={{marginTop: 20}}>
        <Form
        form={form}
        style={{ maxWidth: 600, marginLeft: 16 }}
        onFinish={onFinish}

        >
          <Form.Item name="name" label="Name of company" rules={[{ required: true}]} >
            <Input/>
          </Form.Item>

          <Form.Item name="administrator" label="Administrator" rules={[{ required: true}]} >
            <Input/>
          </Form.Item>

          <Form.Item name="phone" label="Phone" rules={[{ required: true }]}>
            <Input/>
          </Form.Item>

          <Form.Item name="email" label="Email" rules={[{ required: true,  type: "email" }]}>
            <Input/>
          </Form.Item>

          <Form.Item>
            <Button type="primary" htmlType="submit">
            Create
            </Button>
          </Form.Item>
        </Form>        
      </section>

    </div>
  </section>
  )
}
