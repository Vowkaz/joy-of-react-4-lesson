import React from 'react';

import {LoggedInBanner} from './components/Banner';

const EXAMPLE_USER = {
    name: 'Vowkaz',
    registrationStatus: 'verified',
};

function App() {
    return (
        <>
        <LoggedInBanner
            type="success"
            user={EXAMPLE_USER}
        >
            Chance your password!, {' '} { EXAMPLE_USER.name}

        </LoggedInBanner>


        </>
    );
}



export default App;