import { Background, Container, Form } from "./styles";
import { Input } from "../../components/Input";
import { FiMail, FiLock } from "react-icons/fi";
import { Button } from "../../components/Button";
import { ButtonText } from "../../components/ButtonText";
import { Link, useNavigate } from "react-router-dom";
import { useState } from "react";
import { accounts } from "../../constants/accounts";

export function Login() {
  const navigate = useNavigate();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    const user = accounts.find(
      (user) => user.email === email && user.password === password
    );
    if (user) {
      // Autenticação bem-sucedida, redirecionar para a página de perfil do usuário, por exemplo
      navigate("/buy");
    } else {
      // Credenciais inválidas, exibir mensagem de erro ou realizar outra ação
      console.log("Credenciais inválidas");
    }
  };

  return (
    <Container>
      <Form>
        <h1>Feito a Mão</h1>
        <p>Mergulhe em um mundo de criatividade e autenticidade.</p>
        <h2>Faça seu login</h2>

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

        <Button title="Entrar" onClick={handleSubmit} />
        <Link to="/register">
          <ButtonText title="Criar contra" />
        </Link>
      </Form>

      <Background />
    </Container>
  );
}
