import React, { Component } from "react";

class Wpfront extends Component {
  state = {
    latestposttitle: "searching...",
    firstpostcontent: "looking up..."
  };
  constructor(props) {
    super(props);
  }

  componentDidMount(props) {
    let that = this;
    let dest = this.props.lookupUrl.toString();
    alert(dest);
    fetch(dest, {})
      .then(function(response) {
        if (response.ok) {
          console.log("response ok");
          console.log(response.json);
          for (var e in response.json) {
            console.log(e.toString());
          }
          console.log(response.text);
          return response.json();
        }
        throw new Error("Network did not respond.");
        return response.blob();
      })
      .then(function(myReturn) {
        console.log(myReturn[0].title.rendered);
        that.setState({
          latestposttitle: myReturn[0].title.rendered,
          firstpostcontent: myReturn[0].content.rendered
        });
      });
  }

  render(props) {
    return (
      <div className="WP-App">
        <section id="the1posttitle">
          <h3>{this.state.latestposttitle}</h3>
        </section>
        <div
          id="wp-content-area"
          dangerouslySetInnerHTML={{ __html: this.state.firstpostcontent }}
        />
      </div>
    );
  }
}

export default Wpfront;
