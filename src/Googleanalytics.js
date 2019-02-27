import React, { Component } from "react";
import Helmet from "react-helmet";

export default class Weather extends Component {

  componentDidMount(props) {
    window.dataLayer = window.dataLayer || [];
    function gtag(){window.dataLayer.push(arguments)}
    gtag('js', new Date());

    gtag('config', 'UA-15747277-1');
  }

  render(props) {
    return (
      <div className="analytics" id="googleAnalytics">
        <Helmet>
          <script async src="https://www.googletagmanager.com/gtag/js?id=UA-15747277-1"></script>
        </Helmet>
      </div>
    )
  }
}
