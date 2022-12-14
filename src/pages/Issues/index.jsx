import styled from 'styled-components';
import { useContext, useEffect, useRef, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { IssuesContext } from '../../contexts/issuesContext';
import useAxios from '../../hooks/useAxios';
import { flexBox, responsive } from '../../styles/mixin';
import issueAPI from '../../utils/api';
import Issue from './Issue';
import LoadingSpinner from '../../components/LoadingSpinner';
import useInfiniteScroll from '../../hooks/useInfiniteScroll';
import useBanner from '../../hooks/useBanner';
import url from '../../constants/url';

function Issues() {
  const [isLoading, setIsLoading] = useState(true);
  const target = useRef(null);
  const issues = useContext(IssuesContext);
  const getIssues = useAxios(issueAPI.getIssues);
  const navigate = useNavigate();
  const { count } = useInfiniteScroll({
    target,
    targetArray: issues.list,
    pageSize: 20,
  });
  const insertBanner = useBanner({ order: 5, imgSrc: url.WANTED_IMG, href: url.WANTED });

  useEffect(() => {
    setIsLoading(true);
    getIssues(
      [],
      { state: 'open', sort: 'comments', per_page: 20, page: count },
      {
        onSuccess: (data) => {
          if (count === 1) issues.set(data);
          else issues.add(data);
          setIsLoading(false);
        },
        onError: (state) => {
          navigate('/error', { state });
        },
      }
    );
  }, [count]);

  return (
    <Container ref={target}>
      {insertBanner(issues.list.map((issue, idx) => <Issue key={issue.number} issue={issue} idx={idx} />))}
      {isLoading && (
        <LoadingContainer>
          <LoadingSpinner />
        </LoadingContainer>
      )}
    </Container>
  );
}

export default Issues;

const Container = styled.main`
  width: 100%;
  max-width: 1200px;
  border: 1px solid ${({ theme }) => theme.borderColor};
  border-radius: 6px;

  ${responsive('phone')} {
    border: none;
  }
`;

const LoadingContainer = styled.div`
  ${flexBox()};
  height: 150px;
`;
