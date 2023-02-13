import styled from 'styled-components';

export const Container = styled.SafeAreaView`
  flex: 1;
  padding: 0px 10px;
`;

export const Title = styled.Text`
  font-size: 20px;
  font-weight: bold;
  color: #ed1c39;
  width: 100%;
  padding: 20px;
  text-align: center;
`;

export const Header = styled.View`
  background: #fcd9de;
  padding: 10px;
  border-radius: 10px;
  border: 1px solid #ed1c39;
`;

export const UserName = styled.Text`
  font-size: 18px;
  font-weight: bold;
  color: #000;
  width: 100%;
`;

export const ContainerPerfil = styled.View`
  width: 100%;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
`;

export const ContainerBtnPerfil = styled.View`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

export const ContainerBack = styled.View`
  display: flex;
  justify-content: space-around;
  align-items: center;
  flex-direction: row;
  padding-top: 5px;
  padding-bottom: 5px;
`;

export const BtnTouch = styled.TouchableOpacity`
  padding: 10px 20px;
`;

export const Scroll = styled.ScrollView`
  background: #fff;
  margin: 10px 0px;
  border-radius: 10px;
  padding: 10px;
  border: 1px solid #625c5d;
`;

export const TitleMenu = styled.Text`
  font-size: 16px;
  font-weight: bold;
  color: #5a1010;
`;

export const ItemMenu = styled(TitleMenu)`
  font-weight: normal;
  color: #000;
  margin-left: 10px;
`;

export const ContainerItemMenu = styled.TouchableOpacity`
  display: flex;
  flex-direction: row;
  padding: 10px 5px;
`;

export const DividerMenu = styled.View`
  height: 1px;
  background: #000;
  margin: 5px 5px 10px 5px;
`;

export const TxtMenu = styled.Text`
  font-size: 18px;
  font-weight: bold;
  color: #000;
  text-align: center;
  font-size: 20px;
`;
