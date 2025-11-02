import { Box, Package, Lightbulb, PenTool, Hexagon, Building2, Image } from "lucide-react";
import { LucideIcon } from "lucide-react";

export interface Skill {
  name: string;
  level: number; // 0-100
  icon: LucideIcon;
}

export const skills: Skill[] = [
  { name: "Enscape", level: 85, icon: Box },
  { name: "SketchUp", level: 90, icon: Package },
  { name: "Lumion", level: 80, icon: Lightbulb },
  { name: "AutoCAD", level: 88, icon: PenTool },
  { name: "Rhino", level: 75, icon: Hexagon },
  { name: "Revit", level: 82, icon: Building2 },
  { name: "Photoshop", level: 85, icon: Image }
];
