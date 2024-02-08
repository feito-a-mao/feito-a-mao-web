import { Background, Container, Form } from "./styles";
import { Input } from "../../components/Input";
import { FiMail, FiLock, FiUser, FiArrowLeft } from "react-icons/fi";
import { Button } from "../../components/Button";
import { ButtonText } from "../../components/ButtonText";
import { Link } from "react-router-dom";
import { useState } from "react";
import { routes } from "../../constants/routes";
import { Select } from "../../components/Select";

export function Register() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  console.log(name, email, password);

  return (
    <Container>
      <Form>
        <h1>RocketMovies</h1>
        <p>Aplicação para acompanhar tudo que assistir.</p>
        <h2>Crie sua conta</h2>

        <Input
          placeholder="Nome"
          type="text"
          icon={FiUser}
          onChange={(e) => setName(e.target.value)}
        />

        <Input
          placeholder="Email"
          type="text"
          icon={FiMail}
          onChange={(e) => setEmail(e.target.value)}
        />

        <Input
          placeholder="Senha"
          type="password"
          icon={FiLock}
          onChange={(e) => setPassword(e.target.value)}
        />

        <Select icon={FiUser} />

        <Button title="Cadastrar" />
        <Link to={`../${routes.login}`}>
          <ButtonText title="Voltar para o login" icon={FiArrowLeft} />
        </Link>
      </Form>

      <Background />
    </Container>
  );
}
