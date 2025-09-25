import { AppLogo } from "../components/AppLogo";
import { Button } from "../components/Button";
import { ButtonFlat } from "../components/ButtonFlat";
import { Form } from "../components/Form";
import { Input } from "../components/Input";
import { Row } from "../components/Row";

export function CostumerSignUp() {

  function handleSubmit(form: FormData) {
    console.log(form.get("first_name"));
    console.log(form.get("surname"));

  }

  return (
    <main id="background-app" className="py-10 px-5">
      <AppLogo />

      <Form onSubmit={handleSubmit}>
        <legend className="title text-3xl mb-2">Nova Conta</legend>

        <Row forceRow>
          <Input type="text" name="first_name" placeholder="Nome" />
          <Input type="text" name="surname" placeholder="Sobrenome" />
        </Row>

        <Row>
          <Input type="text" name="cpf" placeholder="CPF" />
          <Input type="text" name="phone" placeholder="Telefone" />
          <Input type="date" name="birth_day" placeholder="Data de Nascimento" />
        </Row>

        <Row forceRow>
          <Input type="email" name="email" placeholder="Email" />
          <Input type="password" name="password" placeholder="Senha" />
        </Row>

        <div className="mt-4">
          <Row>
            <Button additionalStyle="w-full">Cadastrar</Button>
            <ButtonFlat additionalStyle="w-full">Voltar para Home</ButtonFlat>
          </Row>
        </div>
      </Form>
    </main>
  );
}