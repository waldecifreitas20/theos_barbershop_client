import { Link } from "react-router";
import { AppLogo } from "../components/AppLogo";
import { Button } from "../components/Button";
import { ButtonFlat } from "../components/ButtonFlat";
import { Form } from "../components/Form";
import { Input } from "../components/Input";
import { Row } from "../components/Row";
import { useState } from "react";
import { formValidations } from "../utils/formValidations";
import type { Costumer } from "../@types/Costumer";


export function CostumerSignUpView() {
  const [validate, setValidate] = useState(false);

  function handleSubmit(data: Costumer) {
    setValidate(true);

    console.log(data);

  }


  return (
    <main id="background-app" className="px-5">
      <AppLogo />

      <Form<Costumer> onSubmit={handleSubmit}>
        <legend className="title text-3xl mb-2">Nova Conta</legend>

        <Row forceRow>
          <Input
            type="text"
            name="first_name"
            label="Nome"
            placeholder="José"
            shouldValidate={validate}
            isRequired
            invalidText="Campo Obrigatório"
            onValidate={(value) => !formValidations.isEmpty(value)} />

          <Input
            type="text"
            name="surname"
            placeholder="Silva"
            label="Sobrenome"
            isRequired
            shouldValidate={validate}
            invalidText="Campo Obrigatório"
            onValidate={(value) => !formValidations.isEmpty(value)} />
        </Row>

        <Row>
          <Input
            type="text"
            name="cpf"
            label="CPF"
            placeholder="000.000.000-00"
            isRequired
            shouldValidate={validate}
            invalidText="Campo Obrigatório"
            onValidate={(value) => formValidations.isCpf(value)}
          />
          <Input
            type="text"
            name="phone"
            label="Telefone"
            placeholder="(00) 0 0000 0000"
            isRequired
            invalidText="Telefone inválido"
            shouldValidate={validate}
            onValidate={(value) => formValidations.isPhoneNumber(value)}
          />
          <Input
            type="date"
            name="birth_day"
            label="Data de Nascimento"
            isRequired
            invalidText="Campo Obrigatório"
            shouldValidate={validate}
            onValidate={(value) => !formValidations.isEmpty(value)}
          />
        </Row>

        <Row >
          <Input
            type="email"
            name="email"
            label="Email"
            isRequired
            invalidText="Email inválido"
            shouldValidate={validate}
            onValidate={(value) => formValidations.isEmail(value)}
          />
          <Input
            type="password"
            name="password"
            label="Senha"
            isRequired
            invalidText="Senha deve conter entre 8 a 16 caracteres com letra, número e simbolos"
            shouldValidate={validate}
            onValidate={(value) => formValidations.isValidPassword(value)}
          />
        </Row>

        <div className="mt-4">
          <Row>
            <Button additionalStyle="w-full">Cadastrar</Button>
            <Link to="/" className="block w-full">
              <ButtonFlat additionalStyle="w-full">
                Voltar para Home
              </ButtonFlat>
            </Link>
          </Row>
        </div>
      </Form>
    </main>
  );
}