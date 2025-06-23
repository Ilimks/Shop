// AccordionSection.tsx
"use client";
import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import Image from "next/image";
import styles from "./Accordion.module.scss";

interface AccordionProps {
  title: string;
  children: React.ReactNode;
  onClose?: () => void;
}

export const Accordion = ({ title, children, onClose }: AccordionProps) => {
  const [isOpen, setIsOpen] = useState(true);


  const handleClose = () => {
    if (isOpen && onClose) {
      onClose()
    }
    setIsOpen((prev) => !prev)
  }


  return (
    <div className={styles.section}>
      <div className={styles.header}>
        <h4 className={styles.name} onClick={() => setIsOpen(!isOpen)}>{title}</h4>
        <Image
          className={`${styles.icon} ${isOpen ? styles.open : ""}`}
          onClick={handleClose}
          src="/assets/icons/ArrowFilter.svg"
          alt="Toggle filter section"
          width={16}
          height={16}
        />
      </div>
      <AnimatePresence initial={false}>
        {isOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.2 }}
          >
            <div className={styles.content}>{children}</div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

