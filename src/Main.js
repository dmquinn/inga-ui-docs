import React from "react";
import Colors from "./components/Colors";
import Typography from "./components/Typography";
import Layout from "./Layout";

const Main = () => {
  return (
    <div className="h-50 w-80 p-3 mt-10">
      <div className="container rounded-lg">
        <h2>Welcome to the Inga-UI Documentation Page!</h2>
        <h3 className="mt-3 p-3 rounded border">
          Inga-UI is a UI library based on intuitive class names and minimalist
          design. It comes loaded with full control over layout, positioning, a
          tasteful color scheme, plus shadow, button, list-style and
          glassmorphism element presets!{" "}
        </h3>

        <h1 className="mt-4">Getting Started</h1>
        <h4 className="mt-4">
          To get set up, you can install Inga-UI as a package from npm:{" "}
        </h4>

        <div className="mt-3" />
        <code className="text-white bg-black p-1 px-3 rounded">
          {"npm install inga-ui"}
        </code>
        <p className="mt-3 mb-3">or...</p>
        <code className="text-white bg-black p-1 px-3 rounded">
          {"yarn add inga-ui"}
        </code>
        <h4 className="mt-3 mb-3">
          And import to the head of your global/main css file like so:
        </h4>
        <code className="text-white bg-black p-1 px-3 rounded">
          {`@import "~inga-ui/index.css";`}
        </code>
        <h4 className="mt-5 mb-3">
          Or else copy the CDN into the body section of your index.html:
        </h4>
        <code className="text-white bg-black p-1 px-3 rounded">
          {`<script src="https://unpkg.com/selector-library"></script>"
`}
        </code>

        <div className="mb-5" />
      </div>
      <Layout />
      <Typography />
      <Colors />
    </div>
  );
};
<script src="https://unpkg.com/selector-library"></script>;

export default Main;
