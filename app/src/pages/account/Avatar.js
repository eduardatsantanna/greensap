import {Figure} from 'react-bootstrap';

export const Avatar = ({ DisplayPicture }) => {
  return (
    <div id="avatar-container">
      <Figure className="avatar">
          <Figure.Image src={DisplayPicture} width={200} height={200} alt="user profile picture"/>
      </Figure>
    </div>
  );
};