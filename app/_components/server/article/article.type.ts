import {
  Language,
  Platform,
  Environment,
  Nullable,
} from "@/shared/types/common";

interface VisibleCondition {
  langs?: Language[];
  platforms?: Platform[];
  environments?: Environment[];
}

interface Description {
  en?: string;
  ko?: string;
}

export interface ListItem {
  id: string;
  name: string;
  icon: string;
  url: Nullable<string>;
  description: Description;
  networks: string[];
  visibleCondition: Nullable<VisibleCondition>;
}
