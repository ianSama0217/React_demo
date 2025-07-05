type routerProps = {
  title: string;
  path: string;
  element: React.ReactNode;
};

export const routerListData: Array<routerProps> = [
  { title: "測試1", path: "/test1", element: undefined },
  { title: "測試2", path: "/test2", element: undefined },
  { title: "測試3", path: "/test3", element: undefined },
];
