import styled from 'styled-components';

export const Container  = styled.View
`
    display:flex;
    width:100%;
    height:100%;
    justify-content:center;
    align-items:center
`;

export const Title = styled.Text
`   
    font-size:20px;
    font-weight:bold;
    color:#ed1c39
`;

export const ProgressLoad = styled.ActivityIndicator
`
    margin-top:30px
`;