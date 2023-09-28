"use client";

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

import dayjs from "dayjs";

export default function TravelsPageComponent(props: {
  travels: TravelsInterface[] | null;
}) {
  const { travels } = props;

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

  const columns: ColumnsType<TravelsInterface> = [
    {
      title: "Company",
      dataIndex: "companies",
      key: "companies",
      render: (text) => <Typography.Text strong>{text.name}</Typography.Text>,
    },
    {
      title: "Passenger",
      dataIndex: "passenger",
      key: "passenger",
      render: (text) => (
        <section>
          <Typography.Text strong>{text.name}</Typography.Text>
          <br />
          <Typography.Text copyable type="secondary">
            {text.phone}
          </Typography.Text>
        </section>
      ),
    },
    {
      title: "From",
      dataIndex: "from",
      key: "from",
      render: (text) => (
        <section>
          <Typography.Text copyable strong>
            {text.name}
          </Typography.Text>
          <br />
          <Typography.Text type="secondary">Address of origin</Typography.Text>
        </section>
      ),
    },
    {
      title: "To",
      dataIndex: "to",
      key: "to",
      render: (text) => (
        <section>
          <Typography.Text copyable strong>
            {text.name}
          </Typography.Text>
          <br />
          <Typography.Text type="secondary">
            Destination address
          </Typography.Text>
        </section>
      ),
    },
    {
      title: "Date",
      dataIndex: "date",
      key: "date",
      render: (text) => (
        <section>
          <Typography.Text strong>
            {dayjs(text).format("DD MMM YYYY, HH:mm")}
          </Typography.Text>
          <br />
          <Typography.Text type="secondary">
            Start date and time
          </Typography.Text>
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
        }}
      >
        <Space>
          <Descriptions title="Travels" />
          <Button type="primary">New travel</Button>
        </Space>

        <section style={{ marginTop: 20 }}>
          <Table columns={columns} dataSource={travels ?? []} rowKey={"id"} />
        </section>
      </div>
    </section>
  );
}
