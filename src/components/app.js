import React from 'react';
import DemoForm from './demo_form';
import '../assets/css/app.css';
import logo from '../assets/images/logo.svg';

const user = {
    email: 'someeamil@test.com'
}
const App = () => (
    <div>
        <div className="app">
         
            {/* <DemoForm email={user.email}/> */}
            <DemoForm/>
        </div>
    </div>
);

export default App;
