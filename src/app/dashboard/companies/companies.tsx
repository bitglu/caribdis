"use client"
import { CompaniesInterface } from "@/ts/interfaces/companies.interface";
import { useState } from 'react'


import {
    CarOutlined,
    CheckCircleOutlined,
    DeleteOutlined,
    MoreOutlined,
    SearchOutlined,
    MailOutlined
  } from "@ant-design/icons";
  import {
    Button,
    Descriptions,
    Dropdown,
    message,
    Space,
    Table,
    Tag,
    Typography,
  } from "antd";
  import type { ColumnsType } from "antd/es/table";
  import type { MenuProps } from "antd";
import { record } from "zod";


export default function CompaniesPageComponent(props: {
    companies: CompaniesInterface[] | null;
  }) {
    const { companies } = props
    const [companie, setCompanie] = useState(companies)
    
    const searchCompanie = () => {
      setCompanie(companies)
      
    }   
    const handleCreateChildTask = (record: any) => {
      console.log('record', record);
      message.info(`Searching Driver ${record.name}`)
  }
    const items: MenuProps["items"] = [
        {
          key: "1",
          label: "Search driver",
          icon: <CarOutlined />,
        },
        {
          key: "2",
          danger: true,
          label: "Delete companie",
          icon: <DeleteOutlined />,
        },
      ];
      const deleteCompanie = (record: any) => {
        const filteredProducts: any = companie?.filter(product => product.id != record.id)
        setCompanie(filteredProducts)
      }

      const columns: ColumnsType<CompaniesInterface> = [
        {
          title: "Name",
          dataIndex: "name",
          key: "name",
          render: (text) => (
            <section>
              <Typography.Text strong>{text}</Typography.Text>
            </section>
          ),
        },
        {
          title: "Phone",
          dataIndex: "phone",
          key: "phone",
          render: (text) => (
            <section>
              <Typography.Text  strong>
                {text}
              </Typography.Text>
              <br />
            </section>
          ),
        },
        {
          title: "Email",
          dataIndex: "email",
          key: "email",
          render: (text) => (
            <section>
              <Typography.Text strong>
                {text}
              </Typography.Text>
              <br />
            </section>
          ),
        },
        {
          title: "Status",
          dataIndex: "status",
          key: "status",
          render: (text) => (
            <section>
              <Tag color="green">{text}</Tag>
            </section>
          ),
        },
        {
          title: "Action",
          key: "action",
          render: (_, record) => (
            <Dropdown menu={{ items, onClick: ({key}) => { if(key==='1'){ handleCreateChildTask(record)} else if(key=== '2'){deleteCompanie(record)} } }}>
              <Button icon={<MoreOutlined />}>Options</Button>
            </Dropdown>
          ),
        },
      ];


    
  return (
    <section>
      <div         
        style={{
          padding: 24,
          minHeight: 380,
        }}>
        <Space>
          <Descriptions title="Companies" />
          <Button type="primary" icon={<SearchOutlined/>} onClick={()=>searchCompanie()}>Search</Button>
        </Space>
        <section style={{marginTop: 20}}>
          <Table columns={columns} dataSource={companie ?? []} rowKey={"id"}/>
        </section>
      </div>
    </section>
  )
}

