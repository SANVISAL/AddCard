import { ReactNode, useState } from "react";
import { motion } from "framer-motion";

interface ModalProps {
  children?: ReactNode;
  selectCard: string;
}

const ModalApi: React.FC<ModalProps> = ({ children, selectCard }) => {
  const [isShowModal, setIsShowModal] = useState(false);

  return (
    <>
      <button 
        onClick={() => setIsShowModal(true)}
        className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
      >
        Add New Card
      </button>
      {isShowModal && (
        <motion.div
          initial={{ x: "100%" }}
          animate={{ x: 0 }}
          exit={{ x: "100%" }}
          transition={{ type: "spring", bounce: 0, duration: 0.4 }}
          className="fixed bg-indigo-600 text-white shadow-lg top-0 right-0 w-full max-w-sm h-screen p-5"
        >
          <button
            onClick={() => setIsShowModal(false)}
            className="bg-white text-black h-8 w-8 block mb-2 rounded-full"
          >
            &times;
          </button>
          <div>{children}</div>
        </motion.div>
      )}
    </>
  );
};

export { ModalApi };
