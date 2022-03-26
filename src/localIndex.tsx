import * as React from "react";
import { render } from "react-dom";
import "antd/dist/antd.css";
import Preview from "./app/ui";


const rootEl = document.getElementById("root");

render(<Preview/>, rootEl);
