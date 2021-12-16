import React from "react";
import GridPlayground from "./GridPlayground";

const GridInfo = () => {
  return (
    <div>
      <p className="mb-1">
        Inga-UI's grid is build around the flexbox model and works in a
        recognisable pattern of containers, rows, and columns. It is based on a
        12-column pattern, where column widths can be set by users for different
        screen widths, determined by prefixes{" "}
      </p>
      <code> -sm -md -lg and -xl</code>
      <p className="mt-1">A few examples are shown below:</p>
      <div className="row p-2 border">
        <div className="col-sm-1 bg-blue-darkest h-3 text-white">.col-sm-1</div>
        <div className="col-sm-1 bg-blue-darker h-3 text-white">.col-sm-1</div>
        <div className="col-sm-1 bg-blue-dark h-3 text-white">.col-sm-1</div>
        <div className="col-sm-1 bg-blue h-3 text-white">.col-sm-1</div>
        <div className="col-sm-1 bg-blue-light h-3 text-white">.col-sm-1</div>
        <div className="col-sm-1 bg-blue-lighter h-3 text-white">.col-sm-1</div>
        <div className="col-sm-1 bg-blue-lightest h-3 text-white">
          .col-sm-1
        </div>
        <div className="col-sm-1 bg-blue-lighter h-3 text-white">.col-sm-1</div>
        <div className="col-sm-1 bg-blue-light h-3 text-white">.col-sm-1</div>
        <div className="col-sm-1 bg-blue h-3 text-white">.col-sm-1</div>
        <div className="col-sm-1 bg-blue-dark h-3 text-white">.col-sm-1</div>
        <div className="col-sm-1 bg-blue-darker h-3 text-white">.col-sm-1</div>
        <p className="mt-1">
          A row in which each column takes up 1/12th of the space.
        </p>
      </div>
      <div className="row p-2 border">
        <div className="col-sm-6 bg-red-dark h-3 text-white">.col-sm-6</div>
        <div className="col-sm-3 bg-red-darker h-3 text-white">.col-sm-3</div>
        <div className="col-sm-3 bg-red-darkest text-white">.col-sm-3</div>

        <p className="mt-1">
          A row in which the first column takes up 1/2 of the space, and the
          other two take up 1/4 of the space
        </p>
      </div>
      <div className="row p-2 border">
        <div className="col-sm-12 col-md-6 col-lg-3 bg-orange-light h-7 text-white">
          <p className="text-white">.col-sm-12</p>
          <p className="text-white">.col-md-6</p>
          <p className="text-white">.col-sm-3</p>
        </div>
        <div className="col-sm-12 col-md-6 col-lg-3 bg-orange text-white">
          <p className="text-white">.col-sm-12</p>
          <p className="text-white">.col-md-6</p>
          <p className="text-white">.col-sm-3</p>{" "}
        </div>
        <div className="col-sm-12 col-md-6 col-lg-3 bg-orange-dark text-white">
          <p className="text-white">.col-sm-12</p>
          <p className="text-white">.col-md-6</p>
          <p className="text-white">.col-sm-3</p>{" "}
        </div>
        <div className="col-sm-12 col-md-6 col-lg-3 bg-orange-darker text-white">
          <p className="text-white">.col-sm-12</p>
          <p className="text-white">.col-md-6</p>
          <p className="text-white">.col-sm-3</p>{" "}
        </div>

        <p className="mt-1">
          Resize the screen to see responsiveness in action!
        </p>
      </div>
      <GridPlayground />
    </div>
  );
};

export default GridInfo;
