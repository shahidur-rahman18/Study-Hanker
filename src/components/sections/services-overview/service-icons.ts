import {
  UserSearch,
  GraduationCap,
  Globe,
  FileText,
  MessageSquare,
  Plane,
  Home,
  Building,
  type LucideIcon,
} from "lucide-react";
import type { Service } from "@/types";

const iconMap: Record<string, LucideIcon> = {
  UserSearch,
  Building: Building,
  Building2: Building,
  Globe,
  FileText,
  MessageSquare,
  Passport: FileText,
  Plane,
  Home,
};

export function resolveServiceIcon(name: string): LucideIcon {
  return iconMap[name] ?? GraduationCap;
}

export function getServiceIcon(service: Service): LucideIcon {
  return resolveServiceIcon(service.icon);
}