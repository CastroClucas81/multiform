import React from "react";
import { useNavigate, Link } from "react-router-dom";
import SelectOption from "../../components/SelectOption";
import Theme from "../../components/Theme";
import { useForm, FormActions } from "./../../contexts/FormContext";
import * as C from "./styles";

export default function FormStep2() {
  const navigate = useNavigate();

  //state tenho os dados. dispatch eu consigo executar ações sobre esses dados
  const { state, dispatch } = useForm();

  function handleNextStep() {
    if (state.name !== "") {
      navigate("/step3");
    } else {
      alert("Preencha os dados!");
    }
  }

  function setLevel(level: number) {
    dispatch({
      type: FormActions.setLevel,
      payload: level,
    });
  }

  React.useEffect(() => {
    if (state.name === "") {
      navigate("/");
    } else {
      //atualizar o step atual
      dispatch({
        type: FormActions.setCurrentStep,
        payload: 2,
      });
    }
  }, [dispatch, navigate, state.name]);

  return (
    <Theme>
      <C.Container>
        <p>Passo 2/3</p>
        <h1>{state.name}, o que melhor descreve você?</h1>
        <p>
          Escolha a opção que melhor condiz com o seu estado atual,
          profissionalmente.
        </p>
        <hr />

        <SelectOption
          title="Sou iniciante"
          description="Começei a programar há menos de 2 anos"
          icon="🥳"
          selected={state.level === 0}
          onClickLevel={() => setLevel(0)}
        />

        <SelectOption
          title="Sou programador"
          description="já programo há 2 anos ou mais"
          icon="🥳"
          selected={state.level === 1}
          onClickLevel={() => setLevel(1)}
        />

        {/* link volta com os dados */}
        <Link to="/" className="backButton">Voltar</Link>
        <button onClick={handleNextStep}>Próximo</button>
      </C.Container>
    </Theme>
  );
}
