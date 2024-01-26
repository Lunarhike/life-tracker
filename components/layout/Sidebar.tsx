"use client";

import { Input } from "@/components/ui/input";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

export function SidebarNav() {
  const platforms = ["Xbox 360", "Xbox One", "Xbox Series X"];
  const collections = ["Bethesda Softworks", "EA Play", "Xbox Game Studios"];
  const availabilities = ["ComingSoon", "LeavingSoon", "RecentlyAdded"];

  return (
    <div className="w-full pr-8">
      <Accordion type="single" collapsible>
        <AccordionItem value="item-1">
          <AccordionTrigger>
            <div>
              User Score <span className="text-muted-foreground">(0-10)</span>
            </div>
          </AccordionTrigger>
          <AccordionContent>
            <div className="flex justify-between items-center p-[1px]">
              <Input
                onKeyDown={(e) =>
                  (e.keyCode === 69 ||
                    e.keyCode === 187 ||
                    e.keyCode === 189) &&
                  e.preventDefault()
                }
                type="number"
                placeholder="from"
                aria-label="Min User Score"
                min="0"
                max="10"
              />
              <span className="mx-2">{`-`}</span>
              <Input
                onKeyDown={(e) =>
                  (e.keyCode === 69 ||
                    e.keyCode === 187 ||
                    e.keyCode === 189) &&
                  e.preventDefault()
                }
                type="number"
                placeholder="to"
                min="0"
                max="10"
                aria-label="Max User Score"
              />
            </div>
          </AccordionContent>
        </AccordionItem>
      </Accordion>
      <Accordion type="single" collapsible>
        <AccordionItem value="item-1">
          <AccordionTrigger>
            <div>
              Critic Score{" "}
              <span className="text-muted-foreground">(0-100)</span>
            </div>
          </AccordionTrigger>
          <AccordionContent>
            <div className="flex justify-between items-center p-[1px]">
              <Input
                onKeyDown={(e) =>
                  (e.keyCode === 69 ||
                    e.keyCode === 187 ||
                    e.keyCode === 188 ||
                    e.keyCode === 190 ||
                    e.keyCode === 189) &&
                  e.preventDefault()
                }
                type="number"
                placeholder="from"
                min="0"
                max="100"
                aria-label="Min Critic Score"
              />
              <span className="mx-2">{`-`}</span>
              <Input
                onKeyDown={(e) =>
                  (e.keyCode === 69 ||
                    e.keyCode === 187 ||
                    e.keyCode === 188 ||
                    e.keyCode === 190 ||
                    e.keyCode === 189) &&
                  e.preventDefault()
                }
                type="number"
                placeholder="from"
                min="0"
                max="100"
                aria-label="Max Critic Score"
              />
            </div>
          </AccordionContent>
        </AccordionItem>
      </Accordion>
      <Accordion type="single" collapsible>
        <AccordionItem value="item-1">
          <AccordionTrigger>Release Year</AccordionTrigger>
          <AccordionContent>
            <div className="flex justify-between items-center p-[1px]">
              <Input
                onKeyDown={(e) =>
                  (e.keyCode === 69 ||
                    e.keyCode === 187 ||
                    e.keyCode === 188 ||
                    e.keyCode === 190 ||
                    e.keyCode === 189) &&
                  e.preventDefault()
                }
                id="minReleaseYear"
                type="number"
                min="1993"
                max="2100"
                placeholder="from"
                aria-label="Min Release Year"
              />
              <span className="mx-2">{`-`}</span>
              <Input
                onKeyDown={(e) =>
                  (e.keyCode === 69 ||
                    e.keyCode === 187 ||
                    e.keyCode === 188 ||
                    e.keyCode === 190 ||
                    e.keyCode === 189) &&
                  e.preventDefault()
                }
                type="number"
                placeholder="to"
                min="1993"
                max="2100"
                aria-label="Max Release Year"
              />
            </div>
          </AccordionContent>
        </AccordionItem>
      </Accordion>
    </div>
  );
}
