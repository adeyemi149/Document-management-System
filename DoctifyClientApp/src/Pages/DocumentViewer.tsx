import React from 'react'
import { Viewer, Worker } from '@react-pdf-viewer/core';
import { DocsViewerType } from '../models/types';
import { useEffect } from 'react';
import '@react-pdf-viewer/core/lib/styles/index.css';

const DocumentViewer: React.FC<DocsViewerType> = ({ pdfFile }) => {
	return (
		<>
			<Worker workerUrl="https://unpkg.com/pdfjs-dist@3.1.81/build/pdf.worker.min.js">
				<Viewer fileUrl={""}></Viewer>
			</Worker>
		</>
	)
}

export default DocumentViewer;