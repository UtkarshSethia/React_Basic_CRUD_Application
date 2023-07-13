import * as React from 'react';
import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import Typography from '@mui/material/Typography';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import './App.css';
export default function BasicAccordion({details}) {
  return (
    <div>
    
      <Accordion style ={{boxShadow:"none"}}>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel2a-content"
          id="panel2a-header"
        >
          <Typography style={{color:"navy" , fontSize:"12px"}}>View Details</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography className='details'>
            Role- {details.role}
            <br/>
            Joined- {details.joined}
          </Typography>
        </AccordionDetails>
      </Accordion>
     
    </div>
  );
}