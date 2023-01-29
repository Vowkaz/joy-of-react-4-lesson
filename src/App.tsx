import React from 'react';

import Banner from './components/Banner';

const EXAMPLE_USER = {
    name: 'Vowkaz',
    registrationStatus: 'verified',
};

function App() {
    return (
        <Banner
            type="success"
            user={EXAMPLE_USER}
        >
            Successfully logged in! Welcome aboard, {EXAMPLE_USER.name}!
        </Banner>
    );
}

export default App;