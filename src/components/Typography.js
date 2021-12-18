import React from "react";
import {
  Accordion,
  AccordionItem,
  AccordionItemHeading,
  AccordionItemButton,
  AccordionItemPanel,
} from "react-accessible-accordion";
import "react-accessible-accordion/dist/fancy-example.css";

const Typography = () => {
  return (
    <div className="mt-3" id="layout">
      <h1 className="border p-3 rounded">Typography</h1>
      <Accordion allowZeroExpanded>
        <AccordionItem>
          <AccordionItemHeading>
            <AccordionItemButton>Fonts</AccordionItemButton>
          </AccordionItemHeading>
          <AccordionItemPanel>
            <p>
              Inga-UI employs Readex Pro as its default font (the same font used
              on this page but with an unaltered letter spacing!) as shown
              below:
            </p>
            <h3 className="p-1 mt-1 mb-1 textNormal boxBorder rounded">
              The Quick Brown Fox Jumps Over The Lazy Dog
            </h3>
            <p className="">
              If desired, users can also choose to use Raleway as a font, by
              giving the class name <code>.rw</code> to any element. This can be
              seen below:
            </p>
            <h3 className="rw p-1 mt-1 mb-1 textNormal boxBorder rounded">
              The Quick Brown Fox Jumps Over The Lazy Dog
            </h3>
          </AccordionItemPanel>
        </AccordionItem>
        <AccordionItem>
          <AccordionItemHeading>
            <AccordionItemButton>Sizing</AccordionItemButton>
          </AccordionItemHeading>
          <AccordionItemPanel>
            <p>
              Font sizes can be determined by adding the prefix{" "}
              <code>text-</code> followed by a number from one to 15, which
              denotes the font weight in px times 3. For example:
            </p>
            <ul className="container bg-grey-light">
              <li className="text-3">.Text-3 - 9px</li>
              <li className="text-5 p-1">.Text-5 - 15px</li>
              <li className="text-8 p-2">.Text-8 - 24px</li>
              <li className="text-11 p-3">.Text-11 - 33px</li>
              <li className="text-15 p-4">.Text-15 - 45px</li>
            </ul>
            <h3 className="mt-3">
              Inga-UI also has the useful utility of responsive text - using the
              same prefixes and breakpoints as our column system. The example
              below shows how to make the text incrementally smaller on smaller
              screens:
            </h3>
            <div className="container">
              <p className="text-sm-9 text-md-11 text-lg-15 boxBorder p-1 rounded">
                text-sm-5 text-md-7 text-lg-9
              </p>
            </div>
            <h3 className="mt-1">
              Adjust the screen size to see how the responsive text looks at
              different sizes!
            </h3>
          </AccordionItemPanel>
        </AccordionItem>
      </Accordion>
    </div>
  );
};

export default Typography;
