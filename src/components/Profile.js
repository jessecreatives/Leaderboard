import React from 'react';
import {Image, ProfileContainer, ID} from '../styles/Styles';

const Profile = ({id, displayName, picture}) => (
    <ProfileContainer>
      <ID>{id}</ID>
      <Image src={picture} alt="" />
      <span>{displayName}</span>
      <span>{id}</span>
    </ProfileContainer>
);

export default Profile;
