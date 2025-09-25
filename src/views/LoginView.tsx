import { AppLogo } from "../components/AppLogo";
import { Button } from "../components/Button";
import { Form } from "../components/Form";
import { Input } from "../components/Input";
import { BackToHomeButton } from "../components/BackToHomeButton";

export function LoginView() {
  return (
    <main id="background-app" className="py-5">
      <AppLogo />

      <div className="max-w-[450px] w-full mx-auto px-4">
        <Form onSubmit={() => { }} legend="Login">
          <Input placeholder="Email" />
          <Input placeholder="Password" />

          <div className="mt-4 w-full">
            <Button additionalStyle="w-full">Entrar</Button>
          </div>
        </Form>

        <BackToHomeButton />

      </div>
    </main>
  );
}