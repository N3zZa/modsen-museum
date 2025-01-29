import React, { createContext, useContext, useState, ReactNode } from 'react';

interface PaginationContextType {
  currentPage: number;
  setCurrentPage: (page: number) => void;
  totalPages: number;
  setTotalPages: (page: number) => void;
}

const PaginationContext = createContext<PaginationContextType | undefined>(
  undefined
);

export const PaginationProvider: React.FC<{ children: ReactNode }> = ({
  children,
}) => {
  const [currentPage, setCurrentPage] = useState<number>(1);
  const [totalPages, setTotalPages] = useState<number>(4);

  return (
    <PaginationContext.Provider
      value={{ currentPage, setCurrentPage, totalPages, setTotalPages }}>
      {children}
    </PaginationContext.Provider>
  );
};

export const usePagination = (): PaginationContextType => {
  const context = useContext(PaginationContext);
  if (!context) {
    throw new Error(
      'usePagination должен использоваться внутри PaginationProvider'
    );
  }
  return context;
};
