import logo from '../../imagens/stigmandroid.png';
import styled from 'styled-components';

const LogoContainer = styled.div`
    display: flex;
    align-items: center;
    align-self: center;
    justify-content: center;
    margin: auto;
    font-size: 1.9rem;
    width: 25%;
`;

const LogoImagem = styled.img`
    display: flex;
    align-items: center;
    align-self: center;
    justify-content: center;
    margin-right: 10px;
    width: 50px;
    height: 50px;
`;

function Logo() {
    return (
        <LogoContainer>
            <LogoImagem src={logo} alt="logo" />
            <p>
                <strong>stigmandroid</strong>
            </p>
        </LogoContainer>
    );
}

export default Logo;
