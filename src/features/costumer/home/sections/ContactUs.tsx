import type { Contact } from "../../../../@types/Contact";
import { Button } from "../../../../shared/Button";
import { Container } from "../../../../shared/Container";
import { Form } from "../../../../shared/Form";
import { Input } from "../../../../shared/Input";

export function ContactUs() {
  function handleSubmit(data: Contact) {
    console.log(data);
    alert(`${data.name}, sua mensagem já foi enviada para gente, também? Aguarde nosso retorno no email ${data.email} ;)`)

  }

  return (
    <Container>
      <section className="py-20 mx-auto md:max-w-[600px]">
        <Form<Contact> onSubmit={handleSubmit}>
          <Input name="name" placeholder="Seu nome" />
          <Input name="email" placeholder="Email" type="email" />

          <Button type="submit" onClick={() => alert("aaa")}>Enviar Mensagem</Button>
        </Form>
      </section>
    </Container>
  );
}