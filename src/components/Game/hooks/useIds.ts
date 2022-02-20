let seqId = 1;

/**
 * Возвращает следующий порядковый номер.
 */
export const useIds = () => {
  const nextId = () => {
    return seqId++;
  };

  return [nextId];
};
