import React, { useState } from 'react';
import { GoHome } from "react-icons/go";
import { IoPrintSharp } from "react-icons/io5";
import { IoDocumentTextSharp } from "react-icons/io5";
import { IoIosNotifications } from "react-icons/io";
import { IoMdMore } from "react-icons/io";

function MobileNav() {
  const [activeTab, setActiveTab] = useState("home");

  const navItems = [
    { key: "home", icon: <GoHome />, label: "Home" },
    { key: "document", icon: <IoDocumentTextSharp />, label: "Documents" },
    { key: "print", icon: <IoPrintSharp />, label: "Print" },
    { key: "notification", icon: <IoIosNotifications />, label: "Notifications" },
    { key: "more", icon: <IoMdMore />, label: "More" },
  ];

  return (
    <div
      style={{
        position: "fixed",
        bottom: 0,
        left: 0,
        width: "100%",
        backgroundColor: "rgba(0, 0, 0, 0.87)",
        height: "60px",
        display: "flex",
        justifyContent: "space-around",
        alignItems: "center",
        zIndex: 1000,
      }}
    >
      {navItems.map((item) => {
        const isActive = item.key === activeTab;
        return (
          <div
            key={item.key}
            onClick={() => setActiveTab(item.key)}
            style={{
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              fontSize: "12px",
              color: isActive ? "white" : "gray",
              transition: "color 0.2s",
            }}
          >
            <div style={{ fontSize: "26px" }}>{item.icon}</div>
            <p style={{ margin: 0 }}>{item.label}</p>
          </div>
        );
      })}
    </div>
  );
}

export default MobileNav;
