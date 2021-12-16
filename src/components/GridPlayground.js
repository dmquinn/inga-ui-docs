import React, { createElement, useState, useEffect } from "react";

const GridPlayground = () => {
  const [values, setValues] = useState({
    numDivs: 6,
    colSm: 1,
    colMd: 4,
    colLg: 6,
  });
  const colors = [
    "#e57373",
    "#ba68c8",
    "#90caf9",
    "#4db6ac",
    "#dce775",
    "#ffb74d",
    "#b0bec5",
    "#81c784",
    "#e57373",
    "#ba68c8",
    "#90caf9",
    "#4db6ac",
  ];
  let addedElement;
  const elements = document.getElementsByClassName("newElement");
  function createDivs(values) {
    for (let i = 0; i < values.numDivs; i++) {
      const divvos = document.createElement("div");
      document.body.appendChild(divvos);
      const tainer = document.querySelector(".bg-grey-lightest");
      addedElement = tainer.appendChild(divvos);

      addedElement.classList.add(
        `col-sm-${values.colSm}`,
        `col-md-${values.colMd}`,
        `col-lg-${values.colLg}`,
        "h-1",
        "newElement"
      );
      for (let i = 0; i < elements.length; i++) {
        elements[i].style.backgroundColor = colors[i];
      }
    }
    return addedElement;
  }

  useEffect(() => {
    while (elements.length > 0) {
      elements[0].parentNode.removeChild(elements[0]);
    }

    createDivs(values);
  }, [values, elements]);
  return (
    <>
      <h3 className="mt-2 mb-2">
        Or play around with the generator to really get a feel for things!
      </h3>
      <div className="container bg-grey-light">
        <label htmlFor="numDivs">Number of Divs</label>
        <input
          type="number"
          id="numDivs"
          max="12"
          min="1"
          defaultValue={values.numDivs}
          className="formInput w-10 ml-1"
          onChange={(e) => setValues({ ...values, numDivs: e.target.value })}
        ></input>
        <div className="mt-1" />
        <label htmlFor="colSm">Small Screen Width</label>
        <input
          type="number"
          id="colSm"
          className="formInput w-5 ml-1"
          max="12"
          min="1"
          defaultValue={values.colSm}
          onChange={(e) => setValues({ ...values, colSm: e.target.value })}
        ></input>
        <label htmlFor="colMd" className="ml-1">
          Medium Screen Width
        </label>
        <input
          type="number"
          id="colMd"
          className="formInput w-5 ml-1"
          max="12"
          min="1"
          defaultValue={values.colMd}
          onChange={(e) => setValues({ ...values, colMd: e.target.value })}
        ></input>
        <label htmlFor="colLg" className="ml-1">
          Large Screen Width
        </label>
        <input
          type="number"
          id="colLg"
          className="formInput w-5 ml-1"
          max="12"
          min="1"
          defaultValue={values.colLg}
          onChange={(e) => setValues({ ...values, colLg: e.target.value })}
        ></input>
        <div className="row">
          <div className="borderBox"></div>
        </div>
      </div>
      <div className="row longRow bg-grey-lightest mt-2 mb-2" />
      <code className="boxBorder p-1 rounded">
        className="col-sm-{values.colSm} col-md-{values.colMd} col-lg-
        {values.colLg}"
      </code>
      ;
    </>
  );
};

export default GridPlayground;
