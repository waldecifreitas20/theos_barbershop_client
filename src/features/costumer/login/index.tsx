import { AppLogo } from "../../../shared/AppLogo";
import { Button } from "../../../shared/Button";
import { Form } from "../../../shared/Form";
import { Input } from "../../../shared/Input";
import { BackToHomeButton } from "../../../shared/BackToHomeButton";

export function LoginPage() {
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