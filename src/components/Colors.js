import React from "react";
import {
  Accordion,
  AccordionItem,
  AccordionItemHeading,
  AccordionItemButton,
  AccordionItemPanel,
} from "react-accessible-accordion";
import "react-accessible-accordion/dist/fancy-example.css";

const Colors = () => {
  return (
    <div className="mt-3" id="colors">
      <h1 className="border p-3 rounded">Colors</h1>
      <p>
        Colors in Inga-UI are very simple to use, and the syntax is very human
        and recognisable.
      </p>
      <p className="mt-1">
        To set the background color of an element, use the prefix{" "}
        <code>bg-</code> followed by a color name. For example:
      </p>
      <div className="container">
        <div className="row border mb-3">
          <div className="p-1 w-10 bg-blue text-white mt-2">bg-blue</div>
          <div className="p-1 w-10 bg-red text-white mt-2">bg-red</div>
          <div className="p-1 w-10 bg-orange text-white mt-2">bg-orange</div>
        </div>
      </div>
      <p>
        In the case of text color, use the prefix <code>text-</code> followed by
        a color name. For example:
      </p>
      <div className="container">
        <div className="row border">
          <div className="p-1 w-10 text-pink mt-2">text-pink</div>
          <div className="p-1 w-10 text-green mt-2">text-green</div>
          <div className="p-1 w-10 text-purple mt-2">text-purple</div>
        </div>
      </div>
      <p className="mb-1 mt-3">
        For color grading, Inga-UI employes six classes used as a suffix for
        color classes:
      </p>{" "}
      <code>-light lighter lightest dark darker darkest</code>
      <p className="mb-1 mt-3">An example is shown below:</p>{" "}
      <div className="container">
        <div className="row border mb-3">
          <div className="p-1 bg-blue text-white mt-2">bg-blue</div>
          <div className="p-1 bg-blue-light text-white mt-2">bg-blue-light</div>
          <div className="p-1 bg-blue-lighter text-white mt-2">
            bg-blue-lighter
          </div>
          <div className="p-1 bg-blue-lightest text-white mt-2">
            bg-blue-lightest
          </div>
        </div>
        <div className="row border mb-3">
          <div className="p-1 bg-pink text-white mt-2">bg-pink</div>
          <div className="p-1 bg-pink-dark text-white mt-2">bg-pink-dark</div>
          <div className="p-1 bg-pink-darker text-white mt-2">
            bg-pink-darker
          </div>
          <div className="p-1 bg-pink-darkest text-white mt-2">
            bg-pink-darkest
          </div>
        </div>
      </div>
    </div>
  );
};

export default Colors;
