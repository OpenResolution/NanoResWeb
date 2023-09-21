import React from "react";
import { Authenticator } from "@aws-amplify/ui-react";
import Navigation from "@/components/Navigation";
import Task from "@/components/panel/Task";
import Account from "@/components/panel/Account";
import File from "@/components/panel/File";
import Config from "@/components/panel/Config";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import { useState } from "react";

interface TabPanelProps {
  children?: React.ReactNode;
  index: number;
  value: number;
}

function TabPanel(props: TabPanelProps) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
      {...other}
    >
      {children}
    </div>
  );
}

function Panel(): JSX.Element {
  const [currentTab, setCurrentTab] = useState(0);

  const tabs = [
    {
      label: "Task",
      content: () => <Task />,
    },
    {
      label: "Config",
      content: () => <Config />,
    },
    {
      label: "File",
      content: () => <File />,
    },
    {
      label: "Account",
      content: () => <Account />,
    },
  ];

  const handleTabChange = (event: React.SyntheticEvent, newTab: number) => {
    setCurrentTab(newTab);
  };

  return (
    <div>
      <Navigation />
      <div className="mt-28">
        <Tabs
          value={currentTab}
          onChange={handleTabChange}
          centered
        >
          {tabs.map(({ label }) => (
            <Tab key={label} label={label} />
          ))}
        </Tabs>
        {tabs.map(({ content }, idx) => (
          <TabPanel key={idx} value={currentTab} index={idx}>
            {content()}
          </TabPanel>
        ))}
      </div>
    </div>
  );
}

function AuthenticatorWrappedPanel() {
  return (
    <Authenticator>
      <Panel />
    </Authenticator>
  );
}

export default AuthenticatorWrappedPanel;
