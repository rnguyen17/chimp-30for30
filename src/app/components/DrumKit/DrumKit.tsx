import * as React from 'react';
import styled from 'styled-components';

// const keys = [
//   {
//     char: 'a',
//     sound: 'boom',
//   },
//   {
//     char: 's',
//     sound: 'clap',
//   },
//   {
//     char: 'd',
//     sound: 'hihat',
//   },
//   {
//     char: 'f',
//     sound: 'kick',
//   },
//   {
//     char: 'g',
//     sound: 'openhat',
//   },
//   {
//     char: 'h',
//     sound: 'ride',
//   },
//   {
//     char: 'j',
//     sound: 'snare',
//   },
//   {
//     char: 'k',
//     sound: 'tink',
//   },
//   {
//     char: 'l',
//     sound: 'tom',
//   },
// ];

interface KeyProps {
  char: string;
  sound: string;
}

interface DrumKitProps {
  keys: KeyProps[];
}

interface DrumKitState {
  buttonPressed: number;
  keys: KeyProps[];
}

interface DrumKeyProps {
  active?: boolean;
}

const DrumKey = styled.div<DrumKeyProps>`
  width: 60px;
  height: 60px;
  line-height: 60px;
  text-align: center;
  font-size: 16px;
  font-family: Helvetica;
  border: 1px solid #000;
  box-shadow: ${({ active }) => (!active ? '0px 2px 2px 2px rgb(127, 127, 127, 0.3)' : 'none')};
  transform: ${({ active }) => (active ? 'scale(0.95, 0.95)' : 'scale(1, 1)')};
  transition: all 0.15s ease-out;
`;

const SoundList = styled.ul`
  display: flex;
  justify-content: center;
  align-items: center;
  list-style: none;
  margin: 0;
`;

const SoundListItem = styled.li`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-right: 40px;
`;

const StyledHeader = styled.h3`
  font-size: 16px;
`;

export class DrumKit extends React.Component<DrumKitProps, DrumKitState> {
  constructor(props: DrumKitProps) {
    super(props);

    this.state = {
      buttonPressed: 0,
      keys: this.props.keys,
    };

    this.pressButton = this.pressButton.bind(this);
  }

  componentDidMount() {
    window.addEventListener('keydown', (event: KeyboardEvent) => {
      const keyCode = event.keyCode + 32;
      const match = this.state.keys.find(element => element.char.charCodeAt(0) === keyCode);

      if (match) {
        const sound = require(`../../assets/sounds/${match.sound}.wav`);
        const audio = new Audio(sound);

        this.setState({
          buttonPressed: event.keyCode,
        });

        audio.currentTime = 0;
        audio.play();
      }
    });

    window.addEventListener('keyup', () => {
      this.setState({
        buttonPressed: 0,
      });
    });
  }

  pressButton() {}

  render() {
    const { keys } = this.props;

    const DrumKeys = keys.map(key => (
      <SoundListItem key={key.char}>
        <StyledHeader>{key.sound}</StyledHeader>
        <DrumKey active={key.char.charCodeAt(0) - 32 === this.state.buttonPressed}>
          {key.char}
        </DrumKey>
      </SoundListItem>
    ));
    return <SoundList>{DrumKeys}</SoundList>;
  }
}
