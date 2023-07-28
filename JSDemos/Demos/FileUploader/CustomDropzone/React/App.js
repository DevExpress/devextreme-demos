import React from 'react';
import FileUploader from 'devextreme-react/file-uploader';
import ProgressBar from 'devextreme-react/progress-bar';

const App = () => {
  const [isDropZoneActive, setIsDropZoneActive] = React.useState(false);
  const [imageSource, setImageSource] = React.useState('');
  const [textVisible, setTextVisible] = React.useState(true);
  const [progressVisible, setProgressVisible] = React.useState(false);
  const [progressValue, setProgressValue] = React.useState(0);

  const allowedFileExtensions = ['.jpg', '.jpeg', '.gif', '.png'];

  const onDropZoneEnter = React.useCallback((e) => {
    if (e.dropZoneElement.id === 'dropzone-external') {
      setIsDropZoneActive(true);
    }
  });

  const onDropZoneLeave = React.useCallback((e) => {
    if (e.dropZoneElement.id === 'dropzone-external') {
      setIsDropZoneActive(false);
    }
  });

  const onUploaded = React.useCallback((e) => {
    const { file } = e;
    const fileReader = new FileReader();
    fileReader.onload = () => {
      setIsDropZoneActive(false);
      setImageSource(fileReader.result);
    };
    fileReader.readAsDataURL(file);
    setTextVisible(false);
    setProgressVisible(false);
    setProgressValue(0);
  });

  const onProgress = React.useCallback((e) => {
    setProgressValue((e.bytesLoaded / e.bytesTotal) * 100);
  });

  const onUploadStarted = React.useCallback(() => {
    setImageSource('');
    setProgressVisible(true);
  });

  return (
    <div className="widget-container flex-box">
      <span>Profile Picture</span>
      <div id="dropzone-external" className={`flex-box ${isDropZoneActive ? 'dx-theme-accent-as-border-color dropzone-active' : 'dx-theme-border-color'}`}>
        {imageSource && <img id="dropzone-image" src={imageSource} alt="" />}
        {textVisible && (
          <div id="dropzone-text" className="flex-box">
            <span>Drag & Drop the desired file</span>
            <span>…or click to browse for a file instead.</span>
          </div>
        )}
        <ProgressBar
          id="upload-progress"
          min={0}
          max={100}
          width="30%"
          showStatus={false}
          visible={progressVisible}
          value={progressValue}
        ></ProgressBar>
      </div>
      <FileUploader
        id="file-uploader"
        dialogTrigger="#dropzone-external"
        dropZone="#dropzone-external"
        multiple={false}
        allowedFileExtensions={allowedFileExtensions}
        uploadMode="instantly"
        uploadUrl="https://js.devexpress.com/Demos/NetCore/FileUploader/Upload"
        visible={false}
        onDropZoneEnter={onDropZoneEnter}
        onDropZoneLeave={onDropZoneLeave}
        onUploaded={onUploaded}
        onProgress={onProgress}
        onUploadStarted={onUploadStarted}
      ></FileUploader>
    </div>
  );
};

export default App;
