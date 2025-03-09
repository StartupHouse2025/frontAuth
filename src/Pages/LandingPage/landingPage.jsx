import React from 'react';
import './landingPage.css';

const LandingPage = () => {
    return (
        <div className="landing-container">
            <header className="landing-header">
                <h1>Fluxi</h1>
                <p>Fluxi is 100% free</p>
            </header>
            <section className="landing-main">
                <h2>Add your product, and Fluxi creates your sales funnel in seconds with AI</h2>
                <div className="features">
                    <div className="feature">Fluxi AI finds complementary offers that maximize your average sales value with strategic upsells, downsells, and bump offers.</div>
                    <div className="feature">Continuous optimization, based on your buyers' real behavior.</div>
                </div>
                <button className="try-now">Try now!</button>
            </section>
            <section className="landing-details">
                <div className="detail">Work with any product sales funnel</div>
                <div className="detail">Smart and effective upsell and bump offers for each product</div>
                <div className="detail">Create and edit over 100 fully optimized sales funnels</div>
                <div className="detail">Personalized AI digital funnels for each product</div>
            </section>
            <section className="landing-stats">
                <div className="stat">
                    <h3>Total sales</h3>
                    <p>$4389</p>
                </div>
                <div className="stat">
                    <h3>Products sold</h3>
                    <p>530</p>
                </div>
                <div className="stat">
                    <h3>Buyers</h3>
                    <p>134</p>
                </div>
            </section>
            <footer className="landing-footer">
                <p>It's like having an expert sales optimization team working 24/7</p>
                <button className="try-free">Try Fluxi for free!</button>
                <p>Sales like magic</p>
                <button className="start-free">Start for free now!</button>
                <p>Made with passion by Fluxi</p>
                <p>Copyright © 2023. All rights reserved.</p>
            </footer>
        </div>
    );
};

export default LandingPage;
