import React, { useState } from 'react';
import FileUploader from 'devextreme-react/file-uploader';

const App = () => {
  const [chunks, setChunks] = useState([]);

  const onUploadProgress = (e) => {
    const chunk = {
      segmentSize: e.segmentSize,
      bytesLoaded: e.bytesLoaded,
      bytesTotal: e.bytesTotal,
    };
    setChunks([...chunks, chunk]);
  };

  const onUploadStarted = () => {
    setChunks([]);
  };

  const getValueInKb = (value) => {
    return `${(value / 1024).toFixed(0)}kb`;
  };

  return (
    <React.Fragment>
      <FileUploader
        name="file"
        accept="image/*"
        uploadUrl="https://js.devexpress.com/Demos/WidgetsGalleryDataService/api/ChunkUpload"
        chunkSize={200000}
        onUploadStarted={onUploadStarted}
        onProgress={onUploadProgress} />
      <span className="note">Allowed file extensions: <span>.jpg, .jpeg, .gif, .png</span>.</span>
      <span className="note">Maximum file size: <span>4 MB.</span></span>
      <div className="chunk-panel">
        {
          chunks.map((c, i) => <div key={i}>
            <span>Chunk size:</span>
            <span className="segment-size dx-theme-accent-as-text-color">{getValueInKb(c.segmentSize)}</span>
            <span>, Uploaded:</span>
            <span className="loaded-size dx-theme-accent-as-text-color">{getValueInKb(c.bytesLoaded)}</span>
            <span>/</span>
            <span className="total-size dx-theme-accent-as-text-color">{getValueInKb(c.bytesTotal)}</span>
          </div>)
        }
      </div>
    </React.Fragment>
  );
};

export default App;