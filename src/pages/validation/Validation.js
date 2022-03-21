import React from 'react'
import "./Validation.css"
import PanoramaIcon from '@material-ui/icons/Panorama';
import SvgPicture from '../../assets/icons/Picture';
import Sidebar from '../../components/sidebar/Sidebar';
import Topbar from '../../components/topbar/Topbar';

export default function Validation() {
  return (
    <div className='validation'>
      <Topbar/>
      <div>
      <Sidebar/>
      <div className='validationContent'>
      <h2 className='text'>Validation</h2>
      <div className='tableVal'>
          <h3 className='title'>Validate your image here</h3>

          <div className='border'>
          <input type='file' name="file"/>

            <h4>Drag any image file here <br></br>or browser from your computer</h4>
            <div className='img'>
              <SvgPicture/>
            </div>
          </div>
      </div>
      </div>
      </div>
    </div>
  )
}
