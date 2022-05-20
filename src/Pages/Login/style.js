import styled from 'styled-components'

export const Container = styled.div `
  display: flex ;
  flex-direction: column ;
  justify-content: center ;
  align-items: center ;
  height:80vh ;
  width: 100% ;
  
  main {
    width: 500px ;
    max-width: 70%;
    background: yellow;
    padding: 2rem;
    margin: 0 ;
    background-color: #fafafa ;
    border-radius: 1rem;
    box-shadow: 0px 3px 5px 3px #8800dd ;

    div {
      display: flex ;
      align-items: center ;
    }
  }

  h1 {
    text-align: center ;
    margin: 0 0 1.5rem 0;
  }

  h5 {
    margin: .5rem 0 .5rem .5rem;
    font-size: 1rem ;
  }

  form {
    display: flex;
    flex-direction:column ;
    margin-bottom: 1.5rem ;

    input, button {
      margin: 0 0 .5rem 0;
      padding: .5rem ; 
      border: none ;
      cursor: pointer ;

      &::placeholder {
        font-size: .8rem ;
        font-weight: bold ;
      }

      &:focus {
        outline: 0 ;
      }
    }
    input {
      border-bottom: 1px solid black;
      border-radius: 0 ;
      transition: ease-in-out .2s;
      
      
      &:hover {
        border-bottom: 2px solid black;
        transition: ease-in-out .2s;
      }

      &:focus {
        box-shadow: 0px 0px 5px #000 ;
        border: none;
        border-radius: .3rem ;
        font-size: .8rem;
        font-weight: bold ;
        letter-spacing: 1px ;
      }
    }

    button {
      background: #8800dd30 ;
      border: none ;
      border-radius: .3rem ;
      font-size: .8rem ;
      font-weight: bold ;
      text-transform: uppercase ;
      color: #000;
      transition: linear .2s ;

      &:hover {
        box-shadow: 0px 1px 2px 2px #8800dd ;
      }
    }
  }

`
