import { FC, Fragment } from 'react';
// Redux

import { startingLives } from '../../features/game/gameSlice';
// Components
import { StartButton } from '../startandnew/StartButton';
// Styling
import {
  StyledWordAndButtons,
  StyledStartScreen,
  StyledGameTitle,
  StyledInstructionsContainer,
  StyledButtons,
} from './game-styling';

export const StartGameScreen: FC = (): JSX.Element => {
  return (
    <Fragment>
      <StyledGameTitle data-testid={'startgamescreen'}>
        <h1>JAPANESE WORDS QUIZ</h1>
      </StyledGameTitle>
      <StyledWordAndButtons>
        <StyledStartScreen>
          <StyledInstructionsContainer>
            <span>
              Generate a two-kanji word and guess if it's a real Japanese word
            </span>
            <span>Earn points - the quicker you answer, the more you get</span>
            <span>Providing a wrong answer loses you a life </span>
            <span>Take care you only have {startingLives} lives</span>
          </StyledInstructionsContainer>
        </StyledStartScreen>
        <StyledButtons>
          <StartButton />
        </StyledButtons>
      </StyledWordAndButtons>
    </Fragment>
  );
};
