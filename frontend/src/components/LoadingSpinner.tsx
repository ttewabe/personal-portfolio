import { ClipLoader } from 'react-spinners';
import { LoadingContainer } from './LoadingSpinner.style';

function LoadingSpinner() {
  return (
    <LoadingContainer role="status" aria-label="Loading">
      <ClipLoader size={50} aria-hidden="true" />
      <p>Loading...</p>
    </LoadingContainer>
  );
}

export default LoadingSpinner;
