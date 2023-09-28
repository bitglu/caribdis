"use client";

import React, { useState, Suspense, useEffect } from "react";
import { ConfigProvider, Layout, Menu } from "antd";
import type { MenuProps } from "antd";

import esEs from "antd/locale/es_ES";
import TokenDesign from "@/styles/theme.json";
import Loading from "./loading";
import { useRouter } from "next/navigation";
import {
  CalendarOutlined,
  CarOutlined,
  DollarOutlined,
  ProfileOutlined,
  ShopOutlined,
  UserOutlined,
} from "@ant-design/icons";

const { Header, Content, Footer } = Layout;

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const router = useRouter();

  const menus: MenuProps["items"] = [
    {
      key: "/dashboard/travels",
      label: "Viajes",
      icon: <ProfileOutlined />,
    },
    {
      key: "/dashboard/calendar",
      label: "Calendario",
      icon: <CalendarOutlined />,
    },
    {
      key: "/dashboard/finance",
      label: "Finanzas",
      icon: <DollarOutlined />,
    },
    {
      key: "/dashboard/companies",
      label: "Compañias",
      icon: <ShopOutlined />,
    },
    {
      key: "/dashboard/drivers",
      label: "Conductores",
      icon: <UserOutlined />,
    },
    {
      key: "/dashboard/vehicles",
      label: "Vehiculos",
      icon: <CarOutlined />,
    },
  ];

  return (
    <html lang="es">
      <head />
      <body>
        <ConfigProvider
          locale={esEs}
          theme={{
            token: TokenDesign.token,
          }}
        >
          <Layout>
            <Header
              style={{
                position: "sticky",
                top: 0,
                zIndex: 1,
                width: "100%",
                display: "flex",
                alignItems: "center",
              }}
            >
              <div className="demo-logo" />
              <Menu
                theme="dark"
                mode="horizontal"
                items={menus}
                style={{ width: "100%" }}
                defaultSelectedKeys={["/dashboard/travels"]}
                onClick={(e) => {
                  router.push(e.key);
                }}
              />
            </Header>
            <Content className="site-layout" style={{ padding: "0 50px" }}>
              <Suspense fallback={<Loading />}>{children}</Suspense>
            </Content>
            <Footer style={{ textAlign: "center" }}>
              Bitglu ©2023 Created by Bitglu
            </Footer>
          </Layout>
        </ConfigProvider>
      </body>
    </html>
  );
}
