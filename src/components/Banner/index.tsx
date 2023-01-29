import React from 'react';

import styles from './Banner.module.css';
interface bannerProps {
    type: string,
    user?: any,
    children: any
}
export function Banner({ type, children }: bannerProps) {
    const backgroundColor = type === 'success'
        ? 'var(--color-success)'
        : 'var(--color-error)';



    return (
        <div
            className={styles.banner}
            style={{ backgroundColor }}
        >
            {children}
        </div>
    );
}
export function LoggedInBanner({ user,type, children }: bannerProps) {
    // Only logged in, verified users are
    // allowed to see the banner
    if (
        !(!user ||
            user.registrationStatus === 'unverified')
    ) {
    } else {
        return null;
    }

    return <Banner type={type}>{children}</Banner>
}


/*
    BlackFriday Sales
 */

function BlackFridaySaleBanner({ saleStartDate, saleEndDate }: any) {
    // Check to see if the banner should be shown
    const now = new Date();
    if (now < saleStartDate || now > saleEndDate) {
        return null;
    }

    // Hardcode the type and children
    return (
        <Banner type="success">
            We're having a Black Friday sale! Get 50% off selected products.
        </Banner>
    );
}