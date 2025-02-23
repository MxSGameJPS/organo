import { IoCloseCircle, IoHeartOutline, IoHeartSharp } from "react-icons/io5";
import './colaborador.css'

const Colaborador = ({ colaborador, corDeFundo, aoDeletar, aoFavoritar }) => {

function favoritar() {
    aoFavoritar(colaborador.id);
}

const propsfavorito = {
    onClick: favoritar,
    size: 25
};

    return (<div className="colaborador">
        <IoCloseCircle 
            size={24} 
            className='deletar' 
            onClick={() => aoDeletar(colaborador.id)}/>
        <div className="cabecalho" style={{ backgroundColor: corDeFundo }}>
            <img src={colaborador.imagem} alt={colaborador.nome} />
        </div>
        <div className="rodape">
            <h4>{colaborador.nome}</h4>
            <h5>{colaborador.cargo}</h5>
            <div className="favorito">
                {colaborador.favorito 
                    ? <IoHeartSharp {...propsfavorito} color="#FF0000" /> 
                    : <IoHeartOutline {...propsfavorito} />
                }                
            </div>
        </div>
    </div>)
}

export default Colaborador