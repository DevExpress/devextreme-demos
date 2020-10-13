<template>
  <div class="widget-container dx-theme-marker flexbox">
    <span>Profile Picture</span>
    <div id="dropzone-external" class="flexbox" v-bind:class="[isDropZoneActive ? 'dx-theme-accent-as-border-color dropzone-active' : 'dx-theme-border-color']">
      <img id="dropzone-image" v-bind:src="imageSource" v-bind:hidden="!imageSource" alt="" />
      <div id="dropzone-text" class="flexbox">
        <span>Drag & Drop the desired file</span>
        <span>…or click to browse for a file instead.</span>
      </div>
      <DxProgressBar
        id="upload-progress"
        :min="0"
        :max="100"
        width="30%"
        :showStatus="false"
        :visible="progressVisible"
        :value="progressValue"
      ></DxProgressBar>
    </div>
    <DxFileUploader
      ref="uploader"
      id="file-uploader"
      dialogTrigger="#dropzone-external"
      dropZone="#dropzone-external"
      :multiple="false"
      :allowedFileExtensions="['.jpg', '.jpeg', '.gif', '.png']"
      uploadMode="instantly"
      uploadUrl="https://js.devexpress.com/Demos/WidgetsGalleryDataService/api/ChunkUpload"
      :visible="false"
      @drop-zone-enter="onDropZoneEnter"
      @drop-zone-leave="onDropZoneLeave"
      @uploaded="onUploaded"
      @progress="onProgress"
      @upload-started="onUploadStarted"
    ></DxFileUploader>
  </div>
</template>
<script>
import { DxFileUploader } from 'devextreme-vue/file-uploader';
import { DxProgressBar } from 'devextreme-vue/progress-bar';

export default {
  components: {
    DxFileUploader,
    DxProgressBar
  },
  data() {
    return {
      isDropZoneActive: false,
      imageSource: "#",
      progressVisible: false,
      progressValue: 0
    };
  },
  methods: {
    onDropZoneEnter(e) {
      if(e.dropZoneElement.id === "dropzone-external")
        this.isDropZoneActive = true;
      console.log(this.$refs.uploader.instance);
    },
    onDropZoneLeave(e) {
      if(e.dropZoneElement.id === "dropzone-external")
        this.isDropZoneActive = false;
    },
    onUploaded(e) {
      const file = e.file;
      const dropZoneText = document.getElementById("dropzone-text");
      const fileReader = new FileReader();
      fileReader.onload = () => {
        this.isDropZoneActive = false;
        this.imageSource = fileReader.result;
      }
      fileReader.readAsDataURL(file);
      dropZoneText.style.display = "none";
      this.progressVisible = false;
      this.progressValue = 0;
    },
    onProgress(e) {
      this.progressValue = e.bytesLoaded / e.bytesTotal * 100;
    },
    onUploadStarted() {
      this.imageSource = "";
      this.progressVisible = true;
    }
  }
};
</script>
<style>
#dropzone-external {
	width: 350px;
	height: 350px;
	background-color: rgba(183, 183, 183, 0.1);
	border-width: 2px;
	border-style: dashed;
	padding: 10px;
}
#dropzone-external > * { /* TODO: Remove this hack! */
	pointer-events: none;
}
#dropzone-external.dropzone-active {
	border-style: solid;
}
.widget-container > span {
	font-size: 22px;
	font-weight: bold;
	margin-bottom: 16px;
}
#dropzone-image {
	max-width: 100%;
	max-height: 100%;
}
#dropzone-text > span {
	font-weight: 100;
	opacity: 0.5;
}
#upload-progress {
	display: flex;
	margin-top: 10px;
}
.flexbox {
	display: flex;
	flex-direction: column;
	justify-content: center;
	align-items: center;
}
</style>
