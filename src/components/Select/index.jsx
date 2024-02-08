import { Container, SelectContainer } from "./styles";

export function Select({ icon: Icon, onChange, selectedOption }) {
  return (
    <Container>
      {Icon && <Icon size={20} />}
      <SelectContainer onChange={onChange} value={selectedOption}>
        <option value="vendedor">Vendedor</option>
        <option value="comprador">Comprador</option>
      </SelectContainer>
    </Container>
  );
}