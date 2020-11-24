import React from "react";
import styled from "styled-components";

import { colors } from "theme";
import Button from "components/Button";

const App: React.FunctionComponent = () => {
  return (
    <AppContainer>
      <ButtonsContainer>
        <ButtonContainer>
          <StyledText>Enabled</StyledText>
          <Button onClick={() => console.log("Clicked enabled button")}>
            How many?
          </Button>
        </ButtonContainer>
        <ButtonContainer>
          <StyledText>Disabled</StyledText>
          <Button
            onClick={() => console.log("Well, this is pointless; huh?")}
            disabled
          >
            Nope!
          </Button>
        </ButtonContainer>
        <ButtonContainer>
          <StyledText>Custom</StyledText>
          <SmallButton
            background={colors.primary_positive}
            onClick={() => console.log("So tiny!")}
          >
            few
          </SmallButton>
          <BigButton
            background={colors.primary_negative}
            onClick={() => console.log("☠️☠️☠️")}
          >
            ☠️ DANGER! ☠️
          </BigButton>
        </ButtonContainer>
      </ButtonsContainer>
    </AppContainer>
  );
};

const AppContainer = styled.main`
  display: grid;
  height: 100vh;
  place-items: center;
`;

const ButtonsContainer = styled.div`
  align-items: start;
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(150px, 1fr));
  justify-content: center;
  width: 100%;
`;

const ButtonContainer = styled.div`
  align-items: center;
  display: flex;
  flex-direction: column;
`;

const StyledText = styled.p`
  font-size: 1.05rem;
  font-weight: 600;
  margin-bottom: 1rem;
  text-align: center;
  text-transform: uppercase;
`;

const SmallButton = styled(Button)`
  height: 40px;
  width: 100px;
`;

const BigButton = styled(Button)`
  display: block;
  height: 100px;
  margin-top: 1rem;
  width: 320px;
`;

export default App;
