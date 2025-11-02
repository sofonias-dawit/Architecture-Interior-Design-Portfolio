export interface Project {
  id: number;
  title: string;
  description: string;
  category: "architecture" | "interior";
  image: string;
}

export const projects: Project[] = [
  {
    id: 1,
    title: "G+7 Mixed-Use Building",
    description: "A modern G+7 building combining commercial spaces and luxury apartments, designed with elegant façades, open terraces, and a vibrant urban character.",
    category: "architecture",
    image: "/src/assets/g7-mixed-use-building.jpg"
  },
  {
    id: 2,
    title: "Interior Design",
    description: "Elegant and modern interior featuring warm tones, soft lighting, and luxurious finishes. The open-plan layout blends comfort and sophistication, creating a serene living space ideal for relaxation and gatherings.",
    category: "interior",
    image: "/src/assets/Interior-Design.png"
  },
  {
    id: 3,
    title: "Arba Minch Bus Terminal",
    description: "An academic design project developed for educational purposes, the Arba Minch Bus Terminal integrates functionality and modern aesthetics to enhance passenger flow and urban connectivity. The design promotes comfort, accessibility, and efficient transportation service for the city.",
    category: "architecture",
    image: "/src/assets/arba-minch-bus-terminal.jpg"
  },
  {
    id: 4,
    title: "Bedroom Interior",
    description: "A sleek and cozy bedroom designed with modern elegance. Soft neutral tones, ambient lighting, and stylish décor create a calm and inviting atmosphere for relaxation and comfort.",
    category: "interior",
    image: "/src/assets/Bedroom-Interior.png"
  },
  {
    id: 5,
    title: "Mixed-Use-Building",
    description: "Modern G+2 development with commercial spaces on the ground floor and stylish residential units above, blending convenience and contemporary design.Designed with sleek architecture, ample parking, and natural lighting, this building creates a perfect blend of urban convenience and modern living.",
    category: "architecture",
    image: "/src/assets/Mixed-Use-Building.jpg"
  },
  {
    id: 6,
    title: "Apartment interior",
    description: "Sleek, open-plan apartment featuring a luxurious neutral palette. Defined by clean lines, a comfortable L-sofa, and stunning contemporary lighting (abstract ring and linear chandeliers). High-end, sophisticated urban living.",
    category: "interior",
    image: "/src/assets/Apartment-interior.jpg"
  }
];