import Logo from '../../componentes/Logo';
import IconesHeader from '../../componentes/IconesHeader';
import OpcoesHeader from '../../componentes/OpcoesHeader';
import styled from 'styled-components';

const HeaderContainer = styled.header`
    background-color: #fff;
    display: flex;
    justify-content: center;
    @media (max-width: 1100px) {
        flex-direction: column;
    }
`;

function Header() {
    return (
        <HeaderContainer>
            <Logo />
            <OpcoesHeader />
            <IconesHeader />
        </HeaderContainer>
    );
}

export default Header;
