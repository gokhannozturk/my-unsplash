import React from "react";
import styled from "styled-components";

import Navigation from "./components/Navigation";
import Button from "./components/Button";

const MainWrapper = styled.section`
  width: 100%;
  max-width: 1350px;
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin-top: 0.5rem;
`;

const PaginationWrapper = styled.div`
  display: flex;
  width: 100%;
  align-items: center;
  justify-content: ${({ page }) => {
    if (page === "first") return "flex-end";
    else if (page === "middle") return "space-between";
    else return "flex-start";
  }};
`;

function App() {
  return (
    <MainWrapper>
      <Button buttonStyle="primary" buttonSize="large">
        Add a photo
      </Button>
      <Button buttonStyle="primary" buttonSize="small">
        Add a photo
      </Button>
      <Button buttonStyle="primary">Add a photo</Button>
      <Button buttonStyle="secondary" buttonSize="large">
        Add a photo
      </Button>
      <Button buttonStyle="secondary" buttonSize="small">
        Add a photo
      </Button>
      <Button buttonStyle="secondary">Add a photo</Button>
      <Button buttonSize="large">Delete</Button>
      <Button buttonSize="small">Delete</Button>
      <Button>Cancel</Button>
    </MainWrapper>
  );
}

export default App;
