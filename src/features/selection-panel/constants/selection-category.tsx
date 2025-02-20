import { TitleInput } from "@features/cv-components";
import { BookOpen, Bot, SquareTerminal } from "lucide-react";

export const SELECTION_CATEGORY = [
  {
    title: "Headings",
    icon: SquareTerminal,
    isActive: true,
    items: [
      {
        title: "H1",
        component: () => <TitleInput variant="h1" />,
      },
      {
        title: "H2",
        component: () => <TitleInput variant="h2" />,
      },
      {
        title: "H3",
        component: () => <TitleInput variant="h3" />,
      },
      {
        title: "H4",
        component: () => <TitleInput variant="h4" />,
      },
      {
        title: "p",
        component: () => <TitleInput variant="p" />,
      },
      {
        title: "blockquote",
        component: () => <TitleInput variant="blockquote" />,
      },
      {
        title: "Lead",
        component: () => <TitleInput variant="lead" />,
      },
      {
        title: "Large",
        component: () => <TitleInput variant="large" />,
      },
      {
        title: "Small",
        component: () => <TitleInput variant="small" />,
      },
      {
        title: "Muted",
        component: () => <TitleInput variant="muted" />,
      },
    ],
  },
  {
    title: "image",
    // url: "#",
    icon: Bot,
    items: [
      {
        title: "Genesis",
        component: () => <TitleInput />,
      },
      {
        title: "Explorer",
        component: () => <TitleInput />,
      },
      {
        title: "Quantum",
        component: () => <TitleInput />,
      },
    ],
  },
  {
    title: "list",
    // url: "#",
    icon: BookOpen,
    items: [
      {
        title: "Introduction",
        component: () => <TitleInput />,
      },
      {
        title: "Get Started",
        component: () => <TitleInput />,
      },
      {
        title: "Tutorials",
        component: () => <TitleInput />,
      },
      {
        title: "Changelog",
        component: () => <TitleInput />,
      },
    ],
  },
];
