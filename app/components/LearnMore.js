import React from 'react';

import { Nav } from "./Nav";
import { Newsletter } from './NewsLetterSignup';

export const Producer = (props) => {
    return (<LearnMore type={"producer"}/>);
}

export const Distributor = (props) => {
    return (<LearnMore type={"distributor"}/>);
}

export const Buyer = (props) => {
    return (<LearnMore type={"buyer"}/>);
}

const LearnMoreTemplates = {
    "producer": {
        "name": "Producer",
        "main-image": "assets/learnMore/producer.jpg",
        "title": <span>You have a farm to run. <br/> Let us take care of business.</span>,
        "subtitle": <span>Spend less time managing and<br/> more time doing what you love.</span>,
        "features":{
            "1": {
                "icon": "globe.svg",
                "heading": <span>Increase your<br/>market presence</span>,
                "text": <span>Expand your operations with our user base. Connect with buyers of all sizes on our platform: universities, restaurants, hotels - you name it. Find distributors and food hubs that can deliver your products to customers you can’t reach. Grow your customer network in half the time.</span>
            },
            "2": {
                "icon": "search.svg",
                "heading": <span>Put your best<br/>foot forward</span>,
                "text": <span>Break through the background noise with personalized profile pages. Upload photos, videos, and logos. Go the extra mile with our professional photography team. Show off certifications, awards, and any newsworthy info. Link to social media and personal webpages. Build your brand. Tell your story.</span>
            },
            "3": {
                "icon": "checklist.svg",
                "heading": <span>Organized and<br/>up-to-date</span>,
                "text": "Your inventory can change in instant – we’re here to keep you organized. Send notifications on product changes simultaneously to your entire network. Change details of all your outbound orders."
            },
            "4": {
                "icon": "mobile.svg",
                "heading": <span>On the go.<br/>Anywhere.</span>,
                "text": <span>You don’t need to leave the field to get the job done. FoodLove offers smartphone and tablet compatibility for working on the go. Take pictures you can upload while out in the field.</span>
            }
        }
    },
    "distributor": {
        "name": "Distributor",
        "main-image": "assets/learnMore/distributors.jpg",
        "title": <span>You want to source locally.{window.innerWidth >= 770 ? <br/> : <div/>} We’re here to help.</span>,
        "subtitle": <span>With FoodLove, buying local is<br/>convenient, efficient, and all in one place.</span>,
        "features":{
            "1": {
                "icon": "accel.svg",
                "heading": <span>Accelerated<br/>productivity</span>,
                "text": <span>Go from phone calls, emails, and sticky notes to an intelligent platform that fits your needs. Save time and let buyers place orders through our site. Organize and automate your inbound and outbound orders. Upload excel sheets to update your available products en masse. Manage all your buyer and producer accounts all in one place.</span>
            },
            "2": {
                "icon": "globe.svg",
                "heading": <span>Expand your<br/>customer network</span>,
                "text": <span>Farms want to find new sales channels. Buyers want to find new sources. We bring them all to you. Send invitations to connect to nearby farms and buyers and begin working with your new partners immediately.</span>
            },
            "3": {
                "icon": "checklist.svg",
                "heading": <span>Stay<br/>organized</span>,
                "text": <span>Orders can change in an instant – we’re here to keep you at your A game. Update invoices and orders from anywhere. Send automatic alerts to buyers and producers. Keep a final copy of everything online. No sweat.</span>
            },
            "4": {
                "icon": "mobile.svg",
                "heading": <span>On the go.<br/>Anywhere.</span>,
                "text": <span>You don’t need your desktop to get the job done. FoodLove offers smartphone and tablet compatibility so you can work when you’re and about. Have customers sign invoices on your iPad. Send notifications from your phone. Make mobile customer updates. You’re always on the go. Your business should be too.</span>
            }
        }
    },
    "buyer":{
        "name": "Buyer",
        "main-image": "assets/learnMore/buyers.jpg",
        "title": <span>You have a business to run.<br/>We’ve got your back.</span>,
        "subtitle": <span>Simple, powerful tools that make working with buyers and producers efficient and effective.</span>,
        "features":{
            "1": {
                "icon": "mobile.svg",
                "heading": <span>On the go.<br/>Anywhere.</span>,
                "text": <span>Ditch the phone calls and sticky notes and order everything you need all in one place. Search through all available products near you. Place multiple orders at once. Have everything delivered directly to your door.</span>
            },
            "2": {
                "icon": "checklist.svg",
                "heading": <span>Stay<br/>Organized</span>,
                "text": <span>Your orders can change in instant – we’re here to keep you in the loop. Receive notifications on your order status and changes. View details of all your orders at any stage: draft, submitted, or delivered. Everything you need to know – in real time.</span>
            },
            "3": {
                "icon": "location.svg",
                "heading": <span>Know where your<br/>food comes from</span>,
                "text": <span>The food you’re ordering is one of a kind. Explore producer profiles to learn about the people behind your food. Check out certifications and awards. Dig deeper with our multimedia gallery. Find out how you’ve reduced your carbon footprint by buying locally.</span>
            },
            "4": {
                "icon": "search.svg",
                "heading": <span>Find products you and<br/>your customers will love</span>,
                "text": <span>Discover what your local artisans and distributors have to offer. Connect with producers and distributors that meet your business needs. Browse through featured products and foods to inspire your next dish.</span>
            }
        }
    }
};

export class LearnMore extends React.Component{
    constructor(props){
        super(props);

        window.document.body.style.backgroundColor = "#f7f7f7";

        this.type = this.props.type;

        this.template = LearnMoreTemplates[this.type];
    }

    componentDidMount(){
        window.addEventListener('resize', this.handleResize.bind(this));
    }

    componentWillUnmount(){
        window.removeEventListener('resize', this.handleResize.bind(this));
    }

    handleResize(){
        this.setState({});
    }

    goToSignUp(){
        window.location.href = "http://www.foodloveservices.com/users/sign_up";
    }

    scrollToContent(){
        window.scroll(0, window.innerHeight);
    }

    render(){
        const portrait = (window.innerWidth / window.innerHeight > 1.97 || window.innerWidth / window.innerHeight < 1.5) && !isMobile();

        return(
            <div>
                <link rel="stylesheet" type = "text/css" href = 'css/learnmore.css'/>
                <Nav collapsable={!isMobile()}/>
                <div id="learnmore-main" className="drop-shadow" style={portrait ? {width: '100vw'} : {height: '100vh'}}>
                    {!portrait ? <img src={this.template["main-image"]} height="100%" style={{opacity:'0.6'}}/> : <img src={this.template["main-image"]} width="100%" style={{opacity:'0.6'}}/>}
                    <div id="learnmore-title">{this.template["title"]}</div>
                    <div id="learnmore-subtitle">{this.template["subtitle"]}</div>
                    <button id="signup-button" className="btn btn-lg btn-success" onClick={this.goToSignUp}>
                        Sign Up as a {this.template["name"]}
                    </button>
                    {!portrait ? <img src="assets/arrow.svg" className="down-arrow-svg" id="scroll-down" onClick={this.scrollToContent}/> : <span />}
                </div>
                <div className="horizontal-spacer"></div>
                <div id="learnmore-features">
                    <div id="features-container">
                        <div className="feature">
                            <div className="feature-icon">
                                <img src={"assets/icons/" + this.template["features"]["1"]["icon"]} width="100%"/>
                            </div>
                            <div className="feature-header">{this.template["features"]["1"]["heading"]}</div>
                            <div className="feature-text">{this.template["features"]["1"]["text"]}</div>
                        </div>
                        <div className="feature">
                            <div className="feature-icon">
                                <img src={"assets/icons/" + this.template["features"]["2"]["icon"]} width="100%"/>
                            </div>
                            <div className="feature-header">{this.template["features"]["2"]["heading"]}</div>
                            <div className="feature-text">{this.template["features"]["2"]["text"]}</div>
                        </div>
                        <div className="feature">
                            <div className="feature-icon">
                                <img src={"assets/icons/" + this.template["features"]["3"]["icon"]} width="100%"/>
                            </div>
                            <div className="feature-header">{this.template["features"]["3"]["heading"]}</div>
                            <div className="feature-text">{this.template["features"]["3"]["text"]}</div>
                        </div>
                        <div className="feature">
                            <div className="feature-icon">
                                <img src={"assets/icons/" + this.template["features"]["4"]["icon"]} width="100%"/>
                            </div>
                            <div className="feature-header">{this.template["features"]["4"]["heading"]}</div>
                            <div className="feature-text">{this.template["features"]["4"]["text"]}</div>
                        </div>
                    </div>
                </div>
                <div className="horizontal-spacer"></div>
                <div id="signup-big">
                    <button id="signup-big-button" className="btn btn-lg btn-success" onClick={this.goToSignUp}>Sign Up Now!</button>
                </div>
                <div className="horizontal-spacer"></div>
                <div className="horizontal-spacer"></div>
                <Newsletter/>
                <div className="horizontal-spacer"></div>
                <div className="horizontal-spacer"></div>
            </div>
        );
    }
}
