import React from 'react';

import styles from './Banner.module.css';

class Banner extends React.Component<{ type: any, user: any, children: any }> {

    LoggedInBanner ( {user}: any) {
        if (
            !user ||
            user.registrationStatus === 'unverified'
        ) {
            return null;
        }
    }
    render() {
        let {type, user, children} = this.props;
        const backgroundColor = type === 'success'
            ? 'var(--color-success)'
            : 'var(--color-error)';

        // Only logged in, verified users are
        // allowed to see the banner


        return (
            <div
                className={styles.banner}
                style={{backgroundColor}}
            >
                {children}
            </div>
        );
    }
}

export default Banner;