import styled from "styled-components";
import { Button } from "../../components/Button";
import { Input } from "../../components/Input";
import { FloatButton } from "antd";
import { FileSearchOutlined } from "@ant-design/icons";
import { useNavigate } from "react-router-dom";
import { routes } from "../../constants/routes";
import axios from "axios";
import { useState, useRef } from "react";
import { FiUpload } from "react-icons/fi";

const Container = styled.div`
  margin-top: 80px;
  padding: 0;
`;

const Content = styled.div`
  padding: 0 124px;

  // margin-top: 150px;

  h2 {
    // margin-top: 2.4rem;
    margin-bottom: 2.4rem;
  }

  h4 {
    // margin-top: 2.4rem;
    margin-bottom: 1.6rem;
  }

  button {
    // margin-top: 2.4rem;
  }

  textarea {
    outline: none;
    display: flex;
    align-items: center;
    justify-content: center;
    color: ${({ theme }) => theme.COLORS.SECOND_BACKGROUND};
    background-color: ${({ theme }) => theme.COLORS.EXIT};
    font-family: "Poppins", sans-serif;
    font-size: 16px;

    border-radius: 0.8rem;
    padding: 0 1.4rem;

    resize: none;
    width: 100%;
    height: 17.2rem;

    padding: 1.4rem;

    color: ${({ theme }) => theme.COLORS.SECOND_BACKGROUND};
    border: 0;

    &::placeholder {
      color: #000;
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

    h4 {
      color: ${({ theme }) => theme.COLORS.SECOND_BACKGROUND};
    }

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
  const navigate = useNavigate();

  const [imageFile, setImageFile] = useState(null);
  const [name, setName] = useState("");
  const [price, setPrice] = useState("");
  const [description, setDescription] = useState("");
  const [quantity, setQuantity] = useState("");

  const inputRef = useRef();

  async function handleNew() {
    if (!imageFile || !name || !price || !quantity || !description) {
      return alert("Por favor, preencha todos os campos.");
    }

    try {
      const formattedPrice = parseFloat(price.replace(",", "."));

      const productData = {
        nome: name,
        descricao: description,
        preco: formattedPrice,
        estoqueDisponivel: quantity,
        vendedor: {
          id: 1,
          usuario: {
            id: 1,
            nome: "Diego",
            email: "diego.demetrio@aluno.ufop.edu.br",
            fotoPerfil: null,
            dataCriacao: null,
            cpf: "14822012670",
          },
          descricaoPerfil: "Vendedor top",
          localizacao: "Nova Lima - MG",
          avaliacaoMedia: 5.0,
        },
        imagens: [
          {
            nomeArquivo: imageFile.name,
            dadosImagem: await convertImageToBase64(imageFile),
            legenda: "Imagem do produto",
            dataUpload: null,
          },
        ],
      };
      console.log(productData);

      await axios.post("http://localhost:8070/api/v1/produto", productData);

      alert("Produto adicionado com sucesso!");
    } catch (error) {
      console.error("Erro ao adicionar produto:", error);
      alert("Erro ao adicionar produto. Por favor, tente novamente.");
    }
  }

  const handleCostumInputClick = () => {
    inputRef.current.click();
  };

  const handleImageChange = (event) => {
    const file = event.target.files[0];
    setImageFile(file);
  };

  const convertImageToBase64 = (file) => {
    return new Promise((resolve, reject) => {
      const reader = new FileReader();
      reader.readAsDataURL(file);
      reader.onload = () => {
        // Remove a parte do início da string 'data:image/png;base64,'
        const base64String = reader.result.split(",")[1];
        resolve(base64String);
      };
      reader.onerror = (error) => reject(error);
    });
  };

  return (
    <Container>
      <Content>
        <div className="DesktopForm">
          <div className="cardImage">
            <h4>Listagem de Produtos</h4>
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
              placeholder="Ex: Novo Produto"
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
              placeholder="Dê uma descrição para o produto"
              onChange={(e) => setDescription(e.target.value)}
            />
          </div>
        </div>
        <div className="saveButton">
          <Button title="Salvar alterações" onClick={handleNew} />
        </div>
      </Content>
      <FloatButton
        icon={<FileSearchOutlined />}
        onClick={() => navigate(`../${routes.buy}`)}
      />
    </Container>
  );
}
