import styled from "styled-components";

export const Container = styled.div `
  background-color: #fafafa ;
  max-width: 70% ;
  margin: 2.5rem auto;
  border-radius: 1rem ;
  box-shadow: 1px 5px 10px 1px #8800dd80 ;
  transition: 1s;

  .header-list {
    display: flex ;
    justify-content: space-between;
    align-items: center;
    padding: 1rem;

    h3 {
      margin: 0;
    }
    .icon-add{
      animation: loading 1s linear infinite;
      cursor: pointer ;

      :hover {
        animation: none ;
      }
    }
    @keyframes loading {
	0% {
		transform: translateY(0px);

	}
	25% {
		transform: translateY(-3px);


	}
	50% {
		transform: translateY(0px);
	}
	75% {
		transform: translateY(3px);

	}
	100% {
		transform: translateY(0px);
    transform: rotate(-90deg);

	}
  
}
  }

  @media (max-width:720px) {
    max-width: 90% ;
    transition: 1s;
  }
`