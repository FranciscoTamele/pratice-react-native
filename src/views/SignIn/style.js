import styled from 'styled-components';

export const Container = styled.SafeAreaView`
  justify-content: center;
  align-items: center;
  flex: 1;
`;

export const ViewTop = styled.View`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  align-content: flex-end;
  padding-top: 40px;
`;

export const ViewBottom = styled.View`
  width: 100%;
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: center;
  align-items: center;
  margin-top: 15%;
  padding:0px 15px;
`;

export const Form = styled.View`
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 0px 50px;
  margin-top: 15%;
`;

export const TitleApp = styled.Text`
  font-size: 26px;
  font-weight: bold;
  color: #ed1c39;
`;

export const TextoEsqueceu = styled.Text`
  font-size: 15px;
  font-weight: bold;
  color: #000;
  padding: 5px;
  align-self: flex-end;
  margin-bottom: 13px;
`;
