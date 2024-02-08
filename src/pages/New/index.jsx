import styled from "styled-components";

import { Button } from "../../components/Button";
import { Input } from "../../components/Input";
import { FiUpload } from "react-icons/fi";
import { useRef, useState } from "react";

const Container = styled.div``;

const Content = styled.div`
  padding: 0 124px;

  margin-top: 150px;

  h2 {
    margin-top: 2.4rem;
    margin-bottom: 2.4rem;
  }

  h4 {
    margin-top: 2.4rem;
    margin-bottom: 1.6rem;
  }

  button {
    margin-top: 2.4rem;
  }

  textarea {
    outline: none;
    display: flex;
    align-items: center;
    justify-content: center;
    color: ${({ theme }) => theme.COLORS.EXIT};
    background-color: ${({ theme }) => theme.COLORS.SECOND_BACKGROUND};
    font-family: "Poppins", sans-serif;
    font-size: 16px;

    border-radius: 0.8rem;
    padding: 0 1.4rem;

    resize: none;
    width: 100%;
    height: 17.2rem;

    padding: 1.4rem;

    color: ${({ theme }) => theme.COLORS.WHITE_TITLE};
    border: 0;

    &::placeholder {
      color: ${({ theme }) => theme.COLORS.EXIT};
      font-size: 16px;
    }
  }

  .saveButton {
    display: flex;
    flex-direction: row-reverse;

    button {
      display: flex;
      justify-content: center;
      align-items: center;
      width: 160px;
      font-size: 15px;
    }
  }

  .DesktopForm {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    gap: 3.2rem;

    .cardImage {
      width: 30%;
    }

    .cardName {
      width: 50%;
    }

    .cardPrice {
      width: 300px;
    }

    .cardDesc {
      width: 100%;
    }
  }
`;

export function New() {
  const [imageFile, setImageFile] = useState(null);
  const [name, setName] = useState("");
  const [price, setPrice] = useState("");
  const [description, setDescription] = useState("");
  const [quantity, setQuantity] = useState("");

  const inputRef = useRef();

  async function handleNew() {
    if (!imageFile) {
      return alert("Você precisa enviar a imagem!");
    }

    if (!name) {
      return alert("Você precisa informar o nome!");
    }

    if (!price) {
      return alert("Você precisa informar o preço!");
    }

    if (!quantity) {
      return alert("Você precisa informar a quantidade!");
    }

    if (!description) {
      return alert("Você precisa informar a descrição!");
    }

    try {
      const priceRegex = /([0-9]*[.]{0,1}[0-9]{0,2})/;

      if (!priceRegex.test(price)) {
        return "Digite o preço num formato válido. Ex: 12,99";
      }

      const formattedPrice = parseFloat(price.replace(",", "."));

      const formData = new FormData();

      formData.append("image", imageFile);
      formData.append("name", name);
      formData.append("price", formattedPrice);
      formData.append("quantity", quantity);
      formData.append("description", description);

      // await api.post("/s", formData)

      alert("Criado com sucesso");
    } catch (error) {
      console.log(error);
      return alert(`Não foi possivel criar`);
    }
  }

  const handleCostumInputClick = () => {
    inputRef.current.click();
  };

  return (
    <Container>
      <Content>
        <h2>Adicionar</h2>
        <div className="DesktopForm">
          <div className="cardImage">
            <h4>Imagem</h4>
            <Input
              icon={FiUpload}
              placeholder="Selecione a Imagem"
              onClick={handleCostumInputClick}
              readOnly
            />
            <input
              type="file"
              id="imageInput"
              accept=".png"
              style={{ display: "none" }}
              onChange={(e) => setImageFile(e.target.files[0])}
              ref={inputRef}
            />
          </div>
          <div className="cardName">
            <h4>Nome</h4>
            <Input
              id="Name"
              placeholder="Ex: Novo Card"
              onChange={(e) => setName(e.target.value)}
            />
          </div>
          <div className="DesktopForm">
            <div className="cardPrice">
              <h4>Preço</h4>
              <Input
                placeholder="R$ 00,00"
                onChange={(e) => setPrice(e.target.value)}
              />
            </div>
            <div className="cardQnt">
              <h4>Quantidade</h4>
              <Input
                placeholder="0"
                onChange={(e) => setQuantity(e.target.value)}
              />
            </div>
          </div>
        </div>
        <div className="DesktopForm">
          <div className="cardDesc">
            <h4>Descrição</h4>
            <textarea
              placeholder="Fale brevemente sobre o card"
              onChange={(e) => setDescription(e.target.value)}
            />
          </div>
        </div>
        <div className="saveButton">
          <Button title="Salvar alterações" onClick={handleNew} />
        </div>
      </Content>
    </Container>
  );
}
