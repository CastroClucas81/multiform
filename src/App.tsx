import { Router } from "./router";
import { FormProvider } from "./contexts/FormContext";

export default function App() {
  return (
    // to cobrindo meu sistema em todo o contexto do meu FormProvider
    <FormProvider>
      <Router />
    </FormProvider>
  );
}
