"use client"
import { TravelsInterface } from "@/ts/interfaces/travels.interface";

import {
    CarOutlined,
    CheckCircleOutlined,
    DeleteOutlined,
    MoreOutlined,
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
    

    const items: MenuProps["items"] = [
        {
          key: "1",
          label: "Assign driver",
          icon: <CarOutlined />,
        },
        {
          key: "2",
          label: "Complete trip",
          icon: <CheckCircleOutlined />,
        },
        {
          key: "3",
          danger: true,
          label: "Cancel trip",
          icon: <DeleteOutlined />,
        },
      ];
    
      // const columns: ColumnsType<TravelsInterface> = [
      //   {
      //     title: "Id",
      //     dataIndex: "id",
      //     key: "id",
      //     render: (text) => <Typography.Text strong>{text.name}</Typography.Text>,
      //   },
      //   {
      //     title: "Name",
      //     dataIndex: "name",
      //     key: "name",
      //     render: (text) => (
      //       <section>
      //         <Typography.Text strong>{text.name}</Typography.Text>
      //       </section>
      //     ),
      //   },
      //   {
      //     title: "Phone",
      //     dataIndex: "phone",
      //     key: "phone",
      //     render: (text) => (
      //       <section>
      //         <Typography.Text  strong>
      //           {text.name}
      //         </Typography.Text>
      //         <br />
      //       </section>
      //     ),
      //   },
      //   {
      //     title: "Email",
      //     dataIndex: "email",
      //     key: "email",
      //     render: (text) => (
      //       <section>
      //         <Typography.Text strong>
      //           {text.name}
      //         </Typography.Text>
      //         <br />
      //       </section>
      //     ),
      //   },
      //   {
      //     title: "Status",
      //     dataIndex: "status",
      //     key: "status",
      //     render: (text) => (
      //       <section>
      //         <Tag color="green">{text}</Tag>
      //       </section>
      //     ),
      //   },
    
      //   {
      //     title: "Action",
      //     key: "action",
      //     render: (_, record) => (
      //       <Dropdown menu={{ items }}>
      //         <Button icon={<MoreOutlined />}>Options</Button>
      //       </Dropdown>
      //     ),
      //   },
      // ];
      const Here = companies
      const columns = [
        {
          title: "Id",
          dataIndex: "id",
          key: "id",
        },
        {
          title: "Name",
          dataIndex: "name",
          key: "name",
        },
        {
          title: "Phone",
          dataIndex: "phone",
          key: "phone",
        },
        {
          title: "Email",
          dataIndex: "email",
          key: "email",
        },
        {
          title: "Status",
          dataIndex: "status",
          key: "status",
        },
    
        {
          title: "Action",
          key: "action",
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
        </Space>
        <section>
          <Table columns={columns} dataSource={Here} rowKey={Here.id}/>
        </section>
      </div>
    </section>
  )
}

