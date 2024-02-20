import React from "react";
import { Card } from "./Card";
import { useCardContext } from "@/components/Cardcontext/Cardcontext";

const CardList = () => {
  const { cards } = useCardContext();
  return (
    <div>
      {cards.map((card) => (
        <Card
          key={card.id}
          id={card.id}
          name={card.name}
          image={card.image}
          onDelete={() => handleDelete(card.id)}
        />
      ))}
    </div>
  );
};

export {CardList };
