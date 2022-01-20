import styled from 'styled-components';

export const preset = {
    color: {
        main: '#1A1A1D',
        topHeader: '#950740',
        subTopHeader: '#6F2232',
        sectionHeader: '#C3073F',
        sectionInfo: '#4E4E50'
        
    }

};

export const Text = styled.div`
    font-family: Roboto;
    font-weight: 400;
    font-size: 18px;
    margin: .5rem 1rem;
    @media screen and (min-width: 900px) {
        font-size: 28px;
        margin: .5rem 0;
    }
    line-height: 1.5rem;
    
    color: ${preset.color.sectionHeader};
`;

export const Grid = styled.div`
    position: relative;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: stretch;
    margin: 2rem 1rem;
`;

export const Row = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    min-height: 100px;
    margin: 1rem 0;
    @media screen and (min-width: 500px) {
        flex-direction: row;
        margin: 3rem 0;
    }
`;

export const ItemOne = styled.div`
    display: flex;
    flex-direction: column;
    position: relative;
    align-self: flex-start;
`;

export const ItemTwo = styled.div`
    align-self: flex-end;
    display: flex;
    flex-direction: column;
    align-items: center;
    position: relative;
`;

export const ItemThree = styled.div`
    @media screen and (max-width: 900px) {
        width: 100%;
        display:flex;
        justify-content: center;
    }
`;

export const Info = styled.div`
    font-size: 16px;
    color: ${preset.color.sectionInfo};



    @media screen and (min-width: 900px) {
        font-size: 24px;
    }
`;

export const Atag = styled.a`
    font-size: 16px;
    color: ${preset.color.sectionInfo};


    @media screen and (min-width: 900px) {
        font-size: 24px;
    }
`;

export const CRow = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: space-evenly;
    min-height: 100px;
    @media screen and (min-width: 500px) {
        flex-direction: row;
    }
    
`;

export const Message = styled.div`
    @media screen and (min-width: 900px) {
        position: absolute;
        top: 8px;
        right: 10px;
        transform: rotate(30deg);
        max-width: 300px;
    }
    text-shadow: #01ff13 1px 0 1px;
    font-family: Roboto;
    font-weight: 400;
    font-size: 20px;
    line-height: 1;
    color: #e6e7e9;
    max-width: 60%;

    color: #c6e2ff;
    animation: neontwo .08s ease-in-out infinite alternate;
    @keyframes neontwo {
        from {
          text-shadow:
          0 0 6px rgba(202,228,225,0.92),
          0 0 30px rgba(202,228,225,0.34),
          0 0 12px rgba(30,132,242,0.52),
          0 0 21px rgba(30,132,242,0.92),
          0 0 34px rgba(30,132,242,0.78),
          0 0 54px rgba(30,132,242,0.92);
        }
        to {
          text-shadow:
          0 0 6px rgba(202,228,225,0.98),
          0 0 30px rgba(202,228,225,0.42),
          0 0 12px rgba(30,132,242,0.58),
          0 0 22px rgba(30,132,242,0.84),
          0 0 38px rgba(30,132,242,0.88),
          0 0 60px rgba(30,132,242,1);
        }
      }
`;

export const Title = styled.div`
    font-size: 2rem;
    margin: 1rem 0;
    @media screen and (min-width: 900px) {
        font-size: 5rem;
        margin: 3rem 0;
    }
    text-align: center;
    
    line-height: 1;
    color: ${preset.color.topHeader};
    // animation: neon .08s ease-in-out infinite alternate;
    // @keyframes neon {
    //     from {
    //       text-shadow:
    //       0 0 6px rgba(200, 116, 247,0.92),
    //       0 0 30px rgba(200, 116, 247,0.34),
    //       0 0 12px rgba(176,38,225,0.52),
    //       0 0 21px rgba(176,38,225,0.92),
    //       0 0 34px rgba(176,38,225,0.78),
    //       0 0 54px rgba(176,38,225,0.92);
    //     }
    //     to {
    //       text-shadow:
    //       0 0 6px rgba(200, 116, 247,0.98),
    //       0 0 30px rgba(200, 116, 247,0.42),
    //       0 0 12px rgba(176,38,225,0.58),
    //       0 0 22px rgba(176,38,225,0.84),
    //       0 0 38px rgba(176,38,225,0.88),
    //       0 0 60px rgba(176,38,225,1);
    //     }
    //   }
`;
//202,228,225
export const SubTitle = styled.div`
    color: ${preset.color.subTopHeader};
    font-size: 1rem;
    @media screen and (min-width: 900px) {
        font-size: 2rem;
    }
    // animation: 0.1s shake infinite alternate;
    // width: 80%;
    // @keyframes shake {
    //     0% { transform: skewX(-15deg); }
    //     5% { transform: skewX(15deg); }
    //     10% { transform: skewX(-15deg); }
    //     15% { transform: skewX(15deg); }
    //     20% { transform: skewX(0deg); }
    //     100% { transform: skewX(0deg); }
`;

export const Simg = styled.img`
    max-width: 200px;
    margin: .5rem 0;
    align-self: center;
`;