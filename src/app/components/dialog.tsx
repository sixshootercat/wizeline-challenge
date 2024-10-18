"use client";

import { cn } from "../utils/styles";

interface DialogProps {
  open: boolean;
  onClose: () => void;
  children: React.ReactNode;
}

const Dialog: React.FC<DialogProps> = ({ open, onClose, children }) => {
  return (
    <div
      className={cn(
        "fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50 text-slate-900",
        { hidden: !open }
      )}
    >
      <div className="relative bg-white rounded-lg shadow-lg max-w-[70%] p-6 min-w-[70%] min-h-96 max-h-96 overflow-scroll">
        <button
          type="button"
          className="absolute top-3 right-3 z-50"
          onClick={onClose}
        >
          <svg
            className="w-6 h-6"
            fill="black"
            viewBox="0 0 20 20"
            xmlns="http://www.w3.org/2000/svg"
          >
            <title>Close</title>
            <path
              fillRule="evenodd"
              d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
              clipRule="evenodd"
            />
          </svg>
        </button>
        {children}
      </div>
    </div>
  );
};

export default Dialog;
