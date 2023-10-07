"use client"
import { CompaniesInterface } from "@/ts/interfaces/companies.interface";
import {  useState } from 'react'
import { useRouter } from "next/navigation";
import {
    Button,
    Descriptions,
    Space,
    Table,
    Tag,
    Typography,
  } from "antd";
  import type { ColumnsType } from "antd/es/table";


export default function CompaniesPageComponent(props: {
    companies: CompaniesInterface[] | null;
  }) {
    const { companies } = props
    const [companie, setCompanie] = useState<CompaniesInterface[] | null>(companies)
    const router = useRouter();

    console.log(companie);
    

    
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
        }
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
          <Button type="primary" onClick={()=> router.push('/dashboard/companies/company') }>Create companie</Button>
        </Space>
        <section style={{marginTop: 20}}>
          <Table columns={columns} dataSource={companie ?? []} rowKey={"id"}/>
        </section>
      </div>
    </section>
  )
}

