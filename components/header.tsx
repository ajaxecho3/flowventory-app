import { Separator } from "@radix-ui/react-separator";
import React, { Fragment } from "react";
import {
  Breadcrumb,
  BreadcrumbList,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbSeparator,
} from "./ui/breadcrumb";
import { SidebarTrigger } from "./ui/sidebar";

type Props = {
  linkTrails: { name: string; href: string }[];
};

function Header({ linkTrails }: Props) {
  return (
    <header className="flex h-16 shrink-0 items-center gap-2 transition-[width,height] ease-linear group-has-[[data-collapsible=icon]]/sidebar-wrapper:h-12">
      <div className="flex items-center gap-2 px-4">
        <SidebarTrigger className="-ml-1" />
        <Separator orientation="vertical" className="mr-2 h-4" />
        <Breadcrumb>
          <BreadcrumbList>
            <BreadcrumbItem className="hidden md:block">
              <BreadcrumbLink href="/">Home</BreadcrumbLink>
            </BreadcrumbItem>
            {linkTrails.length > 0 && <BreadcrumbSeparator />}
            {linkTrails.map((trail, index) => (
              <Fragment key={index}>
                <BreadcrumbItem>
                  <BreadcrumbLink href={trail.href}>
                    {trail.name}
                  </BreadcrumbLink>
                </BreadcrumbItem>
                {index !== linkTrails.length - 1 && <BreadcrumbSeparator />}
              </Fragment>
            ))}
          </BreadcrumbList>
        </Breadcrumb>
      </div>
    </header>
  );
}

export default Header;
