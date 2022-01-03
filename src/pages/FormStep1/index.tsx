import React, { ChangeEvent } from "react";
import { useNavigate } from "react-router-dom";
import Theme from "../../components/Theme";
import { useForm, FormActions } from "./../../contexts/FormContext";
import * as C from "./styles";

export default function FormStep1() {
  const navigate = useNavigate();

  //state tenho os dados. dispatch eu consigo executar ações sobre esses dados
  const { state, dispatch } = useForm();

  function handleNextStep() {
    if (state.name !== "") {
      navigate("step2");
    } else {
      alert("Preencha os dados!");
    }
  }

  function handleNameChange(e: ChangeEvent<HTMLInputElement>) {
    //altero o name a partir do dado q o usuário digitar
    dispatch({
      type: FormActions.setName,
      payload: e.target.value,
    });
  }

  React.useEffect(() => {
    //atualizar o step atual
    dispatch({
      type: FormActions.setCurrentStep,
      payload: 1,
    });
  }, [dispatch]);

  return (
    <Theme>
      <C.Container>
        <p>Passo 1/3</p>
        <h1>Vamos começar com o seu nome.</h1>
        <p>Preencha o campo abaixo com o seu nome completo.</p>
        <hr />

        <label htmlFor="">
          Seu nome completo
          <input
            type="text"
            autoFocus
            value={state.name}
            onChange={handleNameChange}
          />
        </label>

        <button onClick={handleNextStep}>Próximo</button>
      </C.Container>
    </Theme>
  );
}
