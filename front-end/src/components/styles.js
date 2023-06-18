/* eslint-disable import/no-extraneous-dependencies */
import { styled } from '@mui/system';

const StyledRoot = styled('div')({
  display: 'flex',
  height: '100%',
});

const StyledToolbar = styled('div')({
  height: '70px',
});

const StyledContent = styled('div')({
  flexGrow: '1',
  padding: '2em',
  width: '100%',
});

export { StyledRoot, StyledToolbar, StyledContent };
