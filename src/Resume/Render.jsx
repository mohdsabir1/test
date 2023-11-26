import React from 'react';
import { Document, Page } from 'react-pdf';
import resume from '../assets/Mohd_Sabir.pdf';



export const RenderPDF = () => {
  return (
    <div>
      <Document file={resume}>
        <Page pageNumber={1} />
      </Document>
    </div>
  );
};
