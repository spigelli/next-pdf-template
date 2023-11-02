'use client';

import { PDFViewer } from '@react-pdf/renderer/lib/react-pdf.browser.es';
import { MyDocument } from './MyDocument';

export function RenderedDocument() {
  return (
    <PDFViewer>
      <MyDocument />
    </PDFViewer>
  );
}