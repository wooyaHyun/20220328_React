
// npm i styled-components      css가 적용된 Element를 생성할 수 있다
// npm i reactstrap             css가 적용된 Element를 가져와 사용(Build IN)
// npm i react-icons            icon 가져다 사용

import React from 'react'
import { Button as Btn, Card, CardBody, CardText, CardTitle, CardSubtitle} from 'reactstrap'
import {Box, Button} from './css/A04Styled'
import { MdAndroid } from 'react-icons/md'

/*
import styled from 'styled-components'

// div를 상속받아 기술한 CSS를 추가한 div 태그를 생성
const Box = styled.div`
    background-color: ${props => props.color || 'lightgray' };
    color: white;
    font-size: 24pt;
    padding: 10px;
    font-weight: bold;
`
const Button = styled.button`
    background-color: ${props => props.color || 'lightgray' };
    color: white;
    padding: 4px;
    font-weight: bold;
    border: 1px solid gray;

    &:hover {
        background-color: white;
        color: gray;
    }
    & + & {
        margin: 5px;
    }
`
*/

function A04StyledComponent() {
    return (
        <div>
            <h3>A04 Styled Component</h3>

            <Box color="orange">This is Box Element</Box>
            <Box>This is Box Element</Box>
            <Button>CLICK</Button>
            <Button>CLICK</Button>
            <br />
            <br />

            <Btn>CLICK</Btn>
            <Btn color="primary">CLICK</Btn><br />
            {/* <Alert>Hello World</Alert> */} {/* 이 컴퍼넌트 자체가 에러 */}
            <Card>
                <CardBody>
                    <CardTitle tag="h5">
                        Card title
                    </CardTitle>
                    <CardSubtitle className="mb-2 text-muted" tag="h6">
                        Card subtitle
                    </CardSubtitle>
                    <CardText>
                        Some quick example text to build on the card title and make up the bulk of the card's content.
                    </CardText>
                    <Button>
                        Button
                    </Button>
                </CardBody>
            </Card>
            <br />

            <MdAndroid style={{fontSize: '24pt', color: 'orange'}} />
        </div>
    )
}

export default A04StyledComponent
