import styled from 'styled-components'

export const Container = styled.header `
    background: #8800dd;
    width: 100%;
    height: 10rem;
    position: relative ;

  .circle {
    width: 10rem;
    height: 10rem;
    background-color: #fafafa60 ;
    clip-path: circle() ;
    position: absolute ;
    margin: -3rem 0 0 -3rem ;
  }

  .logout {
    display: flex ;
    align-items: center ;
    justify-content: center;
    position: absolute ;
    right: 1rem ;
    top: 1rem;
    background: #ffffff80 ;
    padding: .2rem .2rem .2rem .5rem;
    border-radius: .3rem;
    transition: linear .2s ;

    &:hover {
      background: #fafafa ;
    }

    button {
      text-transform: uppercase ;
      font-weight: bold ;
      background: none ;
      border: 0 ;
      color: #000 ;
      margin: 0 ;
      padding: .3rem ;
    }
  }

  .person {
    width: 60% ;
    height: 10rem ;
    position: absolute ;
    bottom: 0;
    right: 20% ;
    margin-bottom: -1.5rem;
    display: flex ;
    align-items: center ;
    flex-direction: column;
  }
  
  .avatar {
    background: #fafafa ;
    width: 100% ;
    height: 8rem ;
    clip-path: circle();
    position: absolute;

    img {
      width: 8.1rem ;
     
    }

  }

  .person-name {
    background-color: #fafafa ;
    min-width: 90% ;
    height: 3rem;
    border-radius: 1rem;
    box-shadow: 0px 3px 2px 1px #8800dd ;

    display: flex;
    align-items: center ;
    justify-content:  center;
    padding: 0 1rem ;
    position: absolute ;
    bottom: 0;

    h3 {
      margin: 0 ;
    }
  }
`