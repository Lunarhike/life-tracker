type Icon = React.HTMLAttributes<SVGElement>;

export interface NavbarItem {
  title?: string;
  href?: string;
}

export interface NavbarItemWithChildren extends NavbarItem {
  items?: NavbarItemWithChildren[];
}
