import React from 'react';
import './widgetSm.css';
import { Visibility } from '@mui/icons-material';


export default function WidgetSm() {
  return <div className='widgetSm'>
        <span className="widgetSmTitle">New Join Membres</span>
        <ul className="widgetSmList">
            <li className="widgetSmListItem">
                <img src="https://images.unsplash.com/photo-1570295999919-56ceb5ecca61?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=580&q=80" alt="" className="widgetSmImage" />
                <div className="widgetSmUser">
                    <span className='widgetSmUsername'>Nacho Rebord</span>
                    <span className='widgetSmUserTitle'>Software Engineer</span>

                </div>
                <button className='widgetSmButton'>
                    <Visibility/>
                    Display
                </button>
            </li>
        </ul>
  </div>;
}
