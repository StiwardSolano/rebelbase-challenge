import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import DatePicker from "react-datepicker";
import {useState} from 'react';
import Draggable from 'react-draggable';
import { HddRack, Circle } from 'react-bootstrap-icons';
import "react-datepicker/dist/react-datepicker.css";

const ListItems = () =>{
    const [startDate, setStartDate] = useState(new Date());
    const [imgTemp, setImgTemp] = useState('/cardImage.png');
    const [showing, setShowing] = useState(true);
    const [radioColour, setRadioColour] = useState(true);
    const [dragColour, setDragColour] = useState(false);

    const [imgTemp1, setImgTemp1] = useState('/cardImage.png');
    const [showing1, setShowing1] = useState(true);
    const [radioColour1, setRadioColour1] = useState(true);
    const [dragColour1, setDragColour1] = useState(false);

    const [imgTemp2, setImgTemp2] = useState('/cardImage.png');
    const [showing2, setShowing2] = useState(true);
    const [radioColour2, setRadioColour2] = useState(true);
    const [dragColour2, setDragColour2] = useState(false);

    const [imgTemp3, setImgTemp3] = useState('/cardImage.png');
    const [showing3, setShowing3] = useState(true);
    const [radioColour3, setRadioColour3] = useState(true);
    const [dragColour3, setDragColour3] = useState(false);

    const handleHoover = (e) => {
        e.preventDefault();
        setDragColour(!dragColour);
    }
    
    const handleDate = (e) => {
        e.preventDefault();
        setShowing(!showing);
        setRadioColour(!radioColour);
        if(imgTemp === '/cardImage.png'){setImgTemp('/cardImage1.png');}else{
            setImgTemp('/cardImage.png');
        }
    }

    const handleHoover1 = (e) => {
        e.preventDefault();
        setDragColour1(!dragColour1);
    }
    
    const handleDate1 = (e) => {
        e.preventDefault();
        setShowing1(!showing1);
        setRadioColour1(!radioColour1);
        if(imgTemp1 === '/cardImage.png'){setImgTemp1('/cardImage1.png');}else{
            setImgTemp1('/cardImage.png');
        }
    }

    const handleHoover2 = (e) => {
        e.preventDefault();
        setDragColour2(!dragColour2);
    }
    
    const handleDate2 = (e) => {
        e.preventDefault();
        setShowing2(!showing2);
        setRadioColour2(!radioColour2);
        if(imgTemp2 === '/cardImage.png'){setImgTemp2('/cardImage1.png');}else{
            setImgTemp2('/cardImage.png');
        }
    }

    const handleHoover3 = (e) => {
        e.preventDefault();
        setDragColour3(!dragColour3);
    }
    
    const handleDate3 = (e) => {
        e.preventDefault();
        setShowing3(!showing3);
        setRadioColour3(!radioColour3);
        if(imgTemp3 === '/cardImage.png'){setImgTemp3('/cardImage1.png');}else{
            setImgTemp3('/cardImage.png');
        }
    }

    return(
    <Container fluid className="containerMagic">
        <Draggable axis="y" bounds="body">
        <Row >
            <Col sm="auto" className="dragButton">
                <HddRack size={26} style={{color: (dragColour ? "green" : "gray" )}} onMouseOver={handleHoover}/>
            </Col>
            <Col md="auto" className="radious" onClick={handleDate}>
                <Circle size={26} style={{ color: (radioColour ? "green" : "gray" )}}/>
            </Col>
            <Col sm onClick={handleDate}>
                <Row className="rectangule">
                    Problem
                </Row>
                <Row className="rectangule">
                    <a href="·">ViewBuilder</a>
                </Row>
            </Col>
            <Col sm className="imgContainer" onClick={handleDate}>
                <img src={imgTemp} width="40%" alt="canvas"/>
            </Col>
            <Col style={{ display: (showing ? "block" : "none" )}}>
            <Row className="d-flex">
                <Col className="p-2">
                    <DatePicker
                        todayButton="Today's Date"
                        placeholderText="MMM DD, YYY"
                        dateFormat="MMM dd, yyy"
                        selected={startDate}
                        portalId="root-portal"
                        sm="auto"
                        onChange={date => setStartDate(date)}
                    />
                </Col>
                <Col className="p-2">
                    <DatePicker
                        selected={startDate}
                        showTimeSelect
                        showTimeSelectOnly
                        timeIntervals={15}
                        timeCaption="Time"
                        dateFormat="h:mm aa"
                        portalId="root-portal"
                        onChange={date => setStartDate(date)}
                    />
                </Col>
            </Row>
            </Col>
        </Row>
        </Draggable>
        <Draggable axis="y" bounds="body">
        <Row >
            <Col sm="auto" className="dragButton">
                <HddRack size={26} style={{color: (dragColour1 ? "green" : "gray" )}} onMouseOver={handleHoover1}/>
            </Col>
            <Col md="auto" className="radious" onClick={handleDate1}>
                <Circle size={26} style={{ color: (radioColour1 ? "green" : "gray" )}}/>
            </Col>
            <Col sm onClick={handleDate1}>
                <Row className="rectangule">
                    Solution
                </Row>
                <Row className="rectangule">
                    <a href="·">ViewBuilder</a>
                </Row>
            </Col>
            <Col sm className="imgContainer" onClick={handleDate1}>
                <img src={imgTemp1} width="40%" alt="canvas"/>
            </Col>
            <Col style={{ display: (showing1 ? "block" : "none" )}}>
            <Row className="d-flex">
                <Col className="p-2">
                    <DatePicker
                        todayButton="Today's Date"
                        placeholderText="MMM DD, YYY"
                        dateFormat="MMM dd, yyy"
                        selected={startDate}
                        portalId="root-portal"
                        sm="auto"
                        onChange={date => setStartDate(date)}
                    />
                </Col>
                <Col className="p-2">
                    <DatePicker
                        selected={startDate}
                        showTimeSelect
                        showTimeSelectOnly
                        timeIntervals={15}
                        timeCaption="Time"
                        dateFormat="h:mm aa"
                        portalId="root-portal"
                        onChange={date => setStartDate(date)}
                    />
                </Col>
            </Row>
            </Col>
        </Row>
        </Draggable>
        <Draggable axis="y" bounds="body">
        <Row >
            <Col sm="auto" className="dragButton">
                <HddRack size={26} style={{color: (dragColour2 ? "green" : "gray" )}} onMouseOver={handleHoover2}/>
            </Col>
            <Col md="auto" className="radious" onClick={handleDate2}>
                <Circle size={26} style={{ color: (radioColour2 ? "green" : "gray" )}}/>
            </Col>
            <Col sm onClick={handleDate2}>
                <Row className="rectangule">
                    Team
                </Row>
                <Row className="rectangule">
                    <a href="·">ViewBuilder</a>
                </Row>
            </Col>
            <Col sm className="imgContainer" onClick={handleDate2}>
                <img src={imgTemp2} width="40%" alt="canvas"/>
            </Col>
            <Col style={{ display: (showing2 ? "block" : "none" )}}>
            <Row className="d-flex">
                <Col className="p-2">
                    <DatePicker
                        todayButton="Today's Date"
                        placeholderText="MMM DD, YYY"
                        dateFormat="MMM dd, yyy"
                        selected={startDate}
                        portalId="root-portal"
                        sm="auto"
                        onChange={date => setStartDate(date)}
                    />
                </Col>
                <Col className="p-2">
                    <DatePicker
                        selected={startDate}
                        showTimeSelect
                        showTimeSelectOnly
                        timeIntervals={15}
                        timeCaption="Time"
                        dateFormat="h:mm aa"
                        portalId="root-portal"
                        onChange={date => setStartDate(date)}
                    />
                </Col>
            </Row>
            </Col>
        </Row>
        </Draggable>
        <Draggable axis="y" bounds="body">
        <Row >
            <Col sm="auto" className="dragButton">
                <HddRack size={26} style={{color: (dragColour3 ? "green" : "gray" )}} onMouseOver={handleHoover3}/>
            </Col>
            <Col md="auto" className="radious" onClick={handleDate3}>
                <Circle size={26} style={{ color: (radioColour3 ? "green" : "gray" )}}/>
            </Col>
            <Col sm onClick={handleDate3}>
                <Row className="rectangule">
                    Team
                </Row>
                <Row className="rectangule">
                    <a href="·">ViewBuilder</a>
                </Row>
            </Col>
            <Col sm className="imgContainer" onClick={handleDate3}>
                <img src={imgTemp3} width="40%" alt="canvas"/>
            </Col>
            <Col style={{ display: (showing3 ? "block" : "none" )}}>
            <Row className="d-flex">
                <Col className="p-2">
                    <DatePicker
                        todayButton="Today's Date"
                        placeholderText="MMM DD, YYY"
                        dateFormat="MMM dd, yyy"
                        selected={startDate}
                        portalId="root-portal"
                        sm="auto"
                        onChange={date => setStartDate(date)}
                    />
                </Col>
                <Col className="p-2">
                    <DatePicker
                        selected={startDate}
                        showTimeSelect
                        showTimeSelectOnly
                        timeIntervals={15}
                        timeCaption="Time"
                        dateFormat="h:mm aa"
                        portalId="root-portal"
                        onChange={date => setStartDate(date)}
                    />
                </Col>
            </Row>
            </Col>
        </Row>
        </Draggable>

    </Container>
    )
}

export default ListItems;