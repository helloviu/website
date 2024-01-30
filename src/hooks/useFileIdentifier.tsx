/* eslint-disable react-refresh/only-export-components */
import { ReactNode, createContext, useContext } from "react";
import { useReducer } from "react";

// Action types
const SET_FILE_TYPE = "SET_FILE_TYPE";
const SET_FILE_ORIGIN = "SET_FILE_ORIGIN";

// Action interfaces
interface SetFileTypeAction {
  type: typeof SET_FILE_TYPE;
  payload: string;
}

interface SetFileOriginAction {
  type: typeof SET_FILE_ORIGIN;
  payload: "local" | "remote";
}

type FileAction = SetFileTypeAction | SetFileOriginAction;

// State interface
interface IInitialState {
  ORIGIN: "local" | "remote";
  TYPE: string;
}

// Reducer function
const reducerFn = (state: IInitialState, action: FileAction) => {
  switch (action.type) {
    case SET_FILE_TYPE:
      return { ...state, TYPE: action.payload };
    case SET_FILE_ORIGIN:
      return { ...state, ORIGIN: action.payload };
    default:
      return state;
  }
};

// Context
const FileContext = createContext<{
  state: IInitialState;
  setFileType: (value: string) => void;
  setFileOrigin: (value: "local" | "remote") => void;
} | undefined>(undefined);

// Provider component
export const FileIdentifierProvider= ({ children }:{children: ReactNode}) => {
  const initialState: IInitialState = {
    ORIGIN: "local",
    TYPE: "",
  };
  const [state, dispatch] = useReducer(reducerFn, initialState);

  const setFileType = (value: string) => {
    dispatch({ type: SET_FILE_TYPE, payload: value });
  };

  const setFileOrigin = (value: "local" | "remote") => {
    dispatch({ type: SET_FILE_ORIGIN, payload: value });
  };

  return (
    <FileContext.Provider value={{ state, setFileType, setFileOrigin }}>
      {children}
    </FileContext.Provider>
  );
};

// Hook to use the context
export const useFileIdentifier = () => {
  const context = useContext(FileContext);
  if (!context) {
    throw new Error("useFileIdentifier must be used within a FileProvider");
  }
  return context;
};
