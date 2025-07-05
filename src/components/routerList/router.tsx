import UseStateDemo from "../../containers/reactHook/useState";

type routerProps = {
  title: string;
  path: string;
  element: React.ReactNode;
};

export const routerListData: Array<routerProps> = [
  { title: "useState", path: "/useState", element: <UseStateDemo /> },
  { title: "測試2", path: "/test2", element: undefined },
  { title: "測試3", path: "/test3", element: undefined },
];
