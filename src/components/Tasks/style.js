import styled from "styled-components";

export const Container = styled.div `
  
  .task {
    display: grid ;
    grid-template-columns: 20px 10px 60px 9fr ;
    grid-gap: .5rem ;
    align-items: center ;
    justify-content: left ;
    padding: 0 1rem ;
    margin: 0 ;
    font-weight: bold ;
    text-align: justify ;
  }

  .task-icon {
    cursor: pointer;
  }

  .task-time {
    margin-left: 1rem ;
  }

  p {
    margin-left: 1rem ;
  }

  .completed {
    text-decoration: line-through wavy blue;
    -webkit-text-decoration-color: red; /* Safari */  
    text-decoration-color: red;
    text-shadow: 1px 1px 5px black ;
  }
`