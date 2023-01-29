import styled from "styled-components";

export const Container = styled.SafeAreaView
    `
      justify-content: center;
      align-items: center;
      flex: 1;
    `;

export const Scroll = styled.ScrollView
    `
      width: 100%;
      margin-bottom:10%;
      margin-top: 5%;
    `;

export const Form = styled.View
    `
      width: 100%;
      display: flex;
      justify-content: center;
      align-items: center;
      padding: 10px 45px;
    `;

export const ContainerHeader = styled.View
    `
      width: 100%;
      display: flex;
      flex-direction: row;
      justify-content: space-between;
      align-items: center;
      padding:8% 45px;
      background:#ed1c39;
    `;

export const Title = styled.Text
    `
      font-size: 18px;
      color: #fff;
      font-weight: bold;
    `;

export const Subtitle = styled.Text
    `
      font-size: 16px;
      color: #938b8c;
      font-weight: bold;
    `;

export const ViewBottom = styled.View
    `
      width: 100%;
      display: flex;
      flex-direction: row;
      justify-content: space-between;
      align-items: center;
      padding: 0px 45px 0px 35px;
    `;
