import { useDispatch, useSelector } from 'react-redux'
import type { RootState, AppDispatch } from './store'
import { useEffect, useState } from 'react';

// Use throughout your app instead of plain `useDispatch` and `useSelector`
export const useAppDispatch = useDispatch.withTypes<AppDispatch>()
export const useAppSelector = useSelector.withTypes<RootState>()


type TDebounced = {
    searchQuery: string;
    delay: number;
  };
  
  export const useDebounced = ({ searchQuery, delay }: TDebounced) => {
    const [debouncedValue, setDebouncedValue] = useState<string>(searchQuery);
  
    useEffect(() => {
      const handlar = setTimeout(() => {
        setDebouncedValue(searchQuery);
      }, delay);
  
      return () => {
        clearTimeout(handlar);
      };
    }, [searchQuery, delay]);
  
    return debouncedValue;
  };
  