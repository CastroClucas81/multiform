// Context (caixinha q vai armazenar os dados), Reducer, Provider, Hook
import { createContext, ReactNode, useContext, useReducer } from "react";

//type do state
type State = {
  currentStep: number;
  name: string;
  level: 0 | 1;
  email: string;
  github: string;
};

type Action = {
  type: FormActions;
  payload: any;
};

type ContextType = {
  state: State;
  dispatch: (action: Action) => void;
};

type FormProviderProps = {
  children: ReactNode;
};

const initialData: State = {
  currentStep: 0,
  name: "",
  level: 0,
  email: "",
  github: "",
};

// Context
const FormContext = createContext<ContextType | undefined>(undefined);

// Reducer
enum FormActions {
  setCurrentStep,
  setName,
  setLevel,
  setEmail,
  setGithub,
}

//retorna sempre o state. executa uma action e reduz o state
function formReducer(state: State, action: Action) {
  switch (action.type) {
    case FormActions.setCurrentStep:
      return { ...state, currentStep: action.payload };
    case FormActions.setName:
      return { ...state, name: action.payload };
    case FormActions.setLevel:
      return { ...state, level: action.payload };
    case FormActions.setEmail:
      return { ...state, email: action.payload };
    case FormActions.setGithub:
      return { ...state, github: action.payload };
    default:
      return state;
  }
}

// Provider
// provider usa o Reducer... tudo q tiver na aplicar passa por ele
function FormProvider({ children }: FormProviderProps) {
  const [state, dispatch] = useReducer(formReducer, initialData);

  const value = { state, dispatch };

  return (
    //meu site inteiro ta no children
    <FormContext.Provider value={value}>{children}</FormContext.Provider>
  );
}

//Context Hook
//quando eu quiser ter acesso aos dados do contexto uso ele
function useForm() {
  const context = useContext(FormContext);

  if (context === undefined) {
    throw new Error("useForm precisa ser usando dentro do FormProvider");
  }

  return context;
}

export { FormActions, FormProvider, useForm };
