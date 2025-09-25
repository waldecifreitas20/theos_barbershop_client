import { AppLogo } from "../components/AppLogo";
import { Button } from "../components/Button";
import { ButtonFlat } from "../components/ButtonFlat";
import { Input } from "../components/Input";
import { Row } from "../components/Row";

export function CostumerSignUp() {
  return (
    <main id="background-app" className="py-10 px-5">
      <AppLogo />

      <form className="py-10 px-5 w-[700px] mx-auto rounded-lg bg-black/90 text-zinc-100 flex flex-col gap-4">
        <legend className="title text-3xl">Nova Conta</legend>

        <Row>
          <Input type="text" name="first_name" placeholder="Nome" />
          <Input type="text" name="surname" placeholder="Sobrenome" />
        </Row>

        <Row>
          <Input type="text" name="cpf" placeholder="CPF" />
          <Input type="text" name="phone" placeholder="Telefone" />
          <Input type="date" name="birth_day" placeholder="Data de Nascimento" />
        </Row>

        <Row>
          <Input type="email" name="email" placeholder="Email" />
          <Input type="password" name="password" placeholder="Senha" />
        </Row>

        <Row>
          <Button additionalStyle="w-full">Cadastrar</Button>
          <ButtonFlat additionalStyle="w-full">Voltar para Home</ButtonFlat>
        </Row>
      </form>
    </main>
  );
}