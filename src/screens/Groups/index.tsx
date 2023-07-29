import { View, Text } from "react-native";
import styled from "styled-components/native";

export function GroupsScreen() {
  return (
    <ViewContainer>
      <Title>Groups Screen</Title>
    </ViewContainer>
  );
}

const ViewContainer = styled.View`
  background-color: #181818;
  flex: 1;
  align-items: center;
  justify-content: center;
`;

const Title = styled.Text`
  font-size: larger;
  font-weight: bold;
  color: #FFF;
`;