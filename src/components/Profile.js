import React from 'react';
import {Image, ProfileContainer, ID} from '../styles/Styles';

// This is the static part of each streamer
const Profile = ({id, displayName, picture}) => (
    <ProfileContainer>
      <ID>{id}</ID>
      <Image src={picture} alt="" />
      <span>{displayName}</span>
    </ProfileContainer>
);

export default Profile;
