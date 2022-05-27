import { FilePond, registerPlugin } from "react-filepond";

import "filepond/dist/filepond.min.css";

import FilePondPluginImageExifOrientation from "filepond-plugin-image-exif-orientation";
import FilePondPluginImagePreview from "filepond-plugin-image-preview";
import "filepond-plugin-image-preview/dist/filepond-plugin-image-preview.css";

registerPlugin(FilePondPluginImageExifOrientation, FilePondPluginImagePreview);

const PicUpload = ({ pic, setPic }) => {
  return (
    <FilePond
      className="rounded-xl overflow-hidden"
      files={pic}
      allowMultiple={false}
      onupdatefiles={setPic}
      labelIdle={`<div class="text-gray-700 dark:text-zinc-400">Drag & Drop your files or <span class="text-primary font-semibold">Browse</span></div>`}
    />
  );
};

export default PicUpload;
