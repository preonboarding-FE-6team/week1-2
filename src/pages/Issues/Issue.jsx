import React from 'react';
import { useNavigate } from 'react-router-dom';
import styled from 'styled-components';
import { flexBox } from '../../styles/mixin';
import parseDate from '../../utils/parseDate';

function Issue({ issue: { number, title, user, created_at: date, comments, body }, idx }) {
  const createdAt = parseDate(date);
  const navigate = useNavigate();

  const handleClick = () => {
    navigate(`/${number}`, { state: { number, title, user, createdAt, comments, body } });
  };

  return (
    <Container>
      <Title onClick={handleClick}>
        #{number} <span>{title}</span>
      </Title>
      <Information>
        <div>
          {createdAt} by {user.login}
        </div>
        <div>comments: {comments}</div>
      </Information>
    </Container>
  );
}

export default React.memo(Issue);

const Container = styled.article`
  width: 100%;
  padding: 15px;
  border-bottom: 1px solid ${({ theme }) => theme.borderColor};

  &:hover {
    background-color: ${({ theme }) => theme.backgroundColor};
  }
`;

const Title = styled.h1`
  display: inline;
  font-size: 20px;
  color: ${({ theme }) => theme.pointColor};
  line-height: 26px;
  cursor: pointer;

  > span {
    font-weight: 800;
    color: black;

    &:hover {
      color: ${({ theme }) => theme.pointColor};
    }
  }
`;

const Information = styled.div`
  ${flexBox('row', 'space-between')}
  margin-top: 10px;
  font-size: 15px;
  color: ${({ theme }) => theme.grayColor};
`;
