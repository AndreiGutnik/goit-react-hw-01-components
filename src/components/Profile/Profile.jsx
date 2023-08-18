import PropTypes from 'prop-types';
import {
  Name,
  Avatar,
  Desctiption,
  Wrapper,
  Text,
  StatsList,
  StatItem,
  Quantity,
} from './Profile.styled';

export function Profile({
  username,
  tag,
  location,
  avatar,
  stats: { followers, views, likes },
}) {
  return (
    <Wrapper>
      <Desctiption>
        <Avatar src={avatar} alt="User avatar" />
        <Name>{username}</Name>
        <Text>{tag}</Text>
        <Text>{location}</Text>
      </Desctiption>

      <StatsList>
        <StatItem>
          <span>Followers</span>
          <Quantity>{followers}</Quantity>
        </StatItem>
        <StatItem>
          <span>Views</span>
          <Quantity>{views}</Quantity>
        </StatItem>
        <StatItem>
          <span>Likes</span>
          <Quantity>{likes}</Quantity>
        </StatItem>
      </StatsList>
    </Wrapper>
  );
}

Profile.propTypes = {
  username: PropTypes.string.isRequired,
  tag: PropTypes.string.isRequired,
  location: PropTypes.string.isRequired,
  avatar: PropTypes.string.isRequired,
  stats: PropTypes.shape({
    followers: PropTypes.number.isRequired,
    views: PropTypes.number.isRequired,
    likes: PropTypes.number.isRequired,
  }).isRequired,
};
