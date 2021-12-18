import React from "react";
import {
  Accordion,
  AccordionItem,
  AccordionItemHeading,
  AccordionItemButton,
  AccordionItemPanel,
} from "react-accessible-accordion";

const Sidebar = ({ isOpen }) => {
  return (
    <>
      {isOpen ? (
        <div className="sidebar mt-10 h-40">
          <Accordion className="mt-5" allowZeroExpanded>
            <AccordionItem>
              <AccordionItemHeading>
                <AccordionItemButton className="bg-white ml-2 p-1">
                  Layout{" "}
                </AccordionItemButton>
              </AccordionItemHeading>
              <AccordionItemPanel>
                <p className="text-4 px-2">Container</p>{" "}
                <p className="text-4 px-2">Grid</p>{" "}
                <p className="text-4 px-2">Row</p>{" "}
              </AccordionItemPanel>
            </AccordionItem>
            <AccordionItem>
              <AccordionItemHeading>
                <AccordionItemButton className="bg-white ml-2 p-1">
                  Positioning
                </AccordionItemButton>
              </AccordionItemHeading>
              <AccordionItemPanel>
                <p>Typography</p>
              </AccordionItemPanel>
            </AccordionItem>
            <AccordionItem>
              <AccordionItemHeading>
                <AccordionItemButton className="bg-white ml-2 p-1">
                  Typography
                </AccordionItemButton>
              </AccordionItemHeading>
              <AccordionItemPanel>
                <p className="text-4 ml-2 px-2">Fonts</p>{" "}
                <p className="text-4 ml-2 px-2">Sizing</p>{" "}
              </AccordionItemPanel>
            </AccordionItem>
            <AccordionItem>
              <AccordionItemHeading>
                <AccordionItemButton className="bg-white ml-2 p-1">
                  Colors
                </AccordionItemButton>
              </AccordionItemHeading>
              <AccordionItemPanel>
                <p>Typography</p>
              </AccordionItemPanel>
            </AccordionItem>
          </Accordion>
        </div>
      ) : (
        <div />
      )}
    </>
  );
};

export default Sidebar;
