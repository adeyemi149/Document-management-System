import React from 'react'
import { Viewer, Worker } from '@react-pdf-viewer/core';
import { DocsViewerType } from '../models/types';
import '@react-pdf-viewer/core/lib/styles/index.css';
import { useAppSelector } from '../store/hook';

const DocumentViewer: React.FC<DocsViewerType> = ({ binaryString }) => {
	const url = useAppSelector(state => state.doc.base64File)
	console.log(url)
	return (
		<>
			<Worker workerUrl="https://unpkg.com/pdfjs-dist@3.1.81/build/pdf.worker.min.js">
				<Viewer fileUrl={url}></Viewer>
			</Worker>
		</>
	)
}

export default DocumentViewer;