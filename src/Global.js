import styled from 'styled-components'

export const ContainerApp = styled.div `
  div {
    text-align: center;
  }
`
export const ContainerModal = styled.form `
  display: flex ;
  flex-direction: column ;
  width: 100%;

  h2 {
    text-align: center ;
    margin: 2rem 0 .5rem 0;
    text-transform: uppercase ;
    letter-spacing: 1px ;
  }

  .line-title {
    width: 100% ;
    height: 2px ;
    background: #00000030 ;
    margin-bottom: 2rem ;
  }

  input,textarea {
    font-size: .9rem ;
    font-weight: 400 ;
    padding: 1rem 0 0 1rem  ;
    border-radius: .25rem ;
    border:0 ;

    &::placeholder {
      font-size: .8rem ;
      font-weight: bold ;
    }

    &:focus {
      outline:0 ;
      box-shadow: 0px 0px 5px #000 ;
      border: none;
      border-radius: .3rem ;
    }

  }
  .modal-time {
    display: flex ;
    align-items: center ;
    margin: 1rem 0 2rem 0 ;
  
    .input-time {
      width: 7rem ;
      min-width: 4.5rem ;
      margin-right: .5rem ;
      padding: .5rem;
    }

    .modal-time-format {  
      display: flex ;
      flex-direction: row ;
      align-items: center;



      p {
        display: block ;
        margin: 0 1rem 0 .5rem;
      }
    }   
    
  }

  button {
    font-size: 1rem ;
    font-weight: bold;
    padding: .7rem ;
    border-radius: .25rem ;
    margin: 0 auto;
    width: 80%;
    border: none ;
    background: #8800dd;
    color: #fff;
    border: 1px solid #8800dd ;
    transition: ease-in-out .3s;
    text-transform: uppercase;

    &:hover {
    background-color: #fafafa ;
    box-shadow: 0px 3px 2px 1px #8800dd ;
    color: #000;
    transition: linear .3s ;
    }

  }


`
