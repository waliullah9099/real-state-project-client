import { useEffect, useRef } from "react";
import { GrClose } from "react-icons/gr";

interface ReusableModalProps {
  isOpen: boolean;
  onClose: () => void;
  title?: string;
  children: React.ReactNode;
}

const Modal: React.FC<ReusableModalProps> = ({
  isOpen,
  onClose,
  title = '',
  children,
}) => {
  const modalRef = useRef<HTMLDivElement | null>(null);

  // Escape key to close
  useEffect(() => {
    const handleEscape = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    };
    document.addEventListener("keydown", handleEscape);
    return () => document.removeEventListener("keydown", handleEscape);
  }, [onClose]);

  // Outside click to close
  useEffect(() => {
    const handleClickOutside = (e: MouseEvent) => {
      if (modalRef.current && !modalRef.current.contains(e.target as Node)) {
        onClose();
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, [onClose]);

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50">
      <div
        ref={modalRef}
        className="relative w-ful ma-lg p-6 mx-4 bg-white rounded-lg shadow-lg"
      >
        {/* Close Button */}
        <button
          className="absolute top-3 right-3 bg-gray-200 rounded-full flex items-center justify-center text-red-400 hover:text-orange-800 size-8 transition-all"
          onClick={onClose}
        >
          <GrClose className="size-4" />
        </button>

        {/* Modal Title */}
        {title && (
          <h2 className="mb-4 text-xl font-semibold text-gray-800">{title}</h2>
        )}

        {/* Modal Content */}
        <div>{children}</div>
      </div>
    </div>
  );
};

export default Modal;
