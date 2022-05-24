import React from 'react';
import styled from 'styled-components';
import { DeleteFilled } from '@ant-design/icons';

const FeedBackItem = ({ item, handleDelete }) => {
  return (
    <FeedbackItem>
      <StyledRating>{item.rating}</StyledRating>
      <StyledDelete onClick={() => handleDelete(item.id)}>
        <DeleteFilled />
      </StyledDelete>
      <StyledText>{item.text}</StyledText>
    </FeedbackItem>
  );
};

export default FeedBackItem;

const FeedbackItem = styled.div`
  align-items: center;
  background-color: #fff;
  border-radius: 10px;
  display: flex;
  flex-direction: column;
  height: 80px;
  justify-content: center;
  margin: 20px auto 10px auto;
  position: relative;
  width: 90vw;
`;

const StyledRating = styled.div`
  align-items: center;
  background-color: #f806cc;
  border-radius: 50%;
  bottom: 47px;
  color: white;
  display: flex;
  font-size: 20px;
  height: 45px;
  justify-content: center;
  left: -9px;
  position: absolute;
  width: 45px;
`;

const StyledDelete = styled.button`
  align-items: center;
  background-color: #f55353;
  border: none;
  border-radius: 50%;
  bottom: 18px;
  color: white;
  display: flex;
  font-size: 20px;
  height: 45px;
  justify-content: center;
  right: -12px;
  position: absolute;
  width: 45px;
  cursor: pointer;
`;
const StyledText = styled.div`
  font-size: 20px;
  padding: 35px;
`;
