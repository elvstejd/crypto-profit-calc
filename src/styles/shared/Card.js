import styled from "styled-components";

export const Card = styled.div`
    background-color: var(--primary-300);
    padding: 2rem;
    display: flex;
    flex-direction: column;
    border-radius: var(--border-radius-md);
    overflow: hidden;

    @media (min-width: 590px) {
        border: 1px solid var(--primary-200)
    }
`;
