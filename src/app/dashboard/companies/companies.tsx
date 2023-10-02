"use client"
import { TravelsInterface } from "@/ts/interfaces/travels.interface";
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
    Space,
    Table,
    Tag,
    Typography,
  } from "antd";
  import type { ColumnsType } from "antd/es/table";
  import type { MenuProps } from "antd";


export default function CompaniesPageComponent(props: {
    companies: TravelsInterface[] | null;
  }) {
    const { companies } = props
    const [companie, setCompanie] = useState(companies)
    
    
    const items: MenuProps["items"] = [
        {
          key: "1",
          label: "Search driver",
          icon: <CarOutlined />,
        },
        {
          key: "2",
          danger: true,
          label: "Delete Companie",
          icon: <DeleteOutlined />,
        },
      ];
    
      const columns: ColumnsType<TravelsInterface> = [
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
            <Dropdown menu={{ items }}>
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
          <Button type="primary" icon={<SearchOutlined/>}>Search</Button>
        </Space>
        <section style={{marginTop: 20}}>
          <Table columns={columns} dataSource={companie ?? []} rowKey={"id"}/>
        </section>
      </div>
    </section>
  )
}

