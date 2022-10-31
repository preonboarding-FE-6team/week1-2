


# **📖 1주차 과제 2 - Best Practice**

### **과제목적 : 깃허브 issue api를 사용한 웹사이트 구축 후 Best Pratice 산출**

> 기간 :2022년 10월 29일(토) - 2022년 10월 31일(월)

**📎[배포링크 바로가기](https://angular-cli-issue.vercel.app/)**

# **👨‍👩‍👧‍👦 Members**

| 최승진<br/>(팀장)                                                                                     | 임준홍<br/>(부팀장)                                                                                 | 문도연<br/>(서기)                                                                                        | 최원오<br/>(부서기)                                                                                     | 소윤호<br/>(부서기)                                                                                 | 선민경<br/>(팀원)                                                                                       | 곽현<br/>(팀원)                                                                                         | 이유진<br/>(팀원)                                                                                       |
| ----------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------- |
| <img src="https://avatars.githubusercontent.com/u/46988995?v=4" alt="tooooo1" width="60" height="60"> | <img src="https://avatars.githubusercontent.com/u/67459853?v=4" alt="helen" width="60" height="60"> | <img src="https://avatars.githubusercontent.com/u/102936206?v=4" alt="magictaro" width="60" height="60"> | <img src="https://avatars.githubusercontent.com/u/99406837?v=4" alt="magictaro" width="60" height="60"> | <img src="https://avatars.githubusercontent.com/u/30254570?v=4" alt="flora" width="60" height="60"> | <img src="https://avatars.githubusercontent.com/u/76088728?v=4" alt="magictaro" width="60" height="60"> | <img src="https://avatars.githubusercontent.com/u/73919235?v=4" alt="magictaro" width="60" height="60"> | <img src="https://avatars.githubusercontent.com/u/42020919?v=4" alt="magictaro" width="60" height="60"> |
| yondo123                                                                                              | tesseractjh                                                                                         | Moondoyeon                                                                                               | choi1five                                                                                               | younhoso                                                                                            | seonsy44                                                                                                | kwakhyun                                                                                                | 2ujin                                                                                                   |

# **🖥 Demo**

**이슈 리스트 페이지**

![screenshot1](https://user-images.githubusercontent.com/42020919/198911052-2cd5d327-79d2-4e7e-ba67-e45e05305fa6.gif)

**이슈 상세 페이지**

![screenshot2](https://user-images.githubusercontent.com/42020919/198911056-afe6c617-d139-450d-8b00-3af7204b4205.gif)

# **⚡️ Skills**


![React](https://img.shields.io/badge/react-%2320232a.svg?style=for-the-badge&logo=react&logoColor=%2361DAFB)
![Styled Components](https://img.shields.io/badge/styled--components-DB7093?style=for-the-badge&logo=styled-components&logoColor=white)
![JavaScript](https://img.shields.io/badge/javascript-%23323330.svg?style=for-the-badge&logo=javascript&logoColor=%23F7DF1E)
![axios](https://camo.githubusercontent.com/23392fa4fc3ffb6ade29cba7aaffa7741daeb97012c70a062cf2370187d6519e/68747470733a2f2f696d672e736869656c64732e696f2f62616467652f6178696f732d4646434132383f7374796c653d666f722d7468652d6261646765266c6f676f3d6178696f73266c6f676f436f6c6f723d7768697465)
![react-router-dom](https://camo.githubusercontent.com/59772064d7f01d32dfc280518690c95d858dce068a58be142b2ac003ef31642c/68747470733a2f2f696d672e736869656c64732e696f2f62616467652f72656163745f726f757465725f646f6d2d4341343234353f7374796c653d666f722d7468652d6261646765266c6f676f3d7265616374726f75746572266c6f676f436f6c6f723d7768697465)


# **🚀 기능요구사항**

- 필수 요구 사항
  - 이슈 목록 및 상세 화면 기능 구현
  - Context API를 활용한 API 연동
  - 데이터 요청 중 로딩 표시
  - 에러 화면 구현
  - 지정된 조건(open 상태, 코멘트 많은 순)에 맞게 데이터 요청 및 표시
  - 반응형 웹 구현(UI는 데스크톱, 모바일에서 보았을 때 모두 읽기 편하게 구현)
- 선택 사항
  - CSS-in-JS 적용

# 📦 파일 구조

```
📦src
 ┣ 📂api
 ┃ ┗ 📜api.js
 ┣ 📂assets
 ┣ 📂components
 ┃ ┣ 📜IssueHeader.jsx
 ┃ ┗ 📜IssueListItem.jsx
 ┣ 📂context
 ┃ ┗ 📜context.jsx
 ┣ 📂hooks
 ┃ ┗ 📜useAxios.js
 ┣ 📂pages
 ┃ ┣ 📂IssueList
 ┃ ┃ ┗ 📜index.jsx
 ┃ ┗ 📂IssueListDetail
 ┃ ┃ ┗ 📜index.jsx
 ┣ 📂styles
 ┃ ┣ 📜GlobalStyle.js
 ┃ ┗ 📜Theme.js
 ┣ 📂utils
 ┃ ┗ 📜axios.js
 ┣ 📜App.jsx
 ┗ 📜index.jsx
```

- 컴포넌트(components), 훅스(hooks), 상태관리(store), 함수(utils)로 직관적인 폴더명을 사용함으로써 구조 파악이 원활

# **👍 Best Practice**

## 1. 이슈 목록 화면


[GitHub API](https://docs.github.com/en/rest)를 사용하여 https://github.com/angular/angular-cli 프로젝트의 Issue 이슈 목록과 상세 내용을 불러옵니다

### 1-1. 광고 배너 노출

<img width="645" alt="image" src="https://user-images.githubusercontent.com/42020919/198911133-2a43f0cd-56b8-475e-90a9-5bb75b372499.png">

- 광고 삽입을 위한 useBanner 훅 설계하여 동적으로 광고를 삽입할 수 있도록 수정
- 코드 설계 방식

    
    ```jsx
    
    {insertBanner(issues.list.map((issue, idx) => <Issue key={issue.number} issue={issue} idx={idx} />))}
    
    function useBanner({ order, imgSrc, href }) {
      return (list) => {
        if (list.length < order - 1) {
          return list;
        }
        const bannerInsertedList = [...list];
        bannerInsertedList.splice(order - 1, 0, <Banner key={`banner-${order}`} imgSrc={imgSrc} href={href} />);
        return bannerInsertedList;
      };
    }
    
    ```
    
    ```jsx
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
    ```


### 1-2. 인피니트 스크롤

![scroll](https://user-images.githubusercontent.com/42020919/198911246-27b2f7a6-7424-4f78-8324-e7f15f3a5da7.gif)

- Intersection Observer API를 이용해 구현
- 화면을 아래로 스크롤 할 시 이슈 목록 추가 로딩



## 2. 이슈 목록 상세 화면


<img width="895" alt="image" src="https://user-images.githubusercontent.com/42020919/198911384-71359f41-cd2f-4675-9678-82bdb13ad4df.png">

- `react-markdown` 라이브러리를 통하여 이슈 상세 내용 표시
    
    ```jsx
    <MarkdownStyle>
      <Markdown>{issue?.body}</Markdown>
    </MarkdownStyle>
    ```
    
    - 추가적인 마크다운 스타일 구성
- 코드 설계 방식
    
    `git repository` API 구조상 issue리스트 에도 각각의 item에 내용(body) 파라미터가 지정되어 있어 body 값을 확인할 수 없을 때 HTTP 요청하도록 설계
    
    ```jsx
    const handleClick = () => {
      navigate(`/${number}`, { state: { ... } });
    };
    ```
    
    ```jsx
    useEffect(() => {
        if (!state) {
          getIssue(...);
        } else {
          setIssue(state);
        }
     }, []);
    ```

## **3. API 서버통신**
- 코드 설계 방식
  API에 필요한 파라미터와 토큰 값을 `axios`에서 제공하는 인터셉터를 통해 관리함으로써 \*\*추후 확장과 수정에 용이하도록 설계하였습니다.

  ```jsx
  getIssues(
      [],
      { state: 'open', sort: 'comments', per_page: 20, page: count },
      {
          onSuccess: (data) => {
                    ...
          },
          onError: (state) => {
            ...
          }
      }
  );
  ```

  ```jsx
  const DEFAULT_CONFIG = {
    baseURL: process.env.REACT_APP_BASE_URL,
    headers: {
      'Content-Type': 'application/json',
      Accept: 'application/vnd.github.v3+json',
      Authorization: `token ${process.env.REACT_APP_GITHUB_TOKEN}`,
    },
  };

  const issueAPI = {
    async getIssues(queryParams = {}) {
      axiosInstance.defaults.params = queryParams;
      const res = await axiosInstance.get('/issues');
      return res;
    },

    async getIssue(issueNumber, queryParams = {}) {
      axiosInstance.defaults.params = queryParams;
      const res = await axiosInstance.get(`/issues/${issueNumber}`);
      return res;
    },
  };
  ```

### **3-2. 에러메시지 처리**
![image](https://user-images.githubusercontent.com/42020919/198911496-5354ccee-a9bb-43ab-937c-7c5d60603e26.png)

- 코드 설계 방식
    - 올바르지 않은 경로 접근시 에러화면 구현
    - 상태코드와 에러메시지를 `useNavigate`의 state로 넘기고 `useLocation`으로 state를 받아와 화면에 렌더
    - 잘못된 접근 경로 또는 HTTP 통신 중 에러가 발생하였을 때 별도의 에러 페이지로 이동할 수 있도록 설계
    
    ```jsx
    //axios instance call
    getIssues(
      [],
      { ... },
      {
        onSuccess: data => {
    			...
        },
        onError: state => {
          navigate('/error', { state });
        },
      }
    );
    ```
    
    ```jsx
    function Error() {
      const { state } = useLocation();
      const navigate = useNavigate();
    
      const onClick = () => navigate(-2);
    
      if (!state) return <Navigate to="/" />;
    
      return (
        <Container>
          <span>{state?.status}</span> {state?.errorMsg}
          <Button type="button" onClick={onClick}>
            go back
          </Button>
        </Container>
      );
    }
    
    	export default Error
    ```


## **4. 스타일**

### 4-1. 반응형 구현

![media](https://user-images.githubusercontent.com/42020919/198911406-98eb3547-8ee0-4c74-8646-d76ba82daf3b.gif)

- 기존 깃허브 UI를 기반으로 한 UI 구성
- 데스크탑과 모바일 사용 환경을 고려해 미디어 쿼리 사용

### 4-2. **GlobalStyle, theme**

```jsx
const GlobalStyles = createGlobalStyle` 

  body {
    ${flexBox('column', 'center', 'center')};
    overflow-x: hidden;
    margin: 0;
  }

  a{
      text-decoration: none;
      color: inherit;
  }
  *{
      box-sizing: border-box;
  }
  input, textarea { 
    -moz-user-select: auto;
    -webkit-user-select: auto;
    -ms-user-select: auto;
    user-select: auto;
  }
  input:focus {
    outline: none;
  }

  button {
    border: none;
    background: none;
    padding: 0;
    cursor: pointer;
  }
`;
```

```jsx
export const flexBox = (direction = 'row', justify = 'center', align = 'center') => css`
  display: flex;
  flex-direction: ${direction};
  justify-content: ${justify};
  align-items: ${align};
`;
```

```jsx
const colors = {
  backgroundColor: '#F6F8FA',
  borderColor: '#D0D7DE',
  pointColor: '#0969DA',
  grayColor: '#848B92',
};

export default colors;
```

- Styled Components 전역 스타일링을 사용하여 중복되는 스타일 코드 관리
- mixin 파일에서 기본적인 `flex` 스타일과 화면 크기 조정
- `theme` 을 사용하여 메인컬러 관리

## **5. 상태관리**


- <b>useContext()</b>를 사용하여 효율적인 props 전달
```jsx
import { createContext, useCallback, useMemo, useState } from 'react';

const IssuesContext = createContext();

function IssuesProvider({ children }) {
  const [issues, setIssues] = useState([]);

  const set = useCallback(issues => {
    setIssues(issues);
  }, []);

  const add = useCallback(nextIssues => {
    setIssues(cur => [...cur, ...nextIssues]);
  }, []);

  const value = useMemo(() => ({ list: issues, add, set }), [issues]);

  return <IssuesContext.Provider value={value}>{children}</IssuesContext.Provider>;
}

export { IssuesProvider, IssuesContext };
```


## **6.** 로딩처리

```jsx
const [loading, setLoading] = useState(true);

...

useEffect(() => {
    setLoading(true);
    getIssues(
      [],
      { state: 'open', sort: 'comments', per_page: 20, page: count },
      {
        onSuccess: data => {
          if (count === 1) issues.set(data);
          else issues.add(data);
          setLoading(false);
        },
        onError: state => {
          navigate('/error', { state });
        },
      }
    );
  }, [count]);

...

{loading && (
        <LoadingContainer>
          <LoadingSpinner />
        </LoadingContainer>
      )}
```

- 데이터 요청 중 로딩 표시

# **📢 프로젝트 실행방법**

실행할 때 반드시 다음 파일을 최상단에 생성후 실행 해주셔야 합니다.

```jsx
// .env.local
REACT_APP_BASE_URL = 서버주소
REACT_APP_GITHUB_TOKEN = 깃허브 토큰
```

```jsx
// 설치
npm install

// 실행
npm start
```

# **📚 팀 규칙**

- **📕 Git commit convention**
  | rule | 설명 |
  | -------- | -------------------------------------------------------- |
  | Feat | 새로운 기능 추가 |
  | Fix | 버그 고친 경우 |
  | Design | css 수정 |
  | Chore | 빌드 업무 수정, 패키지 매니저 수정 |
  | !HOTFIX | 급하게 치명적인 버그를 고쳐야하는 경우 |
  | Docs | 문서 수정 |
  | Style | 코드 formatting, 세미콜론(;) 누락, 코드 변경이 없는 경우 |
  | Rename | 파일 및 폴더 구조 변경 |
  | Refactor | 코드 리팩토링 |
  | Test | 테스트 코드, 리팩토링 테스트 코드 추가 |
  | Remove | 파일 삭제 |
  | Modify | 코드 단순 수정 |
- **📘 Git branch strategy**main (배포/운영) ← develop (통합 개발) ← feat-개발내용 (단위 개발)

# **📝 문서**

[회의록](https://www.notion.so/2022-10-27-35dcd07cf811402686f2b318e62a6792)

