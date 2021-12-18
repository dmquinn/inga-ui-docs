import React from "react";
import {
  Accordion,
  AccordionItem,
  AccordionItemHeading,
  AccordionItemButton,
  AccordionItemPanel,
} from "react-accessible-accordion";
import "react-accessible-accordion/dist/fancy-example.css";
import GridPlayground from "./components/GridPlayground";

const Layout = () => {
  return (
    <div className="mt-3" id="layout">
      <h1 className="border p-3 rounded">Layout</h1>
      <Accordion allowZeroExpanded>
        <AccordionItem>
          <AccordionItemHeading>
            <AccordionItemButton>Container </AccordionItemButton>
          </AccordionItemHeading>
          <AccordionItemPanel>
            <p>
              Unlike with other UI libraries, containers are not required when
              using our grid system. What they do however is provide a
              consistent padding for elements contained inside.
            </p>{" "}
            <p className="mt-2">
              There are three options for using containers as shown below:
            </p>
            <ul>
              <div className="container boxBorder rounded mb-1">.container</div>
              <code>width: 100%; padding - 20px</code>

              <div className="container-lg boxBorder rounded mb-1 mt-1">
                .container-lg
              </div>
              <code>width: 100%; padding: 60px</code>
              <div className="container-fluid boxBorder rounded mb-1 mt-1">
                .container-fluid
              </div>
              <code>width: 100%; padding: 1rem 0px;</code>
            </ul>
          </AccordionItemPanel>
        </AccordionItem>
        <AccordionItem>
          <AccordionItemHeading>
            <AccordionItemButton>Grid</AccordionItemButton>
          </AccordionItemHeading>
          <AccordionItemPanel>
            <p className="mb-1">
              Inga-UI's grid is build around the flexbox model and works in a
              recognisable pattern of containers, rows, and columns. It is based
              on a 12-column pattern, where column widths can be set by users
              for different screen widths, determined by prefixes{" "}
            </p>
            <code> -sm -md -lg and -xl</code>
            <p className="mt-1">A few examples are shown below:</p>
            <div className="row p-2 border">
              <div className="col-sm-1 bg-blue-darkest h-3 text-white">
                .col-sm-1
              </div>
              <div className="col-sm-1 bg-blue-darker h-3 text-white">
                .col-sm-1
              </div>
              <div className="col-sm-1 bg-blue-dark h-3 text-white">
                .col-sm-1
              </div>
              <div className="col-sm-1 bg-blue h-3 text-white">.col-sm-1</div>
              <div className="col-sm-1 bg-blue-light h-3 text-white">
                .col-sm-1
              </div>
              <div className="col-sm-1 bg-blue-lighter h-3 text-white">
                .col-sm-1
              </div>
              <div className="col-sm-1 bg-blue-lightest h-3 text-white">
                .col-sm-1
              </div>
              <div className="col-sm-1 bg-blue-lighter h-3 text-white">
                .col-sm-1
              </div>
              <div className="col-sm-1 bg-blue-light h-3 text-white">
                .col-sm-1
              </div>
              <div className="col-sm-1 bg-blue h-3 text-white">.col-sm-1</div>
              <div className="col-sm-1 bg-blue-dark h-3 text-white">
                .col-sm-1
              </div>
              <div className="col-sm-1 bg-blue-darker h-3 text-white">
                .col-sm-1
              </div>
              <p className="mt-1">
                A row in which each column takes up 1/12th of the space.
              </p>
            </div>
            <div className="row p-2 border">
              <div className="col-sm-6 bg-red-dark h-3 text-white">
                .col-sm-6
              </div>
              <div className="col-sm-3 bg-red-darker h-3 text-white">
                .col-sm-3
              </div>
              <div className="col-sm-3 bg-red-darkest text-white">
                .col-sm-3
              </div>

              <p className="mt-1">
                A row in which the first column takes up 1/2 of the space, and
                the other two take up 1/4 of the space
              </p>
            </div>
            <div className="row p-2 border">
              <div className="col-sm-12 col-md-6 col-lg-3 bg-orange-light h-7 text-white">
                <p className="text-white">.col-sm-12</p>
                <p className="text-white">.col-md-6</p>
                <p className="text-white">.col-lg-3</p>
              </div>
              <div className="col-sm-12 col-md-6 col-lg-3 bg-orange text-white">
                <p className="text-white">.col-sm-12</p>
                <p className="text-white">.col-md-6</p>
                <p className="text-white">.col-lg-3</p>{" "}
              </div>
              <div className="col-sm-12 col-md-6 col-lg-3 bg-orange-dark text-white">
                <p className="text-white">.col-sm-12</p>
                <p className="text-white">.col-md-6</p>
                <p className="text-white">.col-lg-3</p>{" "}
              </div>
              <div className="col-sm-12 col-md-6 col-lg-3 bg-orange-darker text-white">
                <p className="text-white">.col-sm-12</p>
                <p className="text-white">.col-md-6</p>
                <p className="text-white">.col-lg-3</p>{" "}
              </div>

              <p className="mt-1">
                Resize the screen to see responsiveness in action!
              </p>
            </div>
            <GridPlayground />
          </AccordionItemPanel>
        </AccordionItem>
        <AccordionItem>
          <AccordionItemHeading>
            <AccordionItemButton>Row</AccordionItemButton>
          </AccordionItemHeading>
          <AccordionItemPanel>
            <p>
              The row class serves as a container for columns, and ensures
              elements contained withis are displayed in flex. Width can be set
              using the prefix <code>w-</code> followed by a value representing
              a percentage of its container.
            </p>
            <div className="container w-100">
              <div className="row bg-blue-light w-100 p-1">.row w-100</div>
              <div className="row w-66 bg-blue-lighter p-1">.row w-66</div>
              <div className="row w-50 bg-blue-lightest p-1">.row w-50</div>
            </div>
          </AccordionItemPanel>
        </AccordionItem>
        <AccordionItem>
          <AccordionItemHeading>
            <AccordionItemButton>Column</AccordionItemButton>
          </AccordionItemHeading>
          <AccordionItemPanel>
            <p>
              In ad velit in ex nostrud dolore cupidatat consectetur ea in ut
              nostrud velit in irure cillum tempor laboris sed adipisicing eu
              esse duis nulla non.
            </p>
          </AccordionItemPanel>
        </AccordionItem>
      </Accordion>
    </div>
  );
};

export default Layout;
