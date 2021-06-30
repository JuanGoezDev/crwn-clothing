import React from "react";
import "./styles.scss";
import MenuItem from "../MenuItem";
import SECTIONS_DATA from "./sectionsData";
class Directory extends React.Component {
  constructor() {
    super();

    this.state = {
      sections: SECTIONS_DATA,
    };
  }

  render() {
    return (
      <div className="directory-menu">
        {this.state.sections.map(({ id, ...otherSectionProps }) => (
          <MenuItem key={id} {...otherSectionProps} />
        ))}
      </div>
    );
  }
}

export default Directory;
