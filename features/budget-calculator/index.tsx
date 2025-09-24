"use client";

import { useState, useMemo } from "react";
import Layout from "@/components/layout/layout";
import CalculatorForm from "./components/calculator-form";
import CalculatorHero from "./components/calculator-hero";
import SummarySidebar from "./components/summary-sidebar";
import { RoomDimensions, Selections, budgetData } from "./data";


export default function BudgetCalculatorPage() {
  // State to hold the square meter area for each room
  const [roomDimensions, setRoomDimensions] = useState<RoomDimensions>({});
  
  // State to hold all the user's selections
  const [selections, setSelections] = useState<Selections>({});

  // Memoized calculation for the total cost. This will only re-run when selections or dimensions change.
  const totalCost = useMemo(() => {
    let total = 0;
    for (const roomName in selections) {
      const area = roomDimensions[roomName] || 0;
      const roomSelections = selections[roomName];

      for (const categoryName in roomSelections) {
        const selection = roomSelections[categoryName];
        if (selection) {
          if (selection.option.unit === 'm²') {
            total += selection.option.price * area;
          } else if (selection.option.unit === 'item') {
            total += selection.option.price * selection.quantity;
          }
        }
      }
    }
    return total;
  }, [selections, roomDimensions]);

  return (
    <Layout>
      <CalculatorHero />
      <section className="py-20 bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-3 gap-12 items-start">
            {/* The main interactive form */}
            <div className="lg:col-span-2">
              <CalculatorForm
                data={budgetData}
                roomDimensions={roomDimensions}
                setRoomDimensions={setRoomDimensions}
                selections={selections}
                setSelections={setSelections}
              />
            </div>
            {/* The sticky summary sidebar */}
            <div className="lg:col-span-1">
              <SummarySidebar 
                selections={selections}
                roomDimensions={roomDimensions}
                totalCost={totalCost}
                data={budgetData} 
              />
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
}