import styled from "styled-components";
import { Card, FloatButton, Modal } from "antd";
import { useState, useRef, useEffect } from "react";
import Draggable from "react-draggable";
import { PlusOutlined } from "@ant-design/icons";
import { useNavigate } from "react-router-dom";
import { routes } from "../../constants/routes";

import axios from "axios";

const { Meta } = Card;

const Container = styled.div`
  width: 100%;
  min-height: 100vh;

  padding: 0 124px;

  background-color: ${({ theme }) => theme.COLORS.WHITE_TITLE};

  .titleSection {
    h2 {
      color: ${({ theme }) => theme.COLORS.MAIN_BACKGROUND};
      padding-top: 50px;
      margin-bottom: 100px;
    }
  }

  .cardSection {
    display: flex;
    justify-content: center;
    flex-wrap: wrap;
    gap: 200px;
  }
`;

export function Buy() {
  const navigate = useNavigate();

  const [open, setOpen] = useState(false);
  const [disabled, setDisabled] = useState(true);
  const [bounds, setBounds] = useState({
    left: 0,
    top: 0,
    bottom: 0,
    right: 0,
  });
  const draggleRef = useRef(null);

  const [selectedProduct, setSelectedProduct] = useState(null);
  const [products, setProducts] = useState([]);

  useEffect(() => {
    // Fazendo a requisição GET para a API
    axios
      .get("http://localhost:8070/api/v1/produto")
      .then((response) => {
        console.log(response);
        setProducts(response.data.itens);
      })
      .catch((error) => {
        console.error("Erro ao obter os produtos:", error);
      });
  }, []);

  const showModal = (product) => {
    setSelectedProduct(product);
    setOpen(true);
  };

  const handleOk = () => {
    setOpen(false);
  };

  const handleCancel = () => {
    setOpen(false);
  };

  const onStart = (_event, uiData) => {
    const { clientWidth, clientHeight } = window.document.documentElement;
    const targetRect = draggleRef.current?.getBoundingClientRect();
    if (!targetRect) {
      return;
    }
    setBounds({
      left: -targetRect.left + uiData.x,
      right: clientWidth - (targetRect.right - uiData.x),
      top: -targetRect.top + uiData.y,
      bottom: clientHeight - (targetRect.bottom - uiData.y),
    });
  };

  return (
    <Container>
      <div className="titleSection">
        <h2 style={{ textAlign: "center" }}>Comprar</h2>
      </div>
      <div className="cardSection">
        {products.map((product) => (
          <div key={product.id}>
            <Card
              hoverable
              style={{ width: 240 }}
              cover={
                <img
                  alt={product.nome}
                  src={`data:image/jpeg;base64,${product.imagens[0]?.dadosImagem}`}
                />
              }
              onClick={() => showModal(product)}
            >
              <Meta title={product.nome} description={product.descricao} />
            </Card>
          </div>
        ))}
      </div>
      <Modal
        title={selectedProduct?.nome}
        visible={open}
        onOk={handleOk}
        onCancel={handleCancel}
        modalRender={(modal) => (
          <Draggable
            disabled={disabled}
            bounds={bounds}
            nodeRef={draggleRef}
            onStart={(event, uiData) => onStart(event, uiData)}
          >
            <div ref={draggleRef}>{modal}</div>
          </Draggable>
        )}
      >
        {selectedProduct && (
          <>
            <p>{selectedProduct.descricao}</p>
            <p>Preço: R${selectedProduct.preco}</p>
            <p>Vendedor: {selectedProduct.vendedor.descricaoPerfil}</p>
            <p>Localização: {selectedProduct.vendedor.localizacao}</p>
            <p>Avaliação Média: {selectedProduct.vendedor.avaliacaoMedia}</p>
          </>
        )}
      </Modal>
      <FloatButton
        icon={<PlusOutlined />}
        onClick={() => navigate(`../${routes.new}`)}
      />
    </Container>
  );
}
