export type addFileType = {
  files: getFileType[];
  loader: boolean;
};

export type getFileType = {
  id: number;
  description: string;
  filePath: string;
  timeStamp: Date;
};

export type PostalModalProps = {
  showModal: string;
  handleClick: () => void;
  setShowModal: any;
};

export type DocumentTableProps = {
  className?: string;
  searchTerm: string;
};

export type SearchFieldProps = {
  setSearchTerm: any;
};

export type DocsViewerType = {
  pdfFile: string;
};
