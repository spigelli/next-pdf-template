import { createElement } from 'react';
import { MyDocument } from "../app/MyDocument.jsx";
import { renderToFile } from "@react-pdf/renderer";

/**
 * Prints the document to a file
 */
async function print() {
  console.log('Printing document to file...');
  await renderToFile(
    createElement(MyDocument, {}),
    `./build/my-document.pdf`,
  );
  console.log(`Document printed to file: ./build/my-document.pdf`);
}

print();