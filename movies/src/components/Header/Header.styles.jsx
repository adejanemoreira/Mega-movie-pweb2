import styled from "styled-components";

export const Wrapper = styled.div`
    background: #000;
    padding: 0 20px;
`;

export const Content = styled.div`
    display: flex;
    align-items: center;
    justify-items: center;
    justify-content: center;
    padding: 20px 0;
    margin: 0 auto;
`;

export const LogoImg = styled.img`
    width: 200px;
    @media screen and (max-width: 500px){
        width: 150px;
    }
`;

export const TMDBLogoImg = styled.img`
    width: 100px;
    @media screen and (max-width: 500px){
        width: 80px;
    }
`;

export const Nav = styled.div`
    display: flex;
    align-items: center;
    a {
        color: white;
        font-size: 20px;
        font-weight: 500;
        transition: 0.5s;
        text-decoration: none;
        margin-right: 50px
    };

    a:hover {
        transform: scale(1.1);
    }
`;
  

