import UseCallbackDemo from "../../containers/reactHook/useCallback";
import UseContextDemo from "../../containers/reactHook/useContext";
import UseEffectDemo from "../../containers/reactHook/useEffect";
import UseMemoDemo from "../../containers/reactHook/useMemo";
import UseRefDemo from "../../containers/reactHook/useRef";
import UseStateDemo from "../../containers/reactHook/useState";

type routerProps = {
  title: string;
  path: string;
  element: React.ReactNode;
};

export const routerListData: Array<routerProps> = [
  { title: "useState", path: "/useState", element: <UseStateDemo /> },
  { title: "useEffect", path: "/useEffect", element: <UseEffectDemo /> },
  { title: "useRef", path: "/useRef", element: <UseRefDemo /> },
  { title: "useMemo", path: "/useMemo", element: <UseMemoDemo /> },
  { title: "useContext", path: "/useContext", element: <UseContextDemo /> },
  { title: "useCallback", path: "/useCallback", element: <UseCallbackDemo /> },
];
