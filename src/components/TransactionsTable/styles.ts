import styled from "styled-components";

export const TransactionsTableConteiner = styled.div`
  margin-top: 4rem;

  table {
    width: 100%;
    border-spacing: 0 0.5rem;

    th {
      color: ${({ theme }) => theme.textBody};
      font-weight: 400;
      padding: 1rem 2rem;
      text-align: left;
      line-height: 1.5rem;
    }

    td {
      padding: 1rem 2rem;
      border: 0;
      background: ${({ theme }) => theme.shape};
      color: ${({ theme }) => theme.textBody};
      border-radius: 0.25rem;

      &:first-child {
        color: ${({ theme }) => theme.textTitle};
      }

      &.deposit {
        color: ${({ theme }) => theme.green};
      }

      &.withdraw {
        color: ${({ theme }) => theme.red};
      }
    }
  }
`;
