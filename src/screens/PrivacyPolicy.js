import React from 'react';
import { styled } from "@mui/material/styles";
import { letterSpacing } from '@mui/system';


const Container = styled('div')(({ theme }) => ({
    // border: "1px solid black",
    height: "88vh",
    maxHeight: "fit-content",
}))

const View = styled('div')(({ theme }) => ({
    // border: "1px solid black",
    maxWidth: "66ch",
    margin: "auto",
    padding: '20px',
    // boxSizing: "border-box",
}))

const Title = styled('div')(({ theme }) => ({
    // border: "1px solid black",
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
    margin: '0 0 15px',
    fontSize: '17px',
    fontFamily: "'Roboto', sans-serif",
}))


const ParaGraphArray = [{
    content: 'Pets Centric Private Limited a private limited company with its registered office at 112, 11th Cross, 4th Sector, HSR Layout, Bangalore, Karnataka, India, 560102 operates the website www.supertails.com (hereinafter referred to as the "Platform"). The Company is committed to protecting Your privacy and the information that You share while using the Platform. We value the trust You place in Us. That’s why We maintain the highest security standards for securing the transactions and Your information.'
}, {
    content: 'This privacy policy specifies the manner in which personal data and other information is collected, received, stored, processed, disclosed, transferred, dealt with, or otherwise handled by the Company. This Privacy Policy does not apply to information that You provide to, or that is collected by, any third-party through the Platform, and any Third-Party Sites (defined below) that You access or use in connection with the Services offered on the Platform.'
}, {
    content: 'Please read the Privacy Policy carefully prior to using or registering on the Platform or accessing any material, information or availing any Services through the Platform.'
}, {
    content: 'Please read the Privacy Policy carefully prior to using or registering on the Platform or accessing any material, information or availing any Services through the Platform.'
}]

const collectionOfInformation = [{
    title: 'Collection of Information',
    basicInfo: '',
    infoPoints: [
        `You may provide or the Company may collect certain personal information while You register on the Platform and/or use the Services. This includes: (a) Your name, electronic mail address, password, IP address, billing address, shipping address and other relevant details; (b) Your content, received, uploaded or posted using the Platform, including messages, images, videos and feedback; (c) any information provide by You while availing customer support, and (d) information You choose to upload, sync or import from the device on which the Platform is being used `,
        `The Company may collect non-personal information relating to Your activities while accessing the Service or other information from and about the devices through which the Platform is used including SDK/API/JS code version, browser, internet service provider, operating system, browser type, cookie information, timestamp, application identifier, application version, application distribution channel, independent device identifier, Android ad master identifier, network card (MAC) address, and international mobile device identification code (IMEI)`
    ],
    ExtraInfo: '',
},
{
    title: 'Usage of Information',
    basicInfo: 'The information as specified in Clause 1, may be used by the Company for the following purposes:',
    infoPoints: [
        "for Your registration, login, and management of account on the Platform",
        "to confirm Your identity directly and/or through third parties;",
        "to provide You Services and improve the Services",
        "remembering Your Personal Information so that You are not required to re-enter it the next time You visit the Platform",
        "to understand Your preferences and to enhance and customize Your experience of using the Service and the Platform",
    ],
    ExtraInfo: `The data gathered from You may also be used for any reason incidental to the reasons listed above; and for any other purpose with Your consent. We use Your Personal Information to send You promotional emails, however, We will provide You the ability to opt-out of receiving such emails from Us. However, You will not be able to opt-out of receiving administrative messages, customer service responses or other transactional communications. Unless and until, You explicitly give Your consent to Us, to do so, We will not share Your Personal Information with another user of the Platform and vice versa.`
}
]



function PrivacyPolicy() {



    return (
        <Container>
            <View>
                <Title>Privacy policy</Title>
                <div>
                    {
                        ParaGraphArray.map((data) => (
                            <>
                                <>
                                    <ParaGraph>
                                        {data.content}
                                    </ParaGraph>
                                    <ParaGraph>
                                        &nbsp;
                                    </ParaGraph>
                                </>
                            </>
                        ))
                    }
                    <>
                        {collectionOfInformation.map((data, index) => (
                            <div key={index}>
                                <ol>
                                    <InfoList>{data.title}</InfoList>
                                </ol>
                                {data.basicInfo && <ParaGraph>{data.basicInfo}</ParaGraph>}
                                <ul>
                                    {
                                        data.infoPoints.map((item, index) => (
                                            <InfoList key={index}>{item}</InfoList>
                                        ))
                                    }
                                </ul>
                            </div>
                        ))
                        }
                    </>
                </div>

            </View>
        </Container>
    )
}

export default PrivacyPolicy ;