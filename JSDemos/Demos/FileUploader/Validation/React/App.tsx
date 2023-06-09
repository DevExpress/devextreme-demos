import React from 'react';
import FileUploader from 'devextreme-react/file-uploader';

const fileExtensions = ['.jpg', '.jpeg', '.gif', '.png'];

class App extends React.Component {
  render() {
    return (
      <div className="main-block">
        <div className="file-uploader-block">
          // @ts-expect-error TS(2786): 'FileUploader' cannot be used as a JSX component.
          <FileUploader multiple={true} uploadMode="useButtons" uploadUrl="https://js.devexpress.com/Demos/NetCore/FileUploader/Upload" allowedFileExtensions={fileExtensions} />
          <span className="note">{'Allowed file extensions: '}
            <span>.jpg, .jpeg, .gif, .png</span>
            .
          </span>
        </div>
        <div className="file-uploader-block" style={{ float: 'right' }}>
          // @ts-expect-error TS(2786): 'FileUploader' cannot be used as a JSX component.
          <FileUploader multiple={true} uploadMode="useButtons" uploadUrl="https://js.devexpress.com/Demos/NetCore/FileUploader/Upload" maxFileSize={4000000} />
          <span className="note">{'Maximum file size: '}
            <span>4 MB</span>
            .
          </span>
        </div>
      </div>
    );
  }
}

export default App;
