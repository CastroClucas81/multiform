import React, { ChangeEvent } from "react";
import { useNavigate, Link } from "react-router-dom";
import Theme from "../../components/Theme";
import { useForm, FormActions } from "./../../contexts/FormContext";
import * as C from "./styles";

export default function FormStep3() {
  const navigate = useNavigate();

  //state tenho os dados. dispatch eu consigo executar ações sobre esses dados
  const { state, dispatch } = useForm();

  function handleNextStep() {
    if (state.name !== "" && state.github !== "") {
      console.log(state);
    } else {
      alert("Preencha os dados!");
    }
  }

  React.useEffect(() => {
    if (state.name === "") {
      navigate("/");
    } else {
      //atualizar o step atual
      dispatch({
        type: FormActions.setCurrentStep,
        payload: 3,
      });
    }
  }, [dispatch, navigate, state.name]);

  function handleEmailChange(e: ChangeEvent<HTMLInputElement>) {
    dispatch({
      type: FormActions.setEmail,
      payload: e.target.value,
    });
  }

  function handleGithubChange(e: ChangeEvent<HTMLInputElement>) {
    dispatch({
      type: FormActions.setGithub,
      payload: e.target.value,
    });
  }

  return (
    <Theme>
      <C.Container>
        <p>Passo 3/3</p>
        <h1>Legal {state.name}, onde te achamos?</h1>
        <p>Preencha com seus contatos para conseguirmos entrar em contato.</p>
        <hr />

        <label htmlFor="">
          Qual seu e-mail?
          <input
            type="email"
            value={state.email}
            onChange={handleEmailChange}
          />
        </label>

        <label htmlFor="">
          Qual seu Github
          <input
            type="url"
            value={state.github}
            onChange={handleGithubChange}
          />
        </label>

        {/* link volta com os dados */}
        <Link to="/step2" className="backButton">
          Voltar
        </Link>
        <button onClick={handleNextStep}>Finalizar Cadastro</button>
      </C.Container>
    </Theme>
  );
}
