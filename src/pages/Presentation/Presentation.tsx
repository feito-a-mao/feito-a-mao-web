import { useNavigate } from "react-router-dom";
import { routes } from "../../constants/routes";
import "./presentation.css";

const Presentation = () => {
  const navigate = useNavigate();
  return (
    <div className="presentation-wrapper">
      <div className="presentation-container">
        <h1>Feito a Mão</h1>
        <p>
          Descubra a beleza dos produtos artesanais feitos com paixão e
          habilidade.
        </p>
        <p>
          Conecte-se com artesãos talentosos e encontre peças exclusivas que
          contam histórias únicas.
        </p>
        <p>
          Explore nosso mercado virtual e mergulhe em um mundo de criatividade e
          autenticidade.
        </p>
        <button onClick={() => navigate(routes.login)}>Experimentar</button>
      </div>
    </div>
  );
};

export default Presentation;
