import styled from 'styled-components';

const textoOpcoes = ['QUEM SOU', 'PORTFOLIO', 'CONTATO'];

const Opcoes = styled.ul`
    display: flex;
    margin: auto;
    padding: 0;
`;

const Opcao = styled.li`
    display: flex;
    justify-content: center;
    align-items: center;
    text-align: center;
    cursor: pointer;
    height: 100%;
    padding: 0 5px;
    font-size: 1rem;
    min-width: 120px;
`;

function OpcoesHeader() {
    return (
        <Opcoes>
            {textoOpcoes.map(texto => (
                <Opcao>
                    <p>{texto}</p>
                </Opcao>
            ))}
        </Opcoes>
    );
}

export default OpcoesHeader;
