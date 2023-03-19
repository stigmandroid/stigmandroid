import Linkedin from '../../imagens/logolinkedin.png';
import GitHub from '../../imagens/github-mark.png';
import styled from 'styled-components';

const logoMidias = [Linkedin, GitHub];

const Icones = styled.ul`
    display: flex;
    align-items: center;
    align-self: center;
    justify-content: center;
    margin: auto;
    width: 25%;
`;
const Icone = styled.li`
    display: flex;
    justify-content: center;
    align-items: center;
    cursor: pointer;
    padding: 0 5px;
    margin-right: 10px;
`;

const IconeImagem = styled.img`
    width: 30px;
    height: 30px;
    padding-top: 30%;
    padding-bottom: 30%;
`;

function IconesHeader() {
    return (
        <Icones>
            {logoMidias.map(icone => (
                <Icone>
                    <IconeImagem src={icone}></IconeImagem>
                </Icone>
            ))}
        </Icones>
    );
}

export default IconesHeader;
