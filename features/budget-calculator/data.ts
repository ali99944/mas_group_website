export interface Option {
  name: string;
  price: number; // Price in SAR
  unit: 'm²' | 'item';
  type: 'radio' | 'quantity';
}

export interface Category {
  name: string;
  options: Option[];
}

export interface RoomConfiguration {
  name: string;
  categories: Category[];
}

export interface RoomDimensions {
  [roomName: string]: number;
}

export interface Selections {
  [roomName: string]: {
    [categoryName: string]: {
      option: Option;
      quantity: number;
    };
  };
}

// This is the central configuration for the entire calculator. It has been significantly expanded.
export const budgetData: RoomConfiguration[] = [
  {
    name: "Living Room",
    categories: [
      { name: "Flooring", options: [ { name: "Ceramic", price: 120, unit: 'm²', type: 'radio' }, { name: "Porcelain", price: 180, unit: 'm²', type: 'radio' }, { name: "Parquet", price: 250, unit: 'm²', type: 'radio' } ] },
      { name: "Walls", options: [ { name: "Standard Paint", price: 40, unit: 'm²', type: 'radio' }, { name: "Premium Paint", price: 60, unit: 'm²', type: 'radio' }, { name: "Wallpaper", price: 90, unit: 'm²', type: 'radio' } ] },
      { name: "Ceiling", options: [ { name: "Simple Finish", price: 70, unit: 'm²', type: 'radio' }, { name: "Plasterboard", price: 110, unit: 'm²', type: 'radio' } ] },
      { name: "Doors", options: [ { name: "Standard Door", price: 800, unit: 'item', type: 'quantity' } ] },
      { name: "Electrical Points", options: [ { name: "Sockets & Switches", price: 90, unit: 'item', type: 'quantity' } ] },
    ]
  },
  {
    name: "Bedroom",
    categories: [
        { name: "Flooring", options: [ { name: "Ceramic", price: 120, unit: 'm²', type: 'radio' }, { name: "Porcelain", price: 180, unit: 'm²', type: 'radio' }, { name: "Parquet", price: 250, unit: 'm²', type: 'radio' } ] },
        { name: "Walls", options: [ { name: "Standard Paint", price: 40, unit: 'm²', type: 'radio' }, { name: "Premium Paint", price: 60, unit: 'm²', type: 'radio' }, { name: "Wallpaper", price: 90, unit: 'm²', type: 'radio' } ] },
        { name: "Ceiling", options: [ { name: "Simple Finish", price: 70, unit: 'm²', type: 'radio' }, { name: "Plasterboard", price: 110, unit: 'm²', type: 'radio' } ] },
        { name: "Doors", options: [ { name: "Standard Door", price: 800, unit: 'item', type: 'quantity' }, { name: "Wardrobe/Closet", price: 1500, unit: 'item', type: 'quantity' } ] },
        { name: "Electrical Points", options: [ { name: "Sockets & Switches", price: 90, unit: 'item', type: 'quantity' } ] },
    ]
  },
  {
    name: "Reception / Majlis",
    categories: [
        { name: "Flooring", options: [ { name: "Premium Porcelain", price: 250, unit: 'm²', type: 'radio' }, { name: "Marble", price: 600, unit: 'm²', type: 'radio' } ] },
        { name: "Walls", options: [ { name: "Premium Paint", price: 60, unit: 'm²', type: 'radio' }, { name: "Decorative Stone", price: 350, unit: 'm²', type: 'radio' }, { name: "Luxury Wallpaper", price: 150, unit: 'm²', type: 'radio' } ] },
        { name: "Ceiling", options: [ { name: "Detailed Plasterboard", price: 180, unit: 'm²', type: 'radio' }, { name: "Ornate Gypsum Work", price: 300, unit: 'm²', type: 'radio' } ] },
        { name: "Lighting", options: [ { name: "Main Chandelier Point", price: 400, unit: 'item', type: 'quantity' }, { name: "Spotlight Point", price: 120, unit: 'item', type: 'quantity' } ] },
    ]
  },
  {
    name: "Dining Room",
    categories: [
        { name: "Flooring", options: [ { name: "Porcelain", price: 180, unit: 'm²', type: 'radio' }, { name: "Marble", price: 600, unit: 'm²', type: 'radio' }, { name: "Parquet", price: 250, unit: 'm²', type: 'radio' } ] },
        { name: "Walls", options: [ { name: "Standard Paint", price: 40, unit: 'm²', type: 'radio' }, { name: "Wallpaper Accent Wall", price: 110, unit: 'm²', type: 'radio' } ] },
        { name: "Ceiling", options: [ { name: "Simple Plasterboard", price: 110, unit: 'm²', type: 'radio' } ] },
        { name: "Lighting", options: [ { name: "Main Chandelier Point", price: 400, unit: 'item', type: 'quantity' } ] },
    ]
  },
  {
    name: "Kitchen",
    categories: [
      { name: "Flooring", options: [ { name: "Water-Resistant Ceramic", price: 150, unit: 'm²', type: 'radio' }, { name: "Water-Resistant Porcelain", price: 220, unit: 'm²', type: 'radio' } ] },
      { name: "Wall Tiles", options: [ { name: "Standard Ceramic Tile", price: 100, unit: 'm²', type: 'radio' }, { name: "Marble Cladding", price: 400, unit: 'm²', type: 'radio' } ] },
      { name: "Kitchen Units", options: [ { name: "Standard Wood Cabinets", price: 1200, unit: 'm²', type: 'radio' }, { name: "Premium Cabinets + Corian Top", price: 2800, unit: 'm²', type: 'radio' } ] },
      { name: "Plumbing Points", options: [ { name: "Sink & Drain", price: 500, unit: 'item', type: 'quantity' }, { name: "Washing Machine Point", price: 400, unit: 'item', type: 'quantity' } ] },
      { name: "Electrical Points", options: [ { name: "Major Appliances (Stove, Fridge)", price: 200, unit: 'item', type: 'quantity' } ] },
    ]
  },
  {
    name: "Bathroom",
    categories: [
      { name: "Flooring & Walls", options: [ { name: "Ceramic Tile", price: 130, unit: 'm²', type: 'radio' }, { name: "Porcelain Tile", price: 200, unit: 'm²', type: 'radio' } ] },
      { name: "Ceiling", options: [ { name: "Moisture-Resistant Plasterboard", price: 130, unit: 'm²', type: 'radio' }, { name: "PVC Ceiling", price: 160, unit: 'm²', type: 'radio' } ] },
      { name: "Sanitary Fixtures", options: [ { name: "Standard Set (Toilet, Sink, Shower)", price: 3000, unit: 'item', type: 'quantity' }, { name: "Premium Set (Incl. Bathtub)", price: 6500, unit: 'item', type: 'quantity' } ] },
      { name: "Plumbing Points", options: [ { name: "Water Supply & Drains", price: 600, unit: 'item', type: 'quantity' } ] },
    ]
  },
  {
    name: "Guest Bathroom",
    categories: [
        { name: "Flooring & Walls", options: [ { name: "Ceramic Tile", price: 130, unit: 'm²', type: 'radio' }, { name: "Porcelain Tile", price: 200, unit: 'm²', type: 'radio' } ] },
        { name: "Sanitary Fixtures", options: [ { name: "Compact Set (Toilet, Sink)", price: 2000, unit: 'item', type: 'quantity' } ] },
    ]
  },
  {
    name: "Corridors",
    categories: [
        { name: "Flooring", options: [ { name: "Ceramic", price: 120, unit: 'm²', type: 'radio' }, { name: "Porcelain", price: 180, unit: 'm²', type: 'radio' } ] },
        { name: "Walls", options: [ { name: "Standard Paint", price: 40, unit: 'm²', type: 'radio' } ] },
        { name: "Lighting", options: [ { name: "Spotlight Point", price: 120, unit: 'item', type: 'quantity' } ] },
    ]
  },
  {
    name: "Balcony",
    categories: [
        { name: "Flooring", options: [ { name: "Outdoor Ceramic", price: 140, unit: 'm²', type: 'radio' } ] },
        { name: "Lighting", options: [ { name: "Simple Light Point", price: 100, unit: 'item', type: 'quantity' } ] },
    ]
  },
];