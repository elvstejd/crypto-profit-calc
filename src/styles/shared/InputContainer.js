import styled from "styled-components";

export const InputContainer = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
    background-color: var(--primary-500);
    border-radius: 6px;
    padding: 0.5rem 1rem;
    border: 1px solid var(--primary-200);
    transition: .3s ease;
    span {
        display: flex;
        align-items: center;
    }

    &:focus-within {
        border: 1px solid var(--accent-500);
        outline: 3px solid var(--accent-alpha);
    }
`;
