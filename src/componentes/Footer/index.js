import styled from 'styled-components';

const AppFooter = styled.div`
    background-color: #000000;
    font-size: 1rem;
    display: flex;
    justify-content: center;
    color: #ffffff;
    position: fixed;
    width: 100%;
    bottom: 0px;
    left: 0px;
    @media (max-width: 500px) {
        flex-direction: column;
    }
`;

function Footer() {
    return (
        <AppFooter>
            <p>
                Todos os direitos reservados © 2023 | Desenvolvido por
                stigmandroid
            </p>
        </AppFooter>
    );
}

export default Footer;
