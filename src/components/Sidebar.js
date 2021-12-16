import React from "react";

const Sidebar = ({ isOpen }) => {
  return (
    <>
      {isOpen ? (
        <div className="sidebar mt-10 h-40">
          <ul className="p-4">
            <a href="#layout">
              <li>Layout</li>
            </a>
            <a href="/typography">
              <li className="pt-2">Typography</li>
            </a>
            <a href="/colors">
              <li className="pt-2">Colors</li>
            </a>
            <a href="presets">
              <li className="pt-2">Presets</li>
            </a>
          </ul>
        </div>
      ) : (
        <div />
      )}
    </>
  );
};

export default Sidebar;
