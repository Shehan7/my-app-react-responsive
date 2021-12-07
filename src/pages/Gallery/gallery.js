import React from "react";
import { _IMAGES } from "./data";
import ImageGallery from "react-image-gallery";
import "react-image-gallery/styles/css/image-gallery.css";
import Style from '../About/about.module.css';

class ReactImageGalleryTest extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      items: []
    };
  }

  render() {
    return (
      <div>
          <div className={Style.headAbout}>
                <h1>Gallery</h1>
         </div>
         <div className='container mt-5 mb-5'>
            <ImageGallery showThumbnails={true} items={_IMAGES} />
        </div>
      </div>
    );
  }
}
export default ReactImageGalleryTest;
