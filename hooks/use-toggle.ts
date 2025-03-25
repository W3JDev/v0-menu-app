"use client";

import { useState, useEffect, useCallback } from "react";
import { useLocalStorage } from "@/hooks/use-local-storage";

export function useToggle(key: string, initialValue = false): [boolean, () => void] {
  const [storage, setStorage] = useLocalStorage(key, initialValue);
  const [state, setState] = useState<boolean>(initialValue);

  useEffect(() => {
    setState(storage);
  }, [storage]);

  const toggle = useCallback(() => {
    const newValue = !state;
    setState(newValue);
    setStorage(newValue);
  }, [state, setStorage]);

  return [state, toggle];
}