import { useContext } from "react";
import { BoardContext } from "../context/BoardContext";

/**
 * Возвращает свойства доски, такие как ширина контейнера тайлов или количество тайлов
 */
export const useBoard = () => {
  const { containerWidth, tileCount } = useContext(BoardContext);

  return [containerWidth, tileCount] as [number, number];
};
