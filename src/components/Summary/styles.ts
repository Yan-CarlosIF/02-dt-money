import styled from "styled-components";

export const SummaryConteiner = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 2rem;
  margin-top: -6.5rem;

  div {
    background: ${({ theme }) => theme.shape};
    padding: 1.5rem 2rem;
    border-radius: 0.25rem;
    color: ${({ theme }) => theme.textTitle};

    header {
      display: flex;
      align-items: center;
      justify-content: space-between;
    }

    strong {
      display: block;
      margin-top: 1rem;
      font-size: 2rem;
      font-weight: 500;
      line-height: 3rem;
    }

    &.highlight-background {
      background: ${({ theme }) => theme.green};
      color: #fff;
    }
  }
`;
