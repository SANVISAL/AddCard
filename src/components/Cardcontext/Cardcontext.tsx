import React, { useContext, useState } from "react";

const CardContext = React.createContext<{
  selectCard: string | null;
  setSelectCard: React.Dispatch<React.SetStateAction<string | null>>;
  addNewCard: (formData: any) => void; // Define addNewCard function
}>({
  selectCard: null,
  setSelectCard: () => {},
  addNewCard: () => {}, // Initial value for addNewCard
});

const CardProvider: React.FC = ({ children, ...props }) => {
  const [selectCard, setSelectCard] = useState<string | null>(null);
  const [cards, setCards] = useState([]);

  // Define addNewCard function
  const addNewCard = (newCards) => {
    // Implementation of addNewCard function
    setCards([...cards, newCards]);
  };

  return (
    <CardContext.Provider
      value={{ selectCard, setSelectCard,cards, addNewCard }}
      {...props}
    >
      {children}
    </CardContext.Provider>
  );
};

const useCardContext = () => useContext(CardContext);
export { CardContext, CardProvider, useCardContext };
