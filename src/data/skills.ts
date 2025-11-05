import { SiInkscape, SiSketchup, SiLumen, SiAutodesk, SiRhinoceros, SiAdobe } from "react-icons/si";
import { LucideIcon } from "lucide-react";

export interface Skill {
  name: string;
  level: number; // 0-100
  icon: LucideIcon | any;
}

export const skills: Skill[] = [
  { name: "Enscape", level: 87, icon: SiInkscape },
  { name: "SketchUp", level: 90, icon: SiSketchup },
  { name: "Lumion", level: 88, icon: SiLumen },
  { name: "AutoCAD", level: 91, icon: SiAutodesk }, // Autodesk makes AutoCAD
  { name: "Rhino", level: 84, icon: SiRhinoceros },
  { name: "Revit", level: 96, icon: SiAutodesk }, // Autodesk makes Revit
  { name: "Photoshop", level: 90, icon: SiAdobe } // Adobe makes Photoshop
];