import { Selections, RoomDimensions, RoomConfiguration } from "../data";

interface Props {
  selections: Selections;
  roomDimensions: RoomDimensions;
  totalCost: number;
  data: RoomConfiguration[]; // We now need the main data to look up prices
}

// Helper to format currency
const formatCurrency = (amount: number) => 
  amount.toLocaleString('en-US', { style: 'currency', currency: 'SAR', minimumFractionDigits: 0, maximumFractionDigits: 0 });

export default function SummarySidebar({ selections, roomDimensions, totalCost, data }: Props) {
  // Calculate the total cost for a single room
  const calculateRoomTotal = (roomName: string) => {
    let roomTotal = 0;
    const area = roomDimensions[roomName] || 0;
    const roomSelections = selections[roomName];
    if (roomSelections) {
      for (const categoryName in roomSelections) {
        const selection = roomSelections[categoryName];
        if (selection) {
          if (selection.option.unit === 'm²') {
            roomTotal += selection.option.price * area;
          } else {
            roomTotal += selection.option.price * selection.quantity;
          }
        }
      }
    }
    return roomTotal;
  };

  return (
    <div className="sticky top-24">
        <div className="bg-container p-6 border border-border">
            <h2 className="text-xl font-bold text-foreground mb-4">Your Estimate Breakdown</h2>
            
            <div className="mb-6 max-h-[60vh] overflow-y-auto pr-2">
                {Object.keys(selections).length === 0 ? (
                    <p className="text-sm text-muted-foreground">Your selections will appear here as you make them.</p>
                ) : (
                    <div className="space-y-4">
                        {Object.keys(selections).map(roomName => (
                            <div key={roomName} className="border-b border-border pb-3 last:border-b-0">
                                <div className="flex justify-between items-center">
                                    <h3 className="font-semibold text-foreground">{roomName}</h3>
                                    <span className="font-semibold text-sm text-foreground">{formatCurrency(calculateRoomTotal(roomName))}</span>
                                </div>
                                <ul className="text-sm text-muted-foreground mt-2 space-y-1">
                                    {Object.values(selections[roomName]).map((sel, i) => {
                                        const area = roomDimensions[roomName] || 0;
                                        const subtotal = sel.option.unit === 'm²' 
                                            ? sel.option.price * area 
                                            : sel.option.price * sel.quantity;
                                        
                                        return (
                                          <li key={i} className="flex justify-between text-xs">
                                              <span>{sel.option.name} {sel.option.unit === 'item' && `(x${sel.quantity})`}</span>
                                              <span>{formatCurrency(subtotal)}</span>
                                          </li>
                                        )
                                    })}
                                </ul>
                            </div>
                        ))}
                    </div>
                )}
            </div>

            <div className="border-t-2 border-border pt-4">
                <div className="flex justify-between items-center">
                    <span className="text-lg font-bold text-foreground">Grand Total:</span>
                    <span className="text-2xl font-bold text-primary">
                        {formatCurrency(totalCost)}
                    </span>
                </div>
                <p className="text-xs text-muted-foreground mt-2">
                    *This is a preliminary estimate. Prices are subject to change based on detailed project specifications and material choices.
                </p>
            </div>
        </div>
    </div>
  );
}