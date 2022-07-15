import React from 'react';
import { styled } from "@mui/material/styles";
import { ParaGraphArray, collectionOfInformation, policyContent,  BasicInfo   } from "../component/PrivacyPolicayData"


const Container = styled('div')(({ theme }) => ({
    height: "88vh",
    maxHeight: "fit-content",
}))

const View = styled('div')(({ theme }) => ({
    maxWidth: "66ch",
    margin: "auto",
    padding: '20px',
}))

const Title = styled('div')(({ theme }) => ({
    fontSize: "calc(30px * 0.85)",
    fontFamily: "'Roboto', sans-serif",
    textAlign: 'center',
    fontWeight: '400px',
    margin: '0 0 15px',
    letterSpacing: '0.0em',
}))

const InfoList = styled('li')(({ theme }) => ({
    margin: '0 0 15px',
    fontSize: '17px',
    fontFamily: "'Roboto', sans-serif",
}))


const ParaGraph = styled('p')(({ theme }) => ({
    margin: '0 0 45px',
    fontSize: '17px',
    fontFamily: "'Roboto', sans-serif",
}))


function PrivacyPolicy() {

    return (
        <Container>
            <View>
                <Title>Privacy policy</Title>
                <div>
                    {
                        ParaGraphArray.map((content) => (
                            <>
                                <>
                                    <ParaGraph>
                                        {content}
                                    </ParaGraph>

                                </>
                            </>
                        ))
                    }

                    {collectionOfInformation.map((data, index) => (
                        <div key={index}>
                            <ol>
                                <InfoList><strong>{data.title}</strong></InfoList>
                            </ol>
                            {data.basicInfo && <ParaGraph>{data.basicInfo}</ParaGraph>}
                            <ul>
                                {
                                    data.infoPoints.map((item, index) => (
                                        <InfoList key={index}>{item}</InfoList>
                                    ))
                                }
                            </ul>
                            {data.basicInfo && <ParaGraph>{data.ExtraInfo}</ParaGraph>}

                        </div>
                    ))
                    }

                    {policyContent.map((data,index)=>(
                        <div key={index}>
                            <ol>
                                <InfoList><strong>{data.title}</strong></InfoList>
                            </ol>
                            {data.content && (
                            <ul>
                                <InfoList>{data.content}</InfoList>
                            </ul>)
                            }
                            {data.information && <ParaGraph>{data.information}</ParaGraph>}
                            
                        </div>
                    ))

                    }

                    {
                       BasicInfo.map((data,index)=>(
                        <div key={index}>
                            <ol>
                              <InfoList><strong>{data.title}</strong></InfoList>
                            </ol>
                          {data.content.map((item, index )=>(
                             <ParaGraph key={index}>{item}</ParaGraph>
                          ))}
                            
                        </div>
                       ))
                    }

                </div>

            </View>
        </Container>
    )
}

export default PrivacyPolicy;