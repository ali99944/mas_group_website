"use client";

import { useState } from "react";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { RoomConfiguration, RoomDimensions, Selections } from "../data";
import { ChevronLeft, ChevronRight } from "lucide-react";

interface Props {
  data: RoomConfiguration[];
  roomDimensions: RoomDimensions;
  setRoomDimensions: React.Dispatch<React.SetStateAction<RoomDimensions>>;
  selections: Selections;
  setSelections: React.Dispatch<React.SetStateAction<Selections>>;
}

export default function CalculatorForm({ data, roomDimensions, setRoomDimensions, selections, setSelections }: Props) {
  const [step, setStep] = useState(0); // 0 is for dimensions, 1+ for rooms

  const handleDimensionChange = (roomName: string, value: string) => {
    setRoomDimensions(prev => ({ ...prev, [roomName]: parseFloat(value) || 0 }));
  };

  const handleSelectionChange = (roomName: string, categoryName: string, option: any, quantity: number = 1) => {
    setSelections(prev => ({
      ...prev,
      [roomName]: {
        ...prev[roomName],
        [categoryName]: { option, quantity },
      },
    }));
  };

  const totalSteps = data.length + 1; // +1 for the dimensions step
  const currentRoom = data[step - 1];

  return (
    <div className="bg-container p-8 border border-border">
      {/* Step 0: Room Dimensions */}
      {step === 0 && (
        <div>
          <h2 className="text-2xl font-bold mb-1">Step 1: Define Your Spaces</h2>
          <p className="text-muted-foreground mb-6">Enter the floor area (in square meters) for each space you want to finish.</p>
          {/* This is the new grid layout */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-6 gap-y-4">
            {data.map(room => (
              <div key={room.name}>
                <label className="font-medium text-sm">{room.name} (m²)</label>
                <Input
                  type="number"
                  placeholder="e.g., 20"
                  value={roomDimensions[room.name] || ""}
                  onChange={(e) => handleDimensionChange(room.name, e.target.value)}
                />
              </div>
            ))}
          </div>
        </div>
      )}

      {/* Steps 1+: Room Selections */}
      {step > 0 && currentRoom && (
        <div>
          <h2 className="text-2xl font-bold mb-1">Step {step + 1}: {currentRoom.name}</h2>
          <p className="text-muted-foreground mb-6">Select your preferred finishes and items for this space.</p>
          <div className="space-y-8">
            {currentRoom.categories.map(category => (
              <div key={category.name}>
                <h3 className="text-lg font-semibold mb-3">{category.name}</h3>
                {/* Radio-style options */}
                {category.options.filter(o => o.type === 'radio').length > 0 && (
                  <div className="grid grid-cols-2 md:grid-cols-3 gap-2">
                    {category.options.filter(o => o.type === 'radio').map(option => (
                      <button
                        key={option.name}
                        onClick={() => handleSelectionChange(currentRoom.name, category.name, option)}
                        className={`p-3 border text-left transition-colors ${
                          selections[currentRoom.name]?.[category.name]?.option.name === option.name
                            ? 'bg-primary/10 border-primary'
                            : 'bg-background hover:border-primary/50'
                        }`}
                      >
                        <span className="font-medium text-sm">{option.name}</span>
                        <p className="text-xs text-muted-foreground">{option.price} / {option.unit}</p>
                      </button>
                    ))}
                  </div>
                )}
                {/* Quantity-style options */}
                {category.options.filter(o => o.type === 'quantity').map(option => (
                  <div key={option.name} className="flex items-center justify-between mt-2">
                    <div>
                      <span className="font-medium text-sm">{option.name}</span>
                      <p className="text-xs text-muted-foreground">{option.price} / {option.unit}</p>
                    </div>
                    <Input
                      type="number"
                      className="w-20"
                      placeholder="0"
                      value={selections[currentRoom.name]?.[category.name]?.quantity || ""}
                      onChange={(e) => handleSelectionChange(currentRoom.name, category.name, option, parseInt(e.target.value) || 0)}
                    />
                  </div>
                ))}
              </div>
            ))}
          </div>
        </div>
      )}

      {/* Navigation */}
      <div className="flex justify-between items-center mt-8 pt-6 border-t border-border">
        <Button variant="outline" onClick={() => setStep(s => s - 1)} disabled={step === 0}>
          <ChevronLeft className="h-4 w-4 mr-2" /> Previous
        </Button>
        <span className="text-sm text-muted-foreground">Step {step + 1} / {totalSteps}</span>
        <Button onClick={() => setStep(s => s + 1)} disabled={step === totalSteps - 1}>
          Next <ChevronRight className="h-4 w-4 ml-2" />
        </Button>
      </div>
    </div>
  );
}