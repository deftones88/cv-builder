import Images from "@shared/assets/images";
import { IconType } from "@shared/types";
import {
  AppWindowIcon,
  AtSignIcon,
  AudioWaveformIcon,
  EyeIcon,
  GlobeIcon,
  HomeIcon,
  InboxIcon,
  MailIcon,
  PhoneIcon,
  SendIcon,
  SignalIcon,
} from "lucide-react";

export const FIELD_TYPES = {
  TEXT: "text",
  SELECT: "select",
  RADIO: "radio",
  UPLOADER: "uploader",
  CHECKBOX: "checkbox",
  ARRAY: "array",
  ICON_ARRAY: "icon-array",
} as const;

export const FORM_ICON_LIST: { icon: IconType; value: string }[] = [
  { icon: HomeIcon, value: "home" },
  { icon: PhoneIcon, value: "cell" },
  { icon: MailIcon, value: "email" },
  { icon: AtSignIcon, value: "atSign" },
  { icon: GlobeIcon, value: "web" },
  { icon: Images.githubLogo, value: "github" },
  { icon: Images.linkedInLogo, value: "linkedIn" },
  { icon: Images.discordLogo, value: "discord" },
  { icon: Images.mediumLogo, value: "medium" },
  { icon: SendIcon, value: "send" },
  { icon: InboxIcon, value: "inbox" },
  { icon: AudioWaveformIcon, value: "audioWave" },
  { icon: SignalIcon, value: "signal" },
  { icon: EyeIcon, value: "eye" },
  { icon: AppWindowIcon, value: "appWindow" },
];
