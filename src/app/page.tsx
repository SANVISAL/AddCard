
// App.tsx
"use client";
// pages/_app.tsx
import React, { useState } from "react";
import { AppProps } from "next/app";
import { CardList } from "@/components/atoms/card";
import { CardProvider,useCardContext  } from "../components/Cardcontext/Cardcontext"; // Adjust the path as per your project structure
import { FormAdd } from "@/components/atoms/form";
import { ModalApi } from "@/components";

const MyApp: React.FC<AppProps> = ({ Component, pageProps }: AppProps) => {
  // set state
  const [isModalOpen, setIsModalOpen] = useState(false);
  const { selectCard } = useCardContext(); 

  const cards = [
    {
      id: "1",
      name: "Card 1",
      image: "facebook.svg",
    },
    {
      id: "2",
      name: "Card 2",
      image: "facebook.svg",
    },
  ];
  const handleCloseModal = () => {
    setIsModalOpen(false); // Close the modal when needed
  };
  const handleDelete = () => {
    alert("Card Delete");
  };
  return (
    <CardProvider>
      <div>
        <CardList/>
        <ModalApi
          selectCard="selectCard"
          isOpen={isModalOpen}
          onClose={handleCloseModal}
        >
          {/* //show modal  */}
          <FormAdd />
        </ModalApi>
      </div>
    </CardProvider>
  );
};

export default MyApp;



