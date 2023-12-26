import React from 'react'
import { Container,Row,Col } from 'react-bootstrap'
const Box = () => {
  return (
    <>
        <Container  style={{marginTop:'650px'}} 
        className="shadow p-3 mb-3 bg-body rounded">
        <Row>
        <Col sm={4}>
            <h5 >Important Links</h5>
            <br></br>
          <div style={{backgroundColor:'#154085',marginTop:'5px',padding:'10px'}}><a style={{color:'white'}} href="https://www.sssutms.co.in/cms/Website/Download/E-Content" target="_blank">
                    <i class="fa fa-link mr-10 icon-theme"></i>E-Content
                </a></div>
          <div style={{backgroundColor:'#154085',marginTop:'5px',color:'white',padding:'10px'}}><a style={{color:'white'}} href="https://unnatbharatabhiyan.gov.in:8443/new-website/" target="_blank">
                    <i class="fa fa-link mr-10 icon-theme"></i>Unnat Bharat Abhiyan
                </a></div>
          <div style={{backgroundColor:'#154085',marginTop:'5px',color:'white',padding:'10px'}}>MPBSE</div>
          <div style={{backgroundColor:'#154085',marginTop:'5px',color:'white',padding:'10px'}}>UGC</div>
          <div style={{backgroundColor:'#154085',marginTop:'5px',color:'white',padding:'10px'}}>DCI</div>
          <div style={{backgroundColor:'#154085',marginTop:'5px',color:'white',padding:'10px'}}>PCI</div>
          <div style={{backgroundColor:'#154085',marginTop:'5px',color:'white',padding:'10px'}}>DHE</div>
      
         <h6>more...</h6>
        </Col>
        <Col sm={4}>
            <h5>Quick Links</h5>
            <br></br>
        <div style={{backgroundColor:'#158542',marginTop:'5px',color:'white',padding:'10px'}}>Apponitment (School of Homeopathy)</div>
          <div style={{backgroundColor:'#158542',marginTop:'5px',color:'white',padding:'10px'}}>Supplementary Examination Sep-2023</div>
          <div style={{backgroundColor:'#158542',marginTop:'5px',color:'white',padding:'10px'}}>Examination Results Declared</div>
          <div style={{backgroundColor:'#158542',marginTop:'5px',color:'white',padding:'10px'}}>FEE Pay Online</div>
          <div style={{backgroundColor:'#158542',marginTop:'5px',color:'white',padding:'10px'}}>ACT & ORDINATE</div>
          <div style={{backgroundColor:'#158542',marginTop:'5px',color:'white',padding:'10px'}}>RESULT</div>
          <div style={{backgroundColor:'#158542',marginTop:'5px',color:'white',padding:'10px'}}>Approvals</div>
       
         <h6>more...</h6>
        </Col>
        <Col sm={4}>
            <h5>Download Links</h5>
            <br></br>
        <div style={{backgroundColor:'#851915',marginTop:'5px',color:'white',padding:'10px'}}>Notification</div>
          <div style={{backgroundColor:'#851915',marginTop:'5px',color:'white',padding:'10px'}}>Examination Form Notification September-2023</div>
          <div style={{backgroundColor:'#851915',marginTop:'5px',color:'white',padding:'10px'}}>Notification for Enrollment BHMS 1st Year </div>
          <div style={{backgroundColor:'#851915',marginTop:'5px',color:'white',padding:'10px'}}>Ph.D Entrance Examination-2023</div>
          <div style={{backgroundColor:'#851915',marginTop:'5px',color:'white',padding:'10px'}}>Supplementary Examination June-2023</div>
          <div style={{backgroundColor:'#851915',marginTop:'5px',color:'white',padding:'10px'}}>B A M S Examination Form Notification</div>
          
          <div style={{backgroundColor:'#851915',marginTop:'5px',color:'white',padding:'10px'}}>BHMS Examination Time Table June-2023</div>
       
         <h6>more...</h6>
        </Col>
      </Row>

        </Container>
    </> 
  )
}

export default Box