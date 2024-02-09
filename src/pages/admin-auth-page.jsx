import React from "react";
import {
  Tabs,
  TabsHeader,
  TabsBody,
  Tab,
  TabPanel,
  Card,
  CardBody,
} from "@material-tailwind/react";

const AdminAuthPage = () => {
  const [activeTab, setActiveTab] = React.useState("html");
  const data = [
    {
      label: "Sign In",
      value: "signIn",
      component: () => {
        return (
          <>
            <div>I am SingIn</div>
          </>
        );
      },
    },
    {
      label: "Sign Up",
      value: "signUp",
      component: () => {
        return (
          <>
            <div>I am SingUp</div>
          </>
        );
      },
    },
  ];
  return (
    <div className="flex justify-center flex-col items-center">
      <Card className="bg-[#f8fafc] w-full md:w-1/2 lg:w-1/2">
        <CardBody>
          <Tabs value={activeTab}>
            <TabsHeader
              className="rounded-none border-b border-blue-gray-50 bg-transparent p-0"
              indicatorProps={{
                className:
                  "bg-transparent border-b-2 border-gray-900 shadow-none rounded-none",
              }}
            >
              {data.map(({ label, value }) => (
                <Tab
                  key={value}
                  value={value}
                  onClick={() => setActiveTab(value)}
                  className={activeTab === value ? "text-gray-900" : ""}
                >
                  {label}
                </Tab>
              ))}
            </TabsHeader>
            <TabsBody>
              {data.map(({ value, component }) => (
                <TabPanel key={value} value={value}>
                  {component()}
                </TabPanel>
              ))}
            </TabsBody>
          </Tabs>
        </CardBody>
      </Card>
    </div>
  );
};
export default AdminAuthPage;
