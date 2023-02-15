export type addFileType = {
  loader: boolean;
  base64File: string;
};

export type getFileType = {
  id: number;
  description: string;
  filePath: string;
  timeStamp: Date;
  binaryString: string;
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
  binaryString: any;
};
